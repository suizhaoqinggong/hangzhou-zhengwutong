import {
  getPracticeByStreet,
  getStreetNarrative,
  getStreetByName,
  getStreetResources,
  getStudiosByStreet,
  loadPlatformData,
  normalizePath,
  toStudioHref,
} from './data.js';
import {
  escapeHtml,
  readQueryParam,
  renderFallbackMedia,
  renderStatItems,
  setDocumentTitle,
  setupClock,
  setupReveal,
} from './shared.js';

const renderStudioCard = (studio) => `
  <a class="studio-card studio-card--link" href="${normalizePath(toStudioHref(studio.id))}">
    ${
      studio.image
        ? `
          <figure>
            <img src="${normalizePath(studio.image)}" alt="${escapeHtml(studio.name)}" loading="lazy" />
          </figure>
        `
        : `
          <figure class="studio-card__fallback">
            ${renderFallbackMedia(studio.name, studio.category)}
          </figure>
        `
    }
    <div class="studio-body">
      <div class="studio-topline">
        <span>${escapeHtml(studio.category)}</span>
        <span>${escapeHtml(studio.street)}</span>
      </div>
      <h3>${escapeHtml(studio.name)}</h3>
      <p>${escapeHtml(studio.summary)}</p>
      <p class="address-line">负责人 ${escapeHtml(studio.leader)}</p>
    </div>
  </a>
`;

const renderNarrativeCard = (item) => `
  <article class="narrative-card">
    <p class="narrative-card__eyebrow">街道模块</p>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.body)}</p>
  </article>
`;

const renderGalleryCard = (item) => `
  <article class="gallery-card">
    <figure>
      <img src="${normalizePath(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
    </figure>
    <div class="gallery-card__body">
      <span>${escapeHtml(item.eyebrow)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
    </div>
  </article>
`;

const renderPracticeCard = (item) => `
  <article class="practice-card">
    <figure>
      <img src="${normalizePath(item.image)}" alt="${escapeHtml(item.title)}" loading="lazy" />
    </figure>
    <div class="practice-body">
      <div class="practice-topline">
        <span>${escapeHtml(item.area)}</span>
        <span>协商案例</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
    </div>
  </article>
`;

const renderDocCard = (doc) => `
  <a class="doc-card" href="${normalizePath(doc.href)}">
    <div class="card-meta">
      <span class="card-index">${escapeHtml(doc.type)}</span>
      <span>原始资料</span>
    </div>
    <h3>${escapeHtml(doc.title)}</h3>
    <p>${escapeHtml(doc.summary)}</p>
    <div class="chip-row">
      ${doc.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}
    </div>
  </a>
`;

const showNotFound = () => {
  document.getElementById('street-not-found').hidden = false;
  document.querySelectorAll('#street-detail-page .section-block, #street-detail-page .page-hero').forEach(
    (element) => {
      if (element.id !== 'street-not-found') {
        element.hidden = true;
      }
    },
  );
};

const init = async () => {
  const streetName = readQueryParam('name');
  const street = getStreetByName(streetName);

  if (!street) {
    showNotFound();
    return;
  }

  const platform = await loadPlatformData();
  const streetStudios = getStudiosByStreet(platform.studios, street.name);
  const practiceItems = getPracticeByStreet(street.name);
  const resources = getStreetResources(street.name);
  const narrative = getStreetNarrative(platform.studios, street);
  const heroGallery = narrative.gallery[0] || null;

  setDocumentTitle(street.name);
  document.getElementById('street-breadcrumb').textContent = street.name;
  document.getElementById('street-title').textContent = street.name;
  document.getElementById('street-summary').textContent = narrative.lead;
  document.getElementById('street-overview').innerHTML = narrative.overview
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');

  document.getElementById('street-detail-stats').innerHTML = renderStatItems([
    { value: street.leader, label: '召集人', note: '街道委员小组' },
    { value: String(streetStudios.length), label: '关联工作室', note: '已接入工作室详情页' },
    { value: String(practiceItems.length), label: '相关案例', note: '协商实践联动' },
    { value: street.tags.join(' / '), label: '履职重点', note: '当前街道标签' },
  ]);

  document.getElementById('street-detail-actions').innerHTML = `
    <a class="card-link" href="./streets.html">返回街道目录</a>
    <a class="ghost-link" href="./studios.html">查看工作室名录</a>
  `;

  document.getElementById('street-detail-media').innerHTML = heroGallery
    ? `
        <figure class="detail-media__figure">
          <img src="${normalizePath(heroGallery.image)}" alt="${escapeHtml(heroGallery.title)}" />
          <figcaption class="detail-media__caption">
            <span>${escapeHtml(heroGallery.eyebrow)}</span>
            <strong>${escapeHtml(heroGallery.title)}</strong>
            <p>${escapeHtml(heroGallery.summary)}</p>
          </figcaption>
        </figure>
      `
    : renderFallbackMedia(street.name, '街道履职');

  document.getElementById('street-info-list').innerHTML = `
    <div class="info-row"><span>街道名称</span><strong>${escapeHtml(street.name)}</strong></div>
    <div class="info-row"><span>召集人</span><strong>${escapeHtml(street.leader)}</strong></div>
    <div class="info-row"><span>地址</span><strong>${escapeHtml(street.address)}</strong></div>
    <div class="info-row"><span>履职标签</span><strong>${escapeHtml(street.tags.join('、'))}</strong></div>
  `;
  document.getElementById('street-focus-grid').innerHTML = narrative.focusCards
    .map(renderNarrativeCard)
    .join('');
  document.getElementById('street-gallery-grid').innerHTML = narrative.gallery
    .map(renderGalleryCard)
    .join('');
  document.getElementById('street-gallery-empty').hidden = narrative.gallery.length !== 0;
  document.getElementById('street-service-list').innerHTML = narrative.serviceObjects
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  document.getElementById('street-agenda-list').innerHTML = narrative.annualAgenda
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  document.getElementById('street-studio-grid').innerHTML = streetStudios
    .map(renderStudioCard)
    .join('');
  document.getElementById('street-studio-empty').hidden = streetStudios.length !== 0;

  document.getElementById('street-practice-grid').innerHTML = practiceItems
    .map(renderPracticeCard)
    .join('');
  document.getElementById('street-practice-empty').hidden = practiceItems.length !== 0;

  document.getElementById('street-resource-grid').innerHTML = resources
    .map(renderDocCard)
    .join('');

  setupClock();
  setupReveal();
};

init().catch((error) => {
  document.getElementById('street-not-found').hidden = false;
  document.getElementById('street-not-found').innerHTML = `<p>${escapeHtml(
    `加载失败：${error.message}`,
  )}</p>`;
});
