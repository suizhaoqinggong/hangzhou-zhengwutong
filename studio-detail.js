import {
  getPracticeByStreet,
  getRelatedStudios,
  getStudioNarrative,
  getStreetByStudio,
  getStudioById,
  getStudioResources,
  loadPlatformData,
  normalizePath,
  toStreetHref,
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
    <p class="narrative-card__eyebrow">重点模块</p>
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

const renderLinkedStreet = (street) => `
  <a class="street-card street-card--directory" href="${normalizePath(toStreetHref(street.name))}">
    <div class="card-meta">
      <span class="card-index">${escapeHtml(street.name.replace('街道', ''))}</span>
      <span>召集人 ${escapeHtml(street.leader)}</span>
    </div>
    <h3>${escapeHtml(street.name)}</h3>
    <p>${escapeHtml(street.summary)}</p>
    <div class="chip-row">
      ${street.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join('')}
    </div>
  </a>
`;

const fillInfoList = (studio) => {
  document.getElementById('studio-info-list').innerHTML = `
    <div class="info-row"><span>负责人</span><strong>${escapeHtml(studio.leader)}</strong></div>
    <div class="info-row"><span>所属街道</span><strong>${escapeHtml(studio.street)}</strong></div>
    <div class="info-row"><span>履职主题</span><strong>${escapeHtml(studio.category)}</strong></div>
    <div class="info-row"><span>联系地址</span><strong>${escapeHtml(studio.address)}</strong></div>
  `;
};

const showNotFound = () => {
  document.getElementById('studio-not-found').hidden = false;
  document.querySelectorAll('#studio-detail-page .section-block, #studio-detail-page .page-hero').forEach(
    (element) => {
      if (element.id !== 'studio-not-found') {
        element.hidden = true;
      }
    },
  );
};

const init = async () => {
  const studioId = readQueryParam('id');
  const platform = await loadPlatformData();
  const studio = getStudioById(platform.studios, studioId);

  if (!studio) {
    showNotFound();
    return;
  }

  const street = getStreetByStudio(studio);
  const practiceItems = street ? getPracticeByStreet(street.name).slice(0, 3) : [];
  const relatedStudios = getRelatedStudios(platform.studios, studio, 4);
  const resources = getStudioResources(studio);
  const narrative = getStudioNarrative(platform.studios, studio);
  const heroGallery = narrative.gallery[0] || null;

  setDocumentTitle(studio.name);
  document.getElementById('studio-breadcrumb').textContent = studio.name;
  document.getElementById('studio-category').textContent = studio.category;
  document.getElementById('studio-title').textContent = studio.name;
  document.getElementById('studio-summary').textContent = narrative.lead;
  document.getElementById('studio-overview').innerHTML = narrative.overview
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('');

  document.getElementById('studio-detail-stats').innerHTML = renderStatItems([
    { value: String(studio.id), label: '工作室编号', note: '按平台名单顺序' },
    { value: studio.leader, label: '负责人', note: '平台基础信息' },
    { value: studio.street, label: '所属街道', note: '已接入街道详情页' },
    { value: studio.category, label: '履职主题', note: '按名称与案例归类' },
  ]);

  document.getElementById('studio-detail-actions').innerHTML = `
    <a class="card-link" href="./studios.html">返回工作室名录</a>
    ${
      street
        ? `<a class="ghost-link" href="${normalizePath(toStreetHref(street.name))}">查看所属街道</a>`
        : ''
    }
  `;

  document.getElementById('studio-detail-media').innerHTML = heroGallery
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
    : renderFallbackMedia(studio.name, studio.category);

  fillInfoList(studio);
  document.getElementById('studio-focus-grid').innerHTML = narrative.focusCards
    .map(renderNarrativeCard)
    .join('');
  document.getElementById('studio-gallery-grid').innerHTML = narrative.gallery
    .map(renderGalleryCard)
    .join('');
  document.getElementById('studio-gallery-empty').hidden = narrative.gallery.length !== 0;
  document.getElementById('studio-service-list').innerHTML = narrative.serviceObjects
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  document.getElementById('studio-agenda-list').innerHTML = narrative.annualAgenda
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  document.getElementById('studio-linked-street').innerHTML = street
    ? renderLinkedStreet(street)
    : '<div class="empty-mini">当前工作室未映射到具体街道。</div>';

  document.getElementById('studio-practice-grid').innerHTML = practiceItems
    .map(renderPracticeCard)
    .join('');
  document.getElementById('studio-practice-empty').hidden = practiceItems.length !== 0;

  document.getElementById('studio-resource-grid').innerHTML = resources
    .map(renderDocCard)
    .join('');
  document.getElementById('related-studio-grid').innerHTML = relatedStudios
    .map(renderStudioCard)
    .join('');

  setupClock();
  setupReveal();
};

init().catch((error) => {
  document.getElementById('studio-not-found').hidden = false;
  document.getElementById('studio-not-found').innerHTML = `<p>${escapeHtml(
    `加载失败：${error.message}`,
  )}</p>`;
});
