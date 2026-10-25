/* ==========================================================
   main.js — motor de animación (vanilla, sin dependencias).
   Patrón: cada sección "pin" es un contenedor alto con un
   .stage sticky; el progreso 0..1 del scroll dentro del contenedor
   (suavizado con lerp) maneja todas las transformaciones.
   ========================================================== */
(() => {
'use strict';
const S = window.SITE;
if (!S) { console.error('Falta js/content.js'); return; }

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SM = reduce ? 1 : 0.12; // factor de suavizado

/* ---------- Iconos (feather, MIT) ---------- */
const ICON = {
  github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>'
};
const CHEV = '<svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>';

/* ---------- Placeholders generados (si image === null) ---------- */
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function fitText(x, text, maxW, weight, start) {
  let fs = start; x.font = `${weight} ${fs}px Manrope, system-ui, sans-serif`;
  while (x.measureText(text).width > maxW && fs > 12) { fs -= 2; x.font = `${weight} ${fs}px Manrope, system-ui, sans-serif`; }
  return fs;
}
function artDark(title, seed, W = 960, H = 576) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d'), r = rng(seed);
  x.fillStyle = '#07080c'; x.fillRect(0, 0, W, H);
  for (let k = 0; k < 30; k++) {
    x.beginPath(); let px = r() * W, py = r() * H * .4; x.moveTo(px, py);
    for (let s = 0; s < 46; s++) { px += Math.cos(s * .17 + k) * 15 + (r() - .5) * 5; py += Math.sin(s * .11 + k * .7) * 9 + 8; x.lineTo(px, py); }
    x.strokeStyle = `hsla(${[352, 18, 205, 282][k % 4]},85%,60%,${.07 + r() * .25})`; x.lineWidth = 1 + r() * 2.6; x.stroke();
  }
  x.fillStyle = 'rgba(255,255,255,.14)'; [0, 1, 2].forEach(i => x.fillRect(W - 250 + i * 70, 34, 48, 6)); x.fillRect(40, 34, 70, 6);
  const words = title.toUpperCase().split(' '); const lines = words.length > 2 ? [words.slice(0, 2).join(' '), words.slice(2).join(' ')] : words;
  const fs = Math.min(...lines.map(l => fitText(x, l, W * .8, 800, 130)));
  x.font = `800 ${fs}px Manrope, system-ui, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.shadowColor = 'rgba(255,255,255,.55)'; x.shadowBlur = 24; x.fillStyle = '#fff';
  lines.forEach((l, i) => x.fillText(l, W / 2, H / 2 + (i - (lines.length - 1) / 2) * fs * .95));
  x.shadowBlur = 0; return c;
}
function artLight(title, seed, W = 960, H = 576) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d'), r = rng(seed);
  const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#f6f6f4'); g.addColorStop(1, `hsl(${200 + r() * 40},8%,${68 + r() * 10}%)`);
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(40, 34, 60, 6); [0, 1, 2, 3].forEach(i => x.fillRect(W - 300 + i * 66, 34, 40, 6));
  const fs = fitText(x, title, W * .78, 800, 74); x.font = `800 ${fs}px Manrope, system-ui, sans-serif`;
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#1a1b1f'; x.fillText(title, W / 2, H * .42);
  x.fillStyle = 'rgba(0,0,0,.2)'; x.fillRect(W * .3, H * .56, W * .4, 8); x.fillRect(W * .36, H * .62, W * .28, 8);
  x.fillStyle = '#16171b'; const bw = 190, bh = 50, bx = W / 2 - bw / 2, by = H * .74;
  x.beginPath(); x.roundRect ? x.roundRect(bx, by, bw, bh, 25) : x.rect(bx, by, bw, bh); x.fill();
  return c;
}
function coverTo(img, W, H) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const s = Math.max(W / img.width, H / img.height); const w = img.width * s, h = img.height * s;
  x.drawImage(img, (W - w) / 2, (H - h) / 2, w, h); return c;
}
function makeTexture(item, kind, seed, onready) {
  const t = { src: (kind === 'dark' ? artDark : artLight)(item.title, seed) };
  if (item.image) { const im = new Image(); im.onload = () => { t.src = coverTo(im, 960, 576); onready && onready(); }; im.src = item.image; }
  return t;
}

/* ---------- Binding + render de listas ---------- */
const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
$$('[data-bind]').forEach(el => { el.textContent = get(S, el.dataset.bind) ?? ''; });
document.documentElement.lang = S.lang || 'es';
$('#logo').innerHTML = `<b>${esc(S.brand.logo)}</b><i></i>`;
$('#navLinks').innerHTML = S.nav.map(([id, l]) => `<a href="#${id}" data-go="${id}">${esc(l)}</a>`).join('');
$('#navSocial').innerHTML = S.social.map(s => `<a href="${esc(s.href)}" aria-label="${esc(s.label)}" target="_blank" rel="noopener">${ICON[s.id] || esc(s.label[0])}</a>`).join('');
$('#heroSide').innerHTML = S.hero.side.map(t => `<li>${esc(t)}</li>`).join('');
$('#aboutCols').innerHTML = S.about.cols.map(c => `<div><b>${esc(c.k)}</b>${esc(c.v)}</div>`).join('');
$('#aboutCta').innerHTML = S.about.ctas.map(c => `<a class="btn ${c.primary ? 'primary' : ''}" href="#${c.go}" data-go="${c.go}">${esc(c.label)}</a>`).join('');
$('#talkPills').innerHTML = S.contact.pills.map(p => `<a class="${p.primary ? 'primary' : ''}" href="${esc(p.href)}">${esc(p.label)}</a>`).join('');
$('#foot').innerHTML = S.contact.footer.map(t => `<span>${esc(t)}</span>`).join('');
$('#talkTitle').setAttribute('aria-label', S.contact.title);
$('#talkTitle').innerHTML = [...S.contact.title].map((ch, i) => `<span class="ch" style="--i:${i}" aria-hidden="true">${ch === ' ' ? '&nbsp;' : esc(ch)}</span>`).join('');
if (S.about.image) $('#aboutLayer').style.backgroundImage = `url(${S.about.image})`;
if (S.about.bg) { $('#haBg').style.backgroundImage = `url(${S.about.bg})`; $('#swirl').style.display = 'none'; }

/* Retrato: imagen o silueta placeholder */
$('#portrait').innerHTML = S.hero.portrait
  ? `<img src="${esc(S.hero.portrait)}" alt="${esc(S.brand.name)}">`
  : `<svg viewBox="0 0 420 520" aria-label="Retrato (placeholder)"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101114"/><stop offset=".62" stop-color="#26272c"/><stop offset="1" stop-color="#26272c" stop-opacity="0"/></linearGradient></defs><path d="M60 520c4-110 40-150 110-170l40-22 40 22c70 20 106 60 110 170z" fill="url(#pg)"/><rect x="180" y="290" width="60" height="56" rx="20" fill="#121317"/><ellipse cx="210" cy="215" rx="78" ry="96" fill="#101114"/><path d="M128 205c-14-66 28-118 86-118 62 0 96 52 78 122-8-40-30-62-80-62s-72 20-84 58z" fill="#08090b"/></svg>`;

/* Experiencia: fantasma + paneles + tabs */
const X = S.experience;
$('#ghost').innerHTML = X.ghost.map(t => `<span>${esc(t)}  ${esc(t)}</span>`).join('');
const panels = [
  `<div class="panel" data-tab="0"><div class="meta"><em>${esc(X.kicker)}</em></div><h2 class="ttl">${X.title.map(esc).join('<br>')}</h2><p class="desc">${esc(X.intro)}</p></div>`,
  ...X.items.map(it => `<div class="panel" data-tab="${it.tab}"><div class="meta"><span>${esc(it.dates)}</span><span>${esc(it.org)}</span><em>${esc(it.kind)}</em></div><h3 class="ttl">${it.title.map(esc).join('<br>')}</h3><p class="desc">${esc(it.text)}</p><div class="ms">${it.milestones.map(m => `<div><b>${esc(m.k)}</b>${esc(m.v)}</div>`).join('')}</div></div>`)
];
const expTrack = $('#expTrack'); expTrack.innerHTML = panels.join('');
const panelEls = $$('.panel', expTrack), titleEls = $$('.ttl', expTrack);
$('#expTabs').innerHTML = X.tabs.map((t, i) => `<button data-tab="${i}">${esc(t)}</button>`).join('');

/* Servicios */
$('#acc').innerHTML = S.services.items.map((s, i) => `<div class="acc-item${i === 0 ? ' open' : ''}"><button class="acc-head" aria-expanded="${i === 0}"><span class="n">${i + 1}</span><span>${esc(s.title)}</span>${CHEV}</button><div class="acc-body"><div><div class="in">${esc(s.text)}<div class="row"><span>${esc(s.deliverables)}</span><a href="#contact" data-go="contact">${esc(s.cta)} ↗</a></div></div></div></div></div>`).join('');
$$('.acc-item').forEach(it => it.querySelector('.acc-head').addEventListener('click', () => {
  const open = !it.classList.contains('open');
  $$('.acc-item').forEach(o => { o.classList.remove('open'); o.querySelector('.acc-head').setAttribute('aria-expanded', 'false'); });
  if (open) { it.classList.add('open'); it.querySelector('.acc-head').setAttribute('aria-expanded', 'true'); }
}));

/* ---------- Alturas de los contenedores "pin" ---------- */
const NF = S.featured.items.length, NW = S.works.items.length, NP = panels.length;
function setHeights() {
  $('#s-home').style.height = '520vh';
  $('#s-experience').style.height = (NP * 85 + 100) + 'vh';
  $('#s-projects').style.height = (NF * 70 + 100) + 'vh';
  $('#s-works').style.height = (NW * 70 + 160) + 'vh';
}
setHeights();

const wrapProg = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
const near = el => { const r = el.getBoundingClientRect(); return r.bottom > -innerHeight * .5 && r.top < innerHeight * 1.5; };
const step = (pos, a = .25, b = .75) => { const i = Math.floor(pos), f = pos - i; return i + ease(clamp((f - a) / (b - a))); }; // dwell en cada panel

/* ---------- Remolinos (fondo del "Sobre mí") ---------- */
function drawSwirl() {
  const cv = $('#swirl'), w = cv.width = innerWidth, h = cv.height = innerHeight, x = cv.getContext('2d'), r = rng(7);
  x.fillStyle = '#0a0b0e'; x.fillRect(0, 0, w, h);
  for (let k = 0; k < 150; k++) {
    const cx = r() * w, cy = r() * h, rad = 20 + r() * 110, turns = 2 + r() * 3, dir = r() > .5 ? 1 : -1;
    x.beginPath();
    for (let a = 0; a < turns * Math.PI * 2; a += .12) { const rr = rad * a / (turns * Math.PI * 2); const px = cx + Math.cos(a * dir) * rr, py = cy + Math.sin(a * dir) * rr * .8; a ? x.lineTo(px, py) : x.moveTo(px, py); }
    x.strokeStyle = `rgba(255,255,255,${.05 + r() * .3})`; x.lineWidth = .8 + r() * 2.4; x.stroke();
  }
  const g = x.createRadialGradient(w / 2, h / 2, h * .2, w / 2, h / 2, h * .9); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.65)'); x.fillStyle = g; x.fillRect(0, 0, w, h);
}

/* ---------- Módulo 1: Hero → Sobre mí ---------- */
const haCard = $('#haCard'), heroLayer = $('#heroLayer'), aboutLayer = $('#aboutLayer'), aboutContent = $('#aboutContent');
const aboutWords = $('#aboutWords'), wA = $('#wA'), wB = $('#wB'), heroTitle = $('.hero-title');
const M = { ha: { el: $('#s-home'), cur: 0 }, ex: { el: $('#s-experience'), cur: 0, last: 0 }, ft: { el: $('#s-projects'), cur: 0 }, wk: { el: $('#s-works'), cur: 0 } };
let navOverride = null;
function updateHA(p) {
  const s1 = ease(clamp(p / .28)), appear = clamp((p - .2) / .08), split = ease(clamp((p - .34) / .14)), grow = ease(clamp((p - .46) / .3)), cont = clamp((p - .8) / .14);
  const sc = p < .46 ? lerp(1, .3, s1) : lerp(.3, 1, grow);
  haCard.style.transform = `translateZ(0) scale(${sc})`;
  haCard.style.borderRadius = sc >= .999 ? '0' : `${(1 - sc) * 70 / sc}px`;
  heroLayer.style.opacity = 1 - clamp((p - .27) / .08);
  aboutLayer.style.opacity = clamp((p - .29) / .1);
  heroTitle.style.filter = `blur(${s1 * 3}px)`;
  const vw = innerWidth, em = parseFloat(getComputedStyle(wA).fontSize);
  const out = split * vw * .3 + grow * vw * .45;
  aboutWords.style.opacity = appear * (1 - clamp((p - .52) / .14));
  wA.style.transform = `translate(${-out}px,${lerp(-.5 * em, 0, split)}px)`;
  wB.style.transform = `translate(${out}px,${lerp(.5 * em, 0, split)}px)`;
  aboutContent.style.opacity = cont;
  aboutContent.style.transform = `translateY(${(1 - cont) * 24}px)`;
  navOverride = p < .24 ? 'light' : 'dark';
}

/* ---------- Módulo 2: Experiencia ---------- */
const wipe = $('#wipe'), expBar = $('#expBar'), ghostRows = $$('#ghost span'), tabBtns = $$('#expTabs button');
let activeTab = -1;
function updateEX(p) {
  const m = M.ex, q = clamp(p / .84), pos = step(q * (NP - 1));
  const vw = innerWidth, vel = clamp(Math.abs(pos - (m.last ?? pos)) * 22, 0, 1.4); m.last = pos;
  expTrack.style.transform = `translate3d(${-pos * vw}px,0,0)`;
  titleEls.forEach((t, i) => {
    const d = i - pos, ad = Math.abs(d), ox = clamp(d * 22, -26, 26) * Math.min(1, ad * 1.6);
    t.style.filter = `blur(${Math.min(ad, 1) * 5 * Math.max(vel, ad)}px)`;
    t.style.textShadow = `${ox}px 0 rgba(255,255,255,.55), ${-ox * .6}px 0 rgba(120,140,255,.35), 0 0 28px rgba(255,255,255,${.45 * (1 - Math.min(ad, 1))})`;
    t.style.opacity = 1 - Math.min(ad, 1) * .75;
  });
  ghostRows.forEach((g, i) => { g.style.transform = `translate3d(${(i % 2 ? 1 : -1) * (pos * .28 * vw) - (i % 2 ? vw * .5 : 0)}px,0,0)`; });
  expBar.style.width = (pos / (NP - 1) * 100) + '%';
  const tab = +panelEls[Math.round(pos)].dataset.tab;
  if (tab !== activeTab) { activeTab = tab; tabBtns.forEach((b, i) => b.classList.toggle('on', i === tab)); }
  const w = clamp((p - .86) / .14);
  wipe.style.display = w > 0 ? 'block' : 'none'; wipe.style.transform = `scaleY(${w})`; m.wipe = w;
}
tabBtns.forEach(b => b.addEventListener('click', () => {
  const i = panelEls.findIndex(pe => +pe.dataset.tab === +b.dataset.tab);
  const r = M.ex.el, top = r.getBoundingClientRect().top + scrollY, span = r.offsetHeight - innerHeight;
  scrollTo({ top: top + span * .84 * (i / (NP - 1)) + 2, behavior: reduce ? 'auto' : 'smooth' });
}));

/* ---------- Módulo 3: Carrusel curvo (canvas, tiras en cilindro) ---------- */
const belt = { cv: $('#beltCanvas'), items: S.featured.items.map((it, i) => makeTexture(it, 'dark', 11 + i * 7)), drag: 0, off: 0 };
belt.ctx = belt.cv.getContext('2d');
const cap = $('#cap'); let capIdx = -1;
function beltSize() { const r = belt.cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); belt.w = r.width; belt.h = r.height; belt.dpr = d; belt.cv.width = r.width * d; belt.cv.height = r.height * d; }
function beltDraw(off) {
  const { w, h, dpr, ctx } = belt; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
  const cardW = Math.min(w * (w < 700 ? .62 : .34), 540), cardH = cardW * .6, pitch = cardW * 1.12, R = w * .62, F = R * 1.15, cx = w / 2, cy = h / 2, st = 2.5;
  belt.pitch = pitch;
  const X = s => { const phi = s / R; return [cx + R * Math.sin(phi) * F / (F + R * (1 - Math.cos(phi))), F / (F + R * (1 - Math.cos(phi)))]; };
  for (let s = -w * .95; s < w * .95; s += st) {
    const u = off + s, i = Math.round(u / pitch); if (i < 0 || i >= belt.items.length) continue;
    const local = u - i * pitch; if (Math.abs(local) > cardW / 2) continue;
    const [x0, f] = X(s), [x1] = X(s + st), tex = belt.items[i].src;
    ctx.drawImage(tex, (local + cardW / 2) / cardW * tex.width, 0, st / cardW * tex.width + .6, tex.height, x0, cy - cardH * f / 2, x1 - x0 + .8, cardH * f);
  }
  const idx = clamp(Math.round(off / pitch), 0, belt.items.length - 1);
  if (idx !== capIdx) {
    capIdx = idx; cap.classList.add('swap');
    setTimeout(() => { const it = S.featured.items[idx]; $('#capTitle').textContent = it.title; $('#capSub').textContent = it.sub; $('#capIdx').textContent = `${String(idx + 1).padStart(2, '0')} / ${String(NF).padStart(2, '0')}`; cap.classList.remove('swap'); }, capIdx === idx && belt.first ? 0 : 140);
    belt.first = 1;
  }
}
function updateFT(p) {
  const q = clamp(p / .9), scrollOff = step(q * (NF - 1)) * (belt.pitch || 1);
  belt.target = scrollOff;
  belt.off = lerp(belt.off, scrollOff + belt.drag, .2);
  beltDraw(belt.off);
}
(() => { // arrastre con mouse
  let down = false, sx = 0, sd = 0;
  belt.cv.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; sx = e.clientX; sd = belt.drag; belt.cv.setPointerCapture(e.pointerId); });
  belt.cv.addEventListener('pointermove', e => { if (!down) return; belt.drag = sd - (e.clientX - sx) * 1.2; });
  const up = () => { if (!down) return; down = false; const p = belt.pitch || 1, tot = belt.target + belt.drag; belt.drag = clamp(Math.round(tot / p), 0, NF - 1) * p - belt.target; };
  belt.cv.addEventListener('pointerup', up); belt.cv.addEventListener('pointercancel', up);
})();

