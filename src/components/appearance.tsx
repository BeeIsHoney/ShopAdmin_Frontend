'use client';

import {createContext, useContext, useEffect, useState, type ReactNode} from 'react';
import {Check, Palette} from 'lucide-react';
import {ADMIN_THEME_KEY, DEFAULT_ADMIN_THEME, adminTheme, type AdminTheme} from '@/lib/admin-theme';

type ThemeContextValue = {
  theme: AdminTheme;
  selectTheme: (theme: AdminTheme) => void;
  storageAvailable: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppearanceProvider({children}: {children: ReactNode}) {
  const [theme, setTheme] = useState<AdminTheme>(DEFAULT_ADMIN_THEME);
  const [storageAvailable, setStorageAvailable] = useState(true);

  useEffect(() => {
    const apply = (value: unknown) => {
      const next = adminTheme(value);
      document.documentElement.dataset.adminTheme = next;
      setTheme(next);
    };
    try {
      apply(localStorage.getItem(ADMIN_THEME_KEY));
    } catch {
      apply(document.documentElement.dataset.adminTheme);
      setStorageAvailable(false);
    }
    const sync = (event: StorageEvent) => {
      if (event.storageArea === window.localStorage && (event.key === ADMIN_THEME_KEY || event.key === null)) {
        apply(event.newValue);
      }
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  function selectTheme(value: AdminTheme) {
    const next = adminTheme(value);
    document.documentElement.dataset.adminTheme = next;
    setTheme(next);
    try {
      localStorage.setItem(ADMIN_THEME_KEY, next);
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
  }

  return <ThemeContext.Provider value={{theme, selectTheme, storageAvailable}}>{children}</ThemeContext.Provider>;
}

const themes = [
  {id: 'blue-glass', name: 'Blue Glass', description: 'Dark navy, soft glass surfaces and blue accents.', default: true},
  {id: 'original', name: 'Original', description: 'The original black dashboard with neutral accents.', default: false},
] as const;

export function Appearance() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Appearance requires AppearanceProvider.');
  const {theme, selectTheme, storageAvailable} = context;

  return <div className="appearance-page">
    <div className="page-title"><div><h1>Appearance</h1><p>Choose how your admin dashboard looks.</p></div></div>
    <section className="card appearance-card" aria-labelledby="appearance-title">
      <div className="section-head"><div><h2 id="appearance-title"><Palette size={16}/> Theme</h2><p>Changes apply immediately.</p></div></div>
      <fieldset className="appearance-options">
        <legend className="appearance-sr-only">Dashboard theme</legend>
        {themes.map(option => <label key={option.id} className="theme-option">
          <input type="radio" name="admin-theme" value={option.id} checked={theme === option.id} onChange={() => selectTheme(option.id)}/>
          <span className="theme-option-content">
            <span className={`theme-preview preview-${option.id}`} aria-hidden="true"><span className="preview-sidebar"><i/><i/><i/></span><span className="preview-main"><span className="preview-header"/><span className="preview-stats"><i/><i/></span><span className="preview-table"><i/><i/><i/></span></span></span>
            <span className="theme-option-heading"><b>{option.name}</b>{option.default && <small>Default</small>}<span className="theme-selected" aria-hidden="true">{theme === option.id && <Check size={14}/>}</span></span>
            <span className="theme-description">{option.description}</span>
          </span>
        </label>)}
      </fieldset>
      <p className="appearance-note" role="status">{storageAvailable ? 'Your theme is saved in this browser.' : 'Your theme is applied for this visit. Browser storage is unavailable.'}</p>
    </section>
  </div>;
}
