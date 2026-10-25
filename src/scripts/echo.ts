/* Motor de animación ECHO (portado desde portfolio-echo-kit/js/main.js).
   Cada sección "pin" es un contenedor alto con un .stage sticky; el progreso 0..1
   del scroll dentro del contenedor (suavizado con lerp) maneja las transformaciones.
   El HTML se genera en build (index.astro); aquí solo se anima. */

type Item = { title: string; image: string | null; href: string | null; sub?: string };
type EchoData = { word: string; featured: Item[]; works: Item[] };
type Texture = { src: HTMLCanvasElement };

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s)!;
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SM = reduce ? 1 : 0.12; // factor de suavizado
const store = {
  get: (k: string) => { try { return sessionStorage.getItem(k); } catch { return null; } },
  set: (k: string, v: string) => { try { sessionStorage.setItem(k, v); } catch { /* sin almacenamiento */ } }
};

const D: EchoData = JSON.parse($('#echo-data').textContent || '{}');

/* ---------- Placeholders generados (si image === null) ---------- */
function rng(a: number) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function canvas(W: number, H: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas'); c.width = W; c.height = H; return [c, c.getContext('2d')!];
}
function fitText(x: CanvasRenderingContext2D, text: string, maxW: number, start: number) {
  let fs = start; x.font = `800 ${fs}px Manrope, system-ui, sans-serif`;
  while (x.measureText(text).width > maxW && fs > 12) { fs -= 2; x.font = `800 ${fs}px Manrope, system-ui, sans-serif`; }
  return fs;
}
function artDark(title: string, seed: number, W = 960, H = 576) {
  const [c, x] = canvas(W, H), r = rng(seed);
  x.fillStyle = '#07080c'; x.fillRect(0, 0, W, H);
  for (let k = 0; k < 30; k++) {
    x.beginPath(); let px = r() * W, py = r() * H * .4; x.moveTo(px, py);
    for (let s = 0; s < 46; s++) { px += Math.cos(s * .17 + k) * 15 + (r() - .5) * 5; py += Math.sin(s * .11 + k * .7) * 9 + 8; x.lineTo(px, py); }
    x.strokeStyle = `hsla(${[352, 18, 205, 282][k % 4]},85%,60%,${.07 + r() * .25})`; x.lineWidth = 1 + r() * 2.6; x.stroke();
  }
  x.fillStyle = 'rgba(255,255,255,.14)'; [0, 1, 2].forEach(i => x.fillRect(W - 250 + i * 70, 34, 48, 6)); x.fillRect(40, 34, 70, 6);
  const words = title.toUpperCase().split(' '); const lines = words.length > 2 ? [words.slice(0, 2).join(' '), words.slice(2).join(' ')] : words;
  const fs = Math.min(...lines.map(l => fitText(x, l, W * .8, 130)));
  x.font = `800 ${fs}px Manrope, system-ui, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.shadowColor = 'rgba(255,255,255,.55)'; x.shadowBlur = 24; x.fillStyle = '#fff';
  lines.forEach((l, i) => x.fillText(l, W / 2, H / 2 + (i - (lines.length - 1) / 2) * fs * .95));
  return c;
}
function artLight(title: string, seed: number, W = 960, H = 576) {
  const [c, x] = canvas(W, H), r = rng(seed);
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#f6f6f4'); g.addColorStop(1, `hsl(${200 + r() * 40},8%,${68 + r() * 10}%)`);
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(40, 34, 60, 6); [0, 1, 2, 3].forEach(i => x.fillRect(W - 300 + i * 66, 34, 40, 6));
  const fs = fitText(x, title, W * .78, 74); x.font = `800 ${fs}px Manrope, system-ui, sans-serif`;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#1a1b1f'; x.fillText(title, W / 2, H * .42);
  x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(W * .3, H * .56, W * .4, 8); x.fillRect(W * .36, H * .62, W * .28, 8);
  x.fillStyle = '#16171b'; x.beginPath(); x.roundRect(W / 2 - 95, H * .74, 190, 50, 25); x.fill();
  return c;
}
function coverTo(img: HTMLImageElement, W: number, H: number) {
  const [c, x] = canvas(W, H);
  const s = Math.max(W / img.width, H / img.height);
  x.drawImage(img, 0, (H - img.height * s) / 2, img.width * s, img.height * s); return c;
}
function makeTexture(item: Item, seed: number, onready: () => void): Texture {
  const t = { src: artDark(item.title, seed) };
  if (item.image) { const im = new Image(); im.onload = () => { t.src = coverTo(im, 960, 576); onready(); }; im.src = item.image; }
  return t;
}

/* ---------- Alturas de los contenedores "pin" ---------- */
const NF = D.featured.length, NW = D.works.length;
const panelEls = $$('.panel', $('#expTrack')), titleEls = $$('.ttl', $('#expTrack')), NP = panelEls.length;
function setHeights() {
  $('#home').style.height = '520vh';
  $('#experience').style.height = (NP * 85 + 100) + 'vh';
  $('#projects').style.height = (NF * 70 + 100) + 'vh';
  $('#works').style.height = (NW * 70 + 160) + 'vh';
}
setHeights();

const wrapProg = (el: HTMLElement) => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
const near = (el: HTMLElement) => { const r = el.getBoundingClientRect(); return r.bottom > -innerHeight * .5 && r.top < innerHeight * 1.5; };
const step = (pos: number, a = .25, b = .75) => { const i = Math.floor(pos), f = pos - i; return i + ease(clamp((f - a) / (b - a))); }; // dwell en cada panel
const pageTop = (el: HTMLElement) => el.getBoundingClientRect().top + scrollY;
const go = (top: number) => scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });

/* ---------- Remolinos (fondo del "Sobre mí") ---------- */
function drawSwirl() {
  const cv = $<HTMLCanvasElement>('#swirl'), w = cv.width = innerWidth, h = cv.height = innerHeight, x = cv.getContext('2d')!, r = rng(7);
  x.fillStyle = '#0a0b0e'; x.fillRect(0, 0, w, h);
  for (let k = 0; k < 150; k++) {
    const cx = r() * w, cy = r() * h, rad = 20 + r() * 110, turns = 2 + r() * 3, dir = r() > .5 ? 1 : -1;
    x.beginPath();
    for (let a = 0; a < turns * Math.PI * 2; a += .12) { const rr = rad * a / (turns * Math.PI * 2); const px = cx + Math.cos(a * dir) * rr, py = cy + Math.sin(a * dir) * rr * .8; if (a) x.lineTo(px, py); else x.moveTo(px, py); }
    x.strokeStyle = `rgba(255,255,255,${.05 + r() * .3})`; x.lineWidth = .8 + r() * 2.4; x.stroke();
  }
  const g = x.createRadialGradient(w / 2, h / 2, h * .2, w / 2, h / 2, h * .9); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.65)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
}

/* ---------- Módulo 1: Hero → Sobre mí ---------- */
type Mod = { el: HTMLElement; cur: number; seen?: boolean };
const M: Record<'ha' | 'ex' | 'ft' | 'wk', Mod> = { ha: { el: $('#home'), cur: 0 }, ex: { el: $('#experience'), cur: 0 }, ft: { el: $('#projects'), cur: 0 }, wk: { el: $('#works'), cur: 0 } };
const haCard = $('#haCard'), heroLayer = $('#heroLayer'), aboutContent = $('#aboutContent'), aboutLayer = $('#aboutLayer');
const aboutWords = $('#aboutWords'), wA = $('#wA'), wB = $('#wB'), heroTitle = $('.hero-title');
let navOverride: 'light' | 'dark' | null = null;
function updateHA(p: number) {
  const s1 = ease(clamp(p / .28)), appear = clamp((p - .2) / .08), split = ease(clamp((p - .34) / .14)), grow = ease(clamp((p - .46) / .3)), cont = clamp((p - .8) / .14);
  const sc = p < .46 ? lerp(1, .3, s1) : lerp(.3, 1, grow);
  haCard.style.transform = `translateZ(0) scale(${sc})`;
  haCard.style.borderRadius = sc >= .999 ? '0' : `${(1 - sc) * 70 / sc}px`;
  heroLayer.style.opacity = String(1 - clamp((p - .27) / .08));
  heroLayer.style.visibility = p > .36 ? 'hidden' : 'visible';
  aboutLayer.style.opacity = String(clamp((p - .29) / .1));
  heroTitle.style.filter = `blur(${s1 * 3}px)`;
  const vw = innerWidth, em = parseFloat(getComputedStyle(wA).fontSize);
  const out = split * vw * .3 + grow * vw * .45;
  aboutWords.style.opacity = String(appear * (1 - clamp((p - .52) / .14)));
  wA.style.transform = `translate(${-out}px,${lerp(-.5 * em, 0, split)}px)`;
  wB.style.transform = `translate(${out}px,${lerp(.5 * em, 0, split)}px)`;
  aboutContent.style.opacity = String(cont);
  aboutContent.style.visibility = cont > 0 ? 'visible' : 'hidden';
  aboutContent.style.transform = `translateY(${(1 - cont) * 24}px)`;
  navOverride = p < .24 ? 'light' : 'dark';
}

/* ---------- Módulo 2: Experiencia ---------- */
const expTrack = $('#expTrack'), wipe = $('#wipe'), expBar = $('#expBar'), ghostRows = $$('#ghost span'), tabBtns = $$<HTMLButtonElement>('#expTabs button');
let activeTab = -1, exLast = 0, exWipe = 0;
function updateEX(p: number) {
  const q = clamp(p / .84), pos = step(q * (NP - 1));
  const vw = innerWidth, vel = clamp(Math.abs(pos - exLast) * 22, 0, 1.4); exLast = pos;
  expTrack.style.transform = `translate3d(${-pos * vw}px,0,0)`;
  titleEls.forEach((t, i) => {
    const d = i - pos, ad = Math.abs(d), ox = clamp(d * 22, -26, 26) * Math.min(1, ad * 1.6);
    t.style.filter = `blur(${Math.min(ad, 1) * 5 * Math.max(vel, ad)}px)`;
    t.style.textShadow = `${ox}px 0 rgba(255,255,255,.55), ${-ox * .6}px 0 rgba(120,140,255,.35), 0 0 28px rgba(255,255,255,${.45 * (1 - Math.min(ad, 1))})`;
    t.style.opacity = String(1 - Math.min(ad, 1) * .75);
  });
  panelEls.forEach((pe, i) => { pe.inert = Math.abs(i - pos) > .5; });
  ghostRows.forEach((g, i) => { g.style.transform = `translate3d(${(i % 2 ? 1 : -1) * (pos * .28 * vw) - (i % 2 ? vw * .5 : 0)}px,0,0)`; });
  expBar.style.width = (pos / (NP - 1) * 100) + '%';
  const tab = Number(panelEls[Math.round(pos)].dataset.tab);
  if (tab !== activeTab) { activeTab = tab; tabBtns.forEach((b, i) => b.classList.toggle('on', i === tab)); }
  exWipe = clamp((p - .86) / .14);
  wipe.style.display = exWipe > 0 ? 'block' : 'none'; wipe.style.transform = `scaleY(${exWipe})`;
}
tabBtns.forEach(b => b.addEventListener('click', () => {
  const i = panelEls.findIndex(pe => pe.dataset.tab === b.dataset.tab);
  const el = M.ex.el, span = el.offsetHeight - innerHeight;
  go(pageTop(el) + span * .84 * (i / (NP - 1)) + 2);
}));

/* ---------- Módulo 3: Carrusel curvo (canvas, tiras en cilindro) ---------- */
const beltCv = $<HTMLCanvasElement>('#beltCanvas');
const belt = { ctx: beltCv.getContext('2d')!, tex: D.featured.map((it, i) => makeTexture(it, 11 + i * 7, () => { belt.dirty = true; })), drag: 0, off: 0, target: 0, pitch: 1, w: 0, h: 0, dpr: 1, dirty: true };
const cap = $('#cap'), capTitle = $('#capTitle'), capSub = $('#capSub'), capIdx = $('#capIdx'), capLink = $<HTMLAnchorElement>('#capLink');
let capCur = -1, capTimer = 0;
function beltSize() { const r = beltCv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); belt.w = r.width; belt.h = r.height; belt.dpr = d; beltCv.width = r.width * d; beltCv.height = r.height * d; belt.dirty = true; }
function setCaption(idx: number) {
  const it = D.featured[idx];
  capTitle.textContent = it.title; capSub.textContent = it.sub ?? '';
  capIdx.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(NF).padStart(2, '0')}`;
  capLink.hidden = !it.href; if (it.href) capLink.href = it.href;
  cap.classList.remove('swap');
}
function beltDraw(off: number) {
  const { w, h, dpr, ctx } = belt; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
  const cardW = Math.min(w * (w < 700 ? .74 : .34), 540), cardH = cardW * .6, pitch = cardW * 1.12, R = w * .62, F = R * 1.15, cx = w / 2, cy = h / 2, st = 2.5;
  belt.pitch = pitch;
  const X = (s: number): [number, number] => { const phi = s / R, f = F / (F + R * (1 - Math.cos(phi))); return [cx + R * Math.sin(phi) * f, f]; };
  for (let s = -w * .95; s < w * .95; s += st) {
    const u = off + s, i = Math.round(u / pitch); if (i < 0 || i >= NF) continue;
    const local = u - i * pitch; if (Math.abs(local) > cardW / 2) continue;
    const [x0, f] = X(s), [x1] = X(s + st), tex = belt.tex[i].src;
    ctx.drawImage(tex, (local + cardW / 2) / cardW * tex.width, 0, st / cardW * tex.width + .6, tex.height, x0, cy - cardH * f / 2, x1 - x0 + .8, cardH * f);
  }
  const idx = clamp(Math.round(off / pitch), 0, NF - 1);
  if (idx !== capCur) {
    const first = capCur < 0; capCur = idx; clearTimeout(capTimer);
    if (first) setCaption(idx); else { cap.classList.add('swap'); capTimer = window.setTimeout(() => setCaption(capCur), 140); }
  }
}
function updateFT(p: number) {
  belt.target = step(clamp(p / .9) * (NF - 1)) * belt.pitch;
  const next = lerp(belt.off, belt.target + belt.drag, .2);
  if (Math.abs(next - belt.off) < .05 && !belt.dirty) return;
  belt.off = next; belt.dirty = false; beltDraw(belt.off);
}
{ // arrastre con mouse; toque o clic sin arrastre abre el caso de estudio
  let down = false, mouse = false, sx = 0, sd = 0, moved = 0;
  beltCv.addEventListener('pointerdown', e => { down = true; mouse = e.pointerType === 'mouse'; sx = e.clientX; sd = belt.drag; moved = 0; if (mouse) beltCv.setPointerCapture(e.pointerId); });
  beltCv.addEventListener('pointermove', e => { if (!down) return; moved = Math.max(moved, Math.abs(e.clientX - sx)); if (mouse) belt.drag = sd - (e.clientX - sx) * 1.2; });
  const up = () => {
    if (!down) return; down = false;
    if (moved < 6) { const it = D.featured[capCur]; if (it?.href) location.href = it.href; return; }
    if (mouse) { const tot = belt.target + belt.drag; belt.drag = clamp(Math.round(tot / belt.pitch), 0, NF - 1) * belt.pitch - belt.target; }
  };
  beltCv.addEventListener('pointerup', up); beltCv.addEventListener('pointercancel', () => { down = false; });
}

