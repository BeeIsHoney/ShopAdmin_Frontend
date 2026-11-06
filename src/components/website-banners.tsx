'use client';

import {useState, type FormEvent} from 'react';
import {Image as ImageIcon, Pencil, Plus, Trash2} from 'lucide-react';
import {api, send} from '@/lib/client';
import {imageSource} from '@/lib/shop-catalog';
import {useData, usePanel} from './context';
import {ImageField} from './owner-image-field';
import {PageTitle} from './views';
import {Badge, Button, Empty, ErrorBox, Field, Form, Loading, Modal, SectionHead} from './ui';

interface WebsiteBanner {
  id: number;
  title: string;
  imageUrl: string;
  active: boolean;
  sortOrder: number;
  placement: 'HOME' | 'CATALOG' | 'PROFILE';
}

type Placement = 'HOME'|'CATALOG'|'PROFILE';
const locations={HOME:{label:'Home Banner',feature:'homeBanner'},CATALOG:{label:'Shop Catalog Banner',feature:'shopCatalog'},PROFILE:{label:'Profile Banner',feature:'profileBanner'}} as const;
export function WebsiteBanners({placement='HOME'}:{placement?:Placement}) {
 const {profile}=usePanel();
 if(!profile.shop.subscription?.permissions[locations[placement].feature])return <section className="card"><h2>{locations[placement].label}</h2><p>Locked by Main Admin. Contact Main Admin to unlock this banner location.</p></section>;
 return <BannerManager key={placement} placement={placement}/>;
}
function BannerManager({placement}:{placement:Placement}) {
  const {invalidate, notify} = usePanel();
  const {data, error, refreshError} = useData('website-banners-'+placement, async () => (await api<WebsiteBanner[]>('banners')).filter(banner => (banner.placement??'HOME')===placement));
  const [editing, setEditing] = useState<WebsiteBanner | null>(null);
  const [revision, setRevision] = useState(0);
  const [removing, setRemoving] = useState<WebsiteBanner | null>(null);

  function resetEditor() {
    setEditing(null);
    setRevision(value => value + 1);
  }

  if (error) return <ErrorBox message={error} retry={invalidate}/>;
  if (!data) return <Loading/>;

  return <>
    <PageTitle title={locations[placement].label} sub="Customize this location on your customer website."/>
    {refreshError && <ErrorBox message={refreshError} retry={invalidate}/>}
    <div className="banner-settings-grid">
      <section className="card">
        <SectionHead title="Your banners" sub="Lower sort numbers appear first." action={<Button onClick={resetEditor}><Plus size={15}/> Add banner</Button>}/>
        {!data.some(banner => banner.active) && <div className="notice"><ImageIcon size={18}/><p>Your website shows its default banner until you save an active banner.</p></div>}
        {!data.length ? <Empty title="No custom banners" text="Upload a banner using the form. Your website already shows its default banner."/> :
          <div className="website-banner-list">{data.map(banner => <article key={banner.id} className="website-banner-row">
            <div className="website-banner-preview"><img src={imageSource(banner.imageUrl)} alt={banner.title} loading="lazy"/></div>
            <div className="website-banner-info"><div><h3>{banner.title}</h3><small>Sort order: {banner.sortOrder}</small></div><Badge value={banner.active}/></div>
            <div className="row-actions"><Button onClick={() => setEditing(banner)} title={'Edit ' + banner.title}><Pencil size={14}/> Edit</Button><Button variant="danger" onClick={() => setRemoving(banner)} title={'Delete ' + banner.title}><Trash2 size={14}/> Delete</Button></div>
          </article>)}</div>}
      </section>
      <section className="card website-banner-editor">
        <SectionHead title={editing ? 'Edit banner' : 'Add banner'} sub="Use a wide image, ideally 3:1, such as 1800 × 600."/>
        <BannerEditor key={`${editing?.id ?? 'new'}-${revision}`} banner={editing} placement={placement} onCancel={resetEditor} onSaved={() => {resetEditor();invalidate();notify('Website banner saved.');}}/>
      </section>
    </div>
    {removing && <Modal title="Delete banner?" description={removing.title} onClose={() => setRemoving(null)}>
      <Form submit="Delete banner" danger onCancel={() => setRemoving(null)} onSubmit={async () => {
        await api(`banners/${removing.id}`, {method: 'DELETE'});
        if (editing?.id === removing.id) resetEditor();
        setRemoving(null);invalidate();notify('Website banner deleted.');
      }}><p>The website shows its default banner when no active banners remain.</p></Form>
    </Modal>}
  </>;
}

function BannerEditor({banner, placement, onCancel, onSaved}: {banner: WebsiteBanner | null; placement:Placement; onCancel: () => void; onSaved: () => void}) {
  const [title, setTitle] = useState(banner?.title ?? '');
  const [imageUrl, setImageUrl] = useState(banner?.imageUrl ?? '');
  const [active, setActive] = useState(banner?.active ?? true);
  const [sortOrder, setSortOrder] = useState(banner?.sortOrder ?? 0);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (uploading || saving) return;
    if (!title.trim() || !imageSource(imageUrl)) {setError('Enter a title and upload a banner or paste an HTTPS image URL.');return;}
    if (!Number.isInteger(sortOrder) || sortOrder < 0 || sortOrder > 9999) {setError('Enter a sort order from 0 to 9999.');return;}
    setSaving(true);setError('');
    try {
      await send(banner ? `banners/${banner.id}` : 'banners', {title: title.trim(), imageUrl, active, sortOrder, placement}, banner ? 'PUT' : 'POST');
      onSaved();
    } catch (failure) {setError(failure instanceof Error ? failure.message : 'Unable to save the banner.');}
    finally {setSaving(false);}
  }

  return <form onSubmit={save} aria-busy={saving || uploading}>
    <fieldset disabled={saving} className="form-fields">
      <Field label="Banner title" hint="A short description for customers using screen readers."><input required maxLength={160} value={title} onChange={event => setTitle(event.target.value)} placeholder="Game top-up offers"/></Field>
      <ImageField label="Banner image" value={imageUrl} onChange={setImageUrl} onBusyChange={setUploading}/>
      <Field label="Sort order"><input required type="number" min={0} max={9999} step={1} value={sortOrder} onChange={event => setSortOrder(Number(event.target.value))}/></Field>
      <label className="checkbox"><input type="checkbox" checked={active} onChange={event => setActive(event.target.checked)}/> Active — show on the customer website</label>
    </fieldset>
    {error && <ErrorBox message={error}/>}
    <div className="form-footer"><Button disabled={saving || uploading} onClick={onCancel}>Clear</Button><Button type="submit" variant="primary" disabled={saving || uploading}>{uploading ? 'Uploading…' : saving ? 'Saving…' : banner ? 'Update banner' : 'Save banner'}</Button></div>
  </form>;
}