/* ---------- Módulo 4: Hexágono → tambor ---------- */
const ring = $('#ring'), wLabel = $('#worksLabel'), wCenter = $('#worksCenter'), wIdx = $('#worksIndex');
const W = { tex: S.works.items.map((it, i) => makeTexture(it, 'light', 31 + i * 5, () => paintCards())), drag: 0, tg: 0 };
ring.innerHTML = S.works.items.map((it, i) => `<div class="wcard" data-i="${i}" role="button" tabindex="0" aria-label="${esc(it.title)}"></div>`).join('');
const wCards = $$('.wcard', ring);
function paintCards() { wCards.forEach((c, i) => { const cv = W.tex[i].src; c.style.backgroundImage = `url(${cv.toDataURL ? cv.toDataURL('image/jpeg', .85) : ''})`; }); }
paintCards();
wIdx.innerHTML = S.works.items.map((it, i) => `<li><button data-i="${i}">${esc(it.title)}</button></li>`).join('');
const wBtns = $$('button', wIdx); let wActive = -1;
const wrap180 = d => ((d + 180) % 360 + 360) % 360 - 180;
const worksTop = () => { const r = M.wk.el; return r.getBoundingClientRect().top + scrollY; };
const worksScrollTo = i => { const span = M.wk.el.offsetHeight - innerHeight; scrollTo({ top: worksTop() + span * (.22 + .78 * (i / (NW - 1))) + 2, behavior: reduce ? 'auto' : 'smooth' }); };
[...wBtns, ...wCards].forEach(b => b.addEventListener('click', () => worksScrollTo(+b.dataset.i)));
function updateWK(p, now) {
  const t = ease(clamp(p / .22)), sp = clamp((p - .22) / .78);
  const pos = clamp(sp * (NW - 1) + W.drag, 0, NW - 1);
  const vw = innerWidth, vh = innerHeight, rad = Math.min(vw, vh) * (vw < 700 ? .3 : .31), cw = wCards[0].offsetWidth, spin = reduce ? 0 : (now / 1000) * 14 * (1 - t);
  wCards.forEach((c, i) => {
    const a = (i / NW) * 360 - 90 + spin + sp * 40, ar = a * Math.PI / 180;
    const hx = Math.cos(ar) * rad * 1.15, hy = Math.sin(ar) * rad, hrz = wrap180(a + 90), hrx = 22, hz = 0, hs = .86, ho = 1;
    const k = i - pos, ak = Math.abs(k);
    const dy = k * cw * .72, drx = clamp(-k * 34, -75, 75), dz = -ak * cw * .5, ds = 1.5 - ak * .2, dop = clamp(1.15 - ak * .5, 0, 1);
    const x = lerp(hx, 0, t), y = lerp(hy, dy, t), rz = lerp(hrz, 0, t), rx = lerp(hrx, drx, t), z = lerp(hz, dz, t), s = lerp(hs, Math.max(ds, .3), t), o = lerp(ho, dop, t);
    c.style.transform = `translate3d(${x}px,${y}px,${z}px) rotateZ(${rz}deg) rotateX(${rx}deg) scale(${s})`;
    c.style.opacity = o; c.style.zIndex = Math.round(100 - ak * 10); c.style.pointerEvents = o < .2 ? 'none' : 'auto';
  });
  wCenter.style.opacity = 1 - clamp(t * 2.5);
  const ai = Math.round(pos);
  wLabel.style.opacity = clamp((t - .5) * 2);
  if (ai !== wActive) { wActive = ai; wLabel.textContent = S.works.items[ai].title; wBtns.forEach((b, i) => b.classList.toggle('on', i === ai)); }
}
(() => { // arrastre vertical con mouse
  const st = $('#worksStage'); let down = false, sy = 0, sd = 0;
  st.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse' || e.target.closest('button,a')) return; down = true; sy = e.clientY; sd = W.drag; });
  addEventListener('pointermove', e => { if (!down) return; const span = M.wk.el.offsetHeight - innerHeight; const sp = clamp((scrollY - worksTop() - span * .22) / (span * .78)); W.drag = clamp(sd - (e.clientY - sy) / (innerHeight * .3), -sp * (NW - 1), (1 - sp) * (NW - 1)); });
  addEventListener('pointerup', () => { if (!down) return; down = false; });
})();

