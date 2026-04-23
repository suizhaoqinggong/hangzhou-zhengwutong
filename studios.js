import {
  loadPlatformData,
  normalizePath,
  streetGroups,
  toStudioHref,
} from './data.js';
import {
  escapeHtml,
  renderFallbackMedia,
  renderStatItems,
  setDocumentTitle,
  setupClock,
  setupReveal,
} from './shared.js';

const state = {
  query: '',
  street: '全部',
  category: '全部',
};

let studios = [];

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

const filteredStudios = () =>
  studios.filter((studio) => {
    const queryPass = JSON.stringify(studio).toLowerCase().includes(state.query.toLowerCase());
    const streetPass = state.street === '全部' || studio.street === state.street;
    const categoryPass = state.category === '全部' || studio.category === state.category;
    return queryPass && streetPass && categoryPass;
  });

const renderFilters = () => {
  const streetOptions = ['全部', ...new Set(studios.map((studio) => studio.street))];
  const categoryOptions = ['全部', ...new Set(studios.map((studio) => studio.category))];

  document.getElementById('street-filter').innerHTML = streetOptions
    .map(
      (street) =>
        `<option value="${escapeHtml(street)}" ${
          street === state.street ? 'selected' : ''
        }>${escapeHtml(street)}</option>`,
    )
    .join('');

  document.getElementById('category-filter').innerHTML = categoryOptions
    .map(
      (category) =>
        `<option value="${escapeHtml(category)}" ${
          category === state.category ? 'selected' : ''
        }>${escapeHtml(category)}</option>`,
    )
    .join('');
};

const renderDirectory = () => {
  const items = filteredStudios();
  document.getElementById('studio-directory-grid').innerHTML = items.map(renderStudioCard).join('');
  document.getElementById('studio-directory-count').textContent = `当前显示 ${items.length} / ${studios.length} 家工作室`;
  document.getElementById('studio-directory-empty').hidden = items.length !== 0;
};

const setupControls = () => {
  document.getElementById('studio-search').addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    renderDirectory();
  });

  document.getElementById('street-filter').addEventListener('change', (event) => {
    state.street = event.target.value;
    renderDirectory();
  });

  document.getElementById('category-filter').addEventListener('change', (event) => {
    state.category = event.target.value;
    renderDirectory();
  });
};

const init = async () => {
  setDocumentTitle('委员工作室名录');
  const platform = await loadPlatformData();
  studios = platform.studios;

  document.getElementById('studio-directory-stats').innerHTML = renderStatItems([
    { value: String(studios.length), label: '工作室总数', note: '已接入详情页' },
    { value: String(streetGroups.length), label: '覆盖街道', note: '街道入口已打通' },
    { value: String(new Set(studios.map((studio) => studio.category)).size), label: '履职主题', note: '按名称与案例归类' },
    { value: String(studios.filter((studio) => Boolean(studio.image)).length), label: '现场图片', note: '支持图文详情展示' },
  ]);

  renderFilters();
  renderDirectory();
  setupControls();
  setupClock();
  setupReveal();
};

init().catch((error) => {
  document.getElementById('studio-directory-empty').hidden = false;
  document.getElementById('studio-directory-empty').innerHTML = `<p>${escapeHtml(
    `加载失败：${error.message}`,
  )}</p>`;
});
