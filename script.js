import {
  docs,
  getFeaturedPractices,
  getFeaturedStudios,
  getHomeSearchCount,
  loadPlatformData,
  metrics,
  normalizePath,
  quickActions,
  quickModules,
  sectors,
  streetGroups,
  toStudioHref,
} from './data.js';
import {
  applyDeferredSources,
  escapeHtml,
  renderFallbackMedia,
  setupClock,
  setupReveal,
} from './shared.js';

const state = {
  query: '',
  studioFilter: '全部',
};

let featuredStudios = [];

const renderMetricCard = (metric) => `
  <article class="metric-card">
    <strong>${escapeHtml(metric.value)}</strong>
    <span>${escapeHtml(metric.label)}</span>
    <span>${escapeHtml(metric.note)}</span>
  </article>
`;

const renderModuleCard = (module) => `
  <a class="module-card" href="${normalizePath(module.href)}">
    <div class="card-meta">
      <span class="card-index">${escapeHtml(module.index)}</span>
      <span>${escapeHtml(module.meta)}</span>
    </div>
    <h3>${escapeHtml(module.title)}</h3>
    <p>${escapeHtml(module.summary)}</p>
    <span class="card-link">${escapeHtml(module.action)}</span>
  </a>
`;

const renderActionTile = (action) => `
  <a class="action-tile" href="${normalizePath(action.href)}">
    <strong>${escapeHtml(action.title)}</strong>
    <span>${escapeHtml(action.meta)}</span>
  </a>
`;

const renderStreetCard = (street) => `
  <a class="street-card" href="${normalizePath(street.href)}">
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

const renderSectorCard = (sector) => `
  <a class="sector-card" href="${normalizePath(sector.href)}">
    <div class="card-meta">
      <span class="card-index">${escapeHtml(`${sector.count}图`)}</span>
      <span>界别活动</span>
    </div>
    <h3>${escapeHtml(sector.name)}</h3>
    <p>${escapeHtml(sector.focus)}</p>
    <div class="chip-row">
      <span class="chip">活动照片 ${escapeHtml(sector.count)}</span>
      <span class="chip">可接简介资料</span>
    </div>
  </a>
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

const matchesQuery = (value) =>
  JSON.stringify(value).toLowerCase().includes(state.query.toLowerCase());

const renderMetrics = () => {
  document.getElementById('metrics').innerHTML = metrics.map(renderMetricCard).join('');
};

const renderQuickModules = () => {
  document.getElementById('module-grid').innerHTML = quickModules
    .map(renderModuleCard)
    .join('');
};

const renderQuickActions = () => {
  document.getElementById('quick-actions').innerHTML = quickActions
    .map(renderActionTile)
    .join('');
};

const renderStreets = () => {
  const items = streetGroups.filter((street) => matchesQuery(street));
  document.getElementById('street-grid').innerHTML = items.map(renderStreetCard).join('');
  return items.length;
};

const renderStudioFilters = () => {
  const categories = ['全部', ...new Set(featuredStudios.map((studio) => studio.category))];
  document.getElementById('studio-filters').innerHTML = categories
    .map(
      (category) => `
        <button class="pill ${
          category === state.studioFilter ? 'is-active' : ''
        }" type="button" data-filter="${escapeHtml(category)}">
          ${escapeHtml(category)}
        </button>
      `,
    )
    .join('');

  document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      state.studioFilter = button.dataset.filter;
      renderStudioFilters();
      renderSearchables();
    });
  });
};

const renderStudios = () => {
  const items = featuredStudios.filter((studio) => {
    const categoryPass =
      state.studioFilter === '全部' || studio.category === state.studioFilter;
    const queryPass = matchesQuery(studio);
    return categoryPass && queryPass;
  });

  document.getElementById('studio-grid').innerHTML = items.map(renderStudioCard).join('');
  return items.length;
};

const renderSectors = () => {
  const items = sectors.filter((sector) => matchesQuery(sector));
  document.getElementById('sector-grid').innerHTML = items.map(renderSectorCard).join('');
  return items.length;
};

const renderPractice = () => {
  const items = getFeaturedPractices().filter((item) => matchesQuery(item));
  document.getElementById('practice-grid').innerHTML = items.map(renderPracticeCard).join('');
  return items.length;
};

const renderDocs = () => {
  const items = docs.filter((doc) => matchesQuery(doc));
  document.getElementById('docs-grid').innerHTML = items.map(renderDocCard).join('');
  return items.length;
};

const renderSearchables = () => {
  const total =
    renderStreets() +
    renderStudios() +
    renderSectors() +
    renderPractice() +
    renderDocs();

  document.getElementById('search-count').textContent =
    state.query.trim() === ''
      ? `已加载 ${total} 个内容单元`
      : `检索到 ${total} 个匹配结果`;

  document.getElementById('empty-state').hidden = total !== 0;
};

const setupSearch = (initialCount) => {
  const target = document.getElementById('search-input');
  const countNode = document.getElementById('search-count');

  countNode.textContent = `已加载 ${initialCount} 个内容单元`;

  target.addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    renderSearchables();
  });
};

const init = async () => {
  const platform = await loadPlatformData();
  featuredStudios = getFeaturedStudios(platform.studios);

  renderMetrics();
  renderQuickModules();
  renderQuickActions();
  renderStudioFilters();
  renderSearchables();
  setupSearch(getHomeSearchCount(platform.studios));
  applyDeferredSources();
  setupClock();
  setupReveal();
};

init().catch((error) => {
  document.getElementById('empty-state').hidden = false;
  document.getElementById('empty-state').innerHTML = `<p>${escapeHtml(
    `页面初始化失败：${error.message}`,
  )}</p>`;
});
