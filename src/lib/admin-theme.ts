export const ADMIN_THEME_KEY = 'shop-admin:theme';
export const DEFAULT_ADMIN_THEME = 'blue-glass';
export type AdminTheme = 'blue-glass' | 'original';

export function adminTheme(value: unknown): AdminTheme {
  return value === 'original' ? 'original' : DEFAULT_ADMIN_THEME;
}

// Run before the body paints so a saved Original theme does not flash blue.
export const ADMIN_THEME_BOOTSTRAP = `(()=>{let theme='${DEFAULT_ADMIN_THEME}';try{if(localStorage.getItem('${ADMIN_THEME_KEY}')==='original')theme='original'}catch{}document.documentElement.dataset.adminTheme=theme})()`;