/* ---------- Nav: tema + enlace activo + saltos ---------- */
const nav = $('#nav'), sections = ['s-home', 's-experience', 's-projects', 's-works', 's-services', 's-contact'].map(id => $('#' + id));
const themes = { 's-home': 'dyn', 's-experience': 'dark', 's-projects': 'light', 's-works': 'light', 's-services': 'light', 's-contact': 'dark' };
function targets() {
  const t = e => e.getBoundingClientRect().top + scrollY, h = $('#s-home');
  return { home: t(h), about: t(h) + (h.offsetHeight - innerHeight) * .86, experience: t($('#s-experience')), projects: t($('#s-projects')), works: t($('#s-works')), services: t($('#s-services')), contact: t($('#s-contact')) };
}
let TG = targets();
function updateNav() {
  let th = 'light';
  for (const s of sections) { const r = s.getBoundingClientRect(); if (r.top <= 40 && r.bottom > 40) { th = themes[s.id]; if (th === 'dyn') th = navOverride || 'light'; if (s.id === 's-experience' && (M.ex.wipe || 0) > .6) th = 'light'; if (s.id === 's-services' && r.bottom < 60) th = 'dark'; break; } }
  if (nav.dataset.theme !== th) nav.dataset.theme = th;
  let act = 'home'; for (const [k, v] of Object.entries(TG)) if (scrollY >= v - innerHeight * .4) act = k;
  $$('#navLinks a').forEach(a => a.classList.toggle('on', a.dataset.go === act));
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-go]'); if (!a) return; e.preventDefault();
  TG = targets(); scrollTo({ top: TG[a.dataset.go] + 1, behavior: reduce ? 'auto' : 'smooth' });
});