/* ---------- Módulo 4: Hexágono → tambor ---------- */
const wLabel = $<HTMLAnchorElement>('#worksLabel'), wCenter = $('#worksCenter');
const wCards = $$('.wcard'), wBtns = $$<HTMLButtonElement>('#worksIndex button');
wCards.forEach((c, i) => {
  const it = D.works[i];
  c.style.backgroundImage = it.image ? `url("${it.image}")` : `url(${artLight(it.title, 31 + i * 5).toDataURL('image/jpeg', .85)})`;
});
let wDrag = 0, wActive = -1;
const wrap180 = (d: number) => ((d + 180) % 360 + 360) % 360 - 180;
const worksScrollTo = (i: number) => { const el = M.wk.el, span = el.offsetHeight - innerHeight; wDrag = 0; go(pageTop(el) + span * (.22 + .78 * (i / (NW - 1))) + 2); };
[...wBtns, ...wCards].forEach(b => {
  const open = () => { const i = Number(b.dataset.i), it = D.works[i]; if (i === wActive && it.href) location.href = it.href; else worksScrollTo(i); };
  b.addEventListener('click', open);
  b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
});
function updateWK(p: number, now: number) {
  const t = ease(clamp(p / .22)), sp = clamp((p - .22) / .78);
  const pos = clamp(sp * (NW - 1) + wDrag, 0, NW - 1);
  const vw = innerWidth, vh = innerHeight, rad = Math.min(vw, vh) * (vw < 700 ? .3 : .31), cw = wCards[0].offsetWidth, spin = reduce ? 0 : (now / 1000) * 14 * (1 - t);
  wCards.forEach((c, i) => {
    const a = (i / NW) * 360 - 90 + spin + sp * 40, ar = a * Math.PI / 180;
    const hx = Math.cos(ar) * rad * 1.15, hy = Math.sin(ar) * rad, hrz = wrap180(a + 90);
    const k = i - pos, ak = Math.abs(k);
    const dy = k * cw * .72, drx = clamp(-k * 34, -75, 75), dz = -ak * cw * .5, ds = 1.5 - ak * .2, dop = clamp(1.15 - ak * .5, 0, 1);
    const o = lerp(1, dop, t);
    c.style.transform = `translate3d(${lerp(hx, 0, t)}px,${lerp(hy, dy, t)}px,${lerp(0, dz, t)}px) rotateZ(${lerp(hrz, 0, t)}deg) rotateX(${lerp(22, drx, t)}deg) scale(${lerp(.86, Math.max(ds, .3), t)})`;
    c.style.opacity = String(o); c.style.zIndex = String(Math.round(100 - ak * 10)); c.style.pointerEvents = o < .2 ? 'none' : 'auto';
  });
  wCenter.style.opacity = String(1 - clamp(t * 2.5));
  const ai = Math.round(pos);
  wLabel.style.opacity = String(clamp((t - .5) * 2));
  if (ai !== wActive) {
    wActive = ai; const it = D.works[ai];
    wLabel.textContent = it.title + (it.href ? ' ↗' : '');
    if (it.href) wLabel.href = it.href; else wLabel.removeAttribute('href');
    wBtns.forEach((b, i) => b.classList.toggle('on', i === ai));
  }
}
{ // arrastre vertical con mouse
  let down = false, sy = 0, sd = 0;
  $('#worksStage').addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || (e.target as Element).closest('button,a')) return; down = true; sy = e.clientY; sd = wDrag; });
  addEventListener('pointermove', e => {
    if (!down) return; const el = M.wk.el, span = el.offsetHeight - innerHeight; const sp = clamp((scrollY - pageTop(el) - span * .22) / (span * .78));
    wDrag = clamp(sd - (e.clientY - sy) / (innerHeight * .3), -sp * (NW - 1), (1 - sp) * (NW - 1));
  });
  addEventListener('pointerup', () => { down = false; });
}

