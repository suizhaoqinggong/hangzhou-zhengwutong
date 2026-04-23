import { normalizePath } from './data.js';

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function setupClock() {
  const target = document.getElementById('live-time');

  if (!target) {
    return;
  }

  const formatter = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  const update = () => {
    target.textContent = formatter.format(new Date());
  };

  update();
  window.setInterval(update, 60_000);
}

export function setupReveal() {
  const targets = document.querySelectorAll('.reveal');

  if (!targets.length || typeof IntersectionObserver === 'undefined') {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  targets.forEach((target) => observer.observe(target));
}

export function applyDeferredSources() {
  document.querySelectorAll('[data-src]').forEach((img) => {
    img.src = normalizePath(img.dataset.src);
    img.loading = 'lazy';
  });
}

export function readQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

export function renderFallbackMedia(title, subtitle = '暂无活动图片') {
  return `
    <div class="media-fallback">
      <span class="media-fallback__eyebrow">${escapeHtml(subtitle)}</span>
      <strong>${escapeHtml(title)}</strong>
    </div>
  `;
}

export function renderStatItems(items) {
  return items
    .map(
      (item) => `
        <article class="metric-card metric-card--compact">
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <span>${escapeHtml(item.note)}</span>
        </article>
      `,
    )
    .join('');
}

export function setDocumentTitle(title) {
  document.title = `${title} | 杭州政委通`;
}