/* ---------- Contacto: foco de luz que sigue al cursor + reveal ---------- */
const talk = $('#s-contact');
talk.addEventListener('pointermove', e => { const r = $('#talkTitle').getBoundingClientRect(); talk.style.setProperty('--mx', (e.clientX - r.left) + 'px'); talk.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .25 });
$$('[data-reveal]').forEach(el => io.observe(el)); io.observe(talk);

/* ---------- Bucle principal ---------- */
function frame(now) {
  for (const k of ['ha', 'ex', 'ft', 'wk']) { const m = M[k]; if (!near(m.el) && m.seen) continue; m.seen = 1; const t = wrapProg(m.el); m.cur = Math.abs(t - m.cur) < .0004 ? t : lerp(m.cur, t, SM); }
  if (near(M.ha.el)) updateHA(M.ha.cur);
  if (near(M.ex.el)) updateEX(M.ex.cur);
  if (near(M.ft.el)) updateFT(M.ft.cur);
  if (near(M.wk.el)) updateWK(M.wk.cur, now);
  updateNav(); requestAnimationFrame(frame);
}
function resize() { setHeights(); drawSwirl(); beltSize(); TG = targets(); }
let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 120); });
resize(); beltSize();
// Saltos de ancla iniciales si la URL trae hash
/* ---------- Preloader ---------- */
function preloader() {
  const path = $('#plPath'), dot = $('#plDot'), word = $('#plWord'), len = path.getTotalLength();
  word.innerHTML = [...S.preloader.word].map((c, i) => `<span style="animation-delay:${.5 + i * .09}s">${esc(c)}</span>`).join('');
  path.style.strokeDasharray = len; path.style.strokeDashoffset = len;
  const t0 = performance.now(), D = 1500;
  (function draw(n) {
    const k = clamp((n - t0) / D), e = 1 - Math.pow(1 - k, 3); path.style.strokeDashoffset = len * (1 - e);
    const pt = path.getPointAtLength(len * e); dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y);
    if (k < 1) requestAnimationFrame(draw);
  })(t0);
  setTimeout(() => { word.insertAdjacentHTML('beforeend', '<span style="animation-delay:0s">.</span>'); }, 1500);
  setTimeout(() => {
    $('#preloader').classList.add('done'); document.body.classList.remove('is-loading'); document.body.classList.add('ready');
    setTimeout(() => $('#preloader').remove(), 1200);
  }, 2400);
}
if (reduce) { $('#preloader').remove(); document.body.classList.remove('is-loading'); document.body.classList.add('ready'); } else preloader();
scrollTo(0, 0); requestAnimationFrame(frame);
})();