/* ---------- Nav: tema + enlace activo + saltos ---------- */
const nav = $('#nav'), themed = $$('[data-nav-theme]');
const legacy: Record<string, string> = { inicio: 'home', perfil: 'about', proyectos: 'projects', tecnologias: 'stack', 'ia-local': 'ai' };
function targets(): Record<string, number> {
  const h = $('#home'), out: Record<string, number> = { home: pageTop(h), about: pageTop(h) + (h.offsetHeight - innerHeight) * .86 };
  for (const id of ['experience', 'projects', 'works', 'stack', 'ai', 'credentials', 'services', 'contact']) out[id] = pageTop($('#' + id));
  return out;
}
let TG = targets();
const navLinks = $$<HTMLAnchorElement>('[data-nav-link]');
function updateNav() {
  let th = 'light';
  for (const s of themed) {
    const r = s.getBoundingClientRect(); if (r.top > 40 || r.bottom <= 40) continue;
    th = s.dataset.navTheme!;
    if (th === 'dyn') th = navOverride || 'light';
    if (s.id === 'experience' && exWipe > .6) th = 'light';
    break;
  }
  if (nav.dataset.theme !== th) nav.dataset.theme = th;
  let act = 'home'; for (const [k, v] of Object.entries(TG)) if (scrollY >= v - innerHeight * .4) act = navKeyOf[k] ?? k;
  navLinks.forEach(a => { const on = a.dataset.go === act; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
}
// Secciones sin enlace propio en el menú iluminan el de su grupo
const navKeyOf: Record<string, string> = { works: 'projects', ai: 'stack', credentials: 'stack', contact: 'services' };
document.addEventListener('click', e => {
  const a = (e.target as Element).closest<HTMLElement>('[data-go]'); if (!a) return; e.preventDefault();
  TG = targets(); const key = a.dataset.go!;
  history.replaceState(null, '', '#' + key);
  go(TG[key] + 1);
});

/* ---------- Contacto: foco de luz que sigue al cursor + reveal ---------- */
const talk = $('#contact'), talkTitle = $('#talkTitle');
talk.addEventListener('pointermove', e => { const r = talkTitle.getBoundingClientRect(); talk.style.setProperty('--mx', (e.clientX - r.left) + 'px'); talk.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
// data-reveal="seq": las tarjetas que entran juntas aparecen una a una, en orden
const io = new IntersectionObserver(es => { let q = 0; es.forEach(e => {
  if (!e.isIntersecting) return; const el = e.target as HTMLElement;
  if (el.dataset.reveal === 'seq') el.style.setProperty('--delay', `${q++ * 160}ms`);
  el.classList.add('in'); io.unobserve(el);
}); }, { threshold: .2 });
$$('[data-reveal]').forEach(el => io.observe(el)); io.observe(talk); io.observe($('#stack'));

/* ---------- Cursos y diplomados: acordeón lateral (hover con mouse, clic o teclado) ---------- */
{
  const panels = $$('.cred-panel'); let hoverT = 0;
  const open = (p: HTMLElement) => panels.forEach(o => {
    const on = o === p; o.classList.toggle('open', on);
    $('.cred-tab', o).setAttribute('aria-expanded', String(on)); $('.cred-body', o).inert = !on;
  });
  panels.forEach(p => {
    $('.cred-tab', p).addEventListener('click', () => open(p));
    p.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') { clearTimeout(hoverT); hoverT = setTimeout(() => open(p), 140); } });
    p.addEventListener('pointerleave', () => clearTimeout(hoverT));
  });
}

/* ---------- Credenciales: vista ampliada ---------- */
{
  const dlg = $<HTMLDialogElement>('#credDialog'), img = $<HTMLImageElement>('img', dlg), cap = $('figcaption', dlg);
  let opener: HTMLElement | null = null;
  $$<HTMLButtonElement>('[data-cred]').forEach(b => b.addEventListener('click', () => {
    opener = b; img.src = b.dataset.cred!; img.alt = `Certificado: ${b.dataset.title}`; cap.textContent = b.dataset.title!; dlg.showModal();
  }));
  dlg.addEventListener('click', e => { if (e.target === dlg || (e.target as Element).closest('[data-close]')) dlg.close(); });
  dlg.addEventListener('close', () => { opener?.focus(); opener = null; });
}

/* ---------- Diagrama del hero: nodos en órbita tipo carrusel ---------- */
const core = document.querySelector<HTMLElement>('[data-core]');
const coreNodes = core ? $$('.node', core) : [], coreLines = core ? $$<SVGLineElement>('line', core) : [];
const coreSpans = coreNodes.map(n => $('span', n)), coreTips = coreNodes.map(n => $('.tip', n));
const coreHover = coreNodes.map(() => 0);
let coreAng = -Math.PI / 2, coreSpd = 1, coreHot = -1, coreLast = 0;
const setHot = (i: number) => {
  coreHot = i; core?.classList.toggle('is-hot', i >= 0);
  coreNodes.forEach((n, k) => n.classList.toggle('hot', k === i));
  coreLines.forEach((l, k) => l.classList.toggle('hot', k === i));
};
coreNodes.forEach((n, i) => {
  n.addEventListener('pointerenter', () => setHot(i));
  n.addEventListener('pointerleave', () => { if (coreHot === i) setHot(-1); });
  n.addEventListener('focus', () => setHot(i));
  n.addEventListener('blur', () => { if (coreHot === i) setHot(-1); });
  n.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') setHot(coreHot === i ? -1 : i); });
});
document.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' && !(e.target as Element).closest('.node')) setHot(-1); });
function updateCore(now: number) {
  if (!core) return;
  const dt = Math.min(now - (coreLast || now), 64); coreLast = now;
  coreSpd = lerp(coreSpd, coreHot >= 0 ? 0 : 1, .08);
  if (coreHot >= 0 && coreSpd < .01) coreSpd = 0;
  if (!reduce) coreAng += dt * 0.00016 * coreSpd; // una vuelta cada ~40 s
  const W = core.clientWidth, H = core.clientHeight, cx = W / 2, cy = H * .55, rx = W * .42, ry = H * .38, N = coreNodes.length, left = core.getBoundingClientRect().left;
  coreNodes.forEach((n, i) => {
    const a = coreAng + (i / N) * Math.PI * 2, x = cx + Math.cos(a) * rx, y = cy + Math.sin(a) * ry, depth = (Math.sin(a) + 1) / 2;
    coreHover[i] = lerp(coreHover[i], i === coreHot ? 1 : 0, .18);
    const h = coreHover[i];
    n.style.transform = `translate(${x}px,${y}px)`;
    n.style.zIndex = String(i === coreHot ? 30 : 3 + Math.round(depth * 10));
    coreSpans[i].style.transform = `translate(-50%,-50%) scale(${(.82 + .22 * depth) * (1 + .2 * h)})`;
    coreSpans[i].style.opacity = String(Math.min(1, .55 + .45 * depth + h));
    if (i === coreHot) { // el detalle nunca se sale de la pantalla
      const tw = coreTips[i].offsetWidth, x0 = left + x - tw / 2;
      coreTips[i].style.setProperty('--tx', `${clamp(x0, 8, innerWidth - 8 - tw) - x0}px`);
    }
    const l = coreLines[i];
    l.setAttribute('x1', String(cx)); l.setAttribute('y1', String(cy)); l.setAttribute('x2', String(x)); l.setAttribute('y2', String(y));
  });
}

/* ---------- Bucle principal ---------- */
function frame(now: number) {
  for (const m of Object.values(M)) { if (!near(m.el) && m.seen) continue; m.seen = true; const t = wrapProg(m.el); m.cur = Math.abs(t - m.cur) < .0004 ? t : lerp(m.cur, t, SM); }
  if (near(M.ha.el)) { updateHA(M.ha.cur); if (M.ha.cur < .36) updateCore(now); }
  if (near(M.ex.el)) updateEX(M.ex.cur);
  if (near(M.ft.el)) updateFT(M.ft.cur);
  if (near(M.wk.el)) updateWK(M.wk.cur, now);
  updateNav(); requestAnimationFrame(frame);
}
let lastW = 0, lastH = 0;
function resize() {
  // En móvil la barra del navegador cambia la altura al hacer scroll: solo se redibuja si cambia el ancho o mucho la altura.
  if (innerWidth !== lastW || Math.abs(innerHeight - lastH) > 160) { drawSwirl(); lastW = innerWidth; lastH = innerHeight; }
  setHeights(); beltSize(); TG = targets();
}
let rt = 0; addEventListener('resize', () => { clearTimeout(rt); rt = window.setTimeout(resize, 120); });
resize();

/* ---------- Preloader y entrada ---------- */
function ready() { document.body.classList.remove('is-loading'); document.body.classList.add('ready'); }
function jumpToHash() {
  const raw = decodeURIComponent(location.hash.slice(1)), key = legacy[raw] ?? raw;
  if (!(key in TG) || key === 'home') return false;
  TG = targets(); scrollTo(0, TG[key] + 1);
  for (const m of Object.values(M)) m.cur = wrapProg(m.el);
  return true;
}
function preloader() {
  const pre = $('#preloader'), path = $<SVGPathElement>('#plPath'), dot = $<SVGCircleElement>('#plDot'), word = $('#plWord'), len = path.getTotalLength();
  word.innerHTML = [...D.word].map((c, i) => `<span style="animation-delay:${.5 + i * .09}s">${c}</span>`).join('');
  path.style.strokeDasharray = String(len); path.style.strokeDashoffset = String(len);
  const t0 = performance.now(), DUR = 1500;
  const draw = (n: number) => {
    const k = clamp((n - t0) / DUR), e = 1 - Math.pow(1 - k, 3); path.style.strokeDashoffset = String(len * (1 - e));
    const pt = path.getPointAtLength(len * e); dot.setAttribute('cx', String(pt.x)); dot.setAttribute('cy', String(pt.y));
    if (k < 1) requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
  setTimeout(() => word.insertAdjacentHTML('beforeend', '<span style="animation-delay:0s">.</span>'), 1500);
  setTimeout(() => { pre.classList.add('done'); ready(); setTimeout(() => pre.remove(), 1200); }, 2400);
}
history.scrollRestoration = 'manual';
const seen = store.get('echo-intro') === '1';
store.set('echo-intro', '1');
if (reduce || seen || location.hash.length > 1) { $('#preloader').remove(); ready(); if (!jumpToHash()) scrollTo(0, 0); }
else { scrollTo(0, 0); preloader(); }
requestAnimationFrame(frame);
