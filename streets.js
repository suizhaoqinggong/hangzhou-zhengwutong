import {
  getPracticeByStreet,
  getStreetStats,
  loadPlatformData,
  normalizePath,
  streetGroups,
} from './data.js';
import {
  escapeHtml,
  renderStatItems,
  setDocumentTitle,
  setupClock,
  setupReveal,
} from './shared.js';

let studios = [];
let query = '';

const renderStreetCard = (street) => {
  const stats = getStreetStats(studios, street.name);

  return `
    <a class="street-card street-card--directory" href="${normalizePath(street.href)}">
      <div class="card-meta">
        <span class="card-index">${escapeHtml(street.name.replace('街道', ''))}</span>
        <span>召集人 ${escapeHtml(street.leader)}</span>
      </div>
      <h3>${escapeHtml(street.name)}</h3>
      <p>${escapeHtml(street.summary)}</p>
      <div class="chip-row">
        <span class="chip">工作室 ${escapeHtml(stats.studioCount)}</span>
        <span class="chip">案例 ${escapeHtml(stats.practiceCount)}</span>
      </div>
    </a>
  `;
};

const renderDirectory = () => {
  const items = streetGroups.filter((street) =>
    JSON.stringify(street).toLowerCase().includes(query.toLowerCase()),
  );

  document.getElementById('street-directory-grid').innerHTML = items.map(renderStreetCard).join('');
  document.getElementById('street-directory-count').textContent = `当前显示 ${items.length} / ${streetGroups.length} 个街道入口`;
  document.getElementById('street-directory-empty').hidden = items.length !== 0;
};

const init = async () => {
  setDocumentTitle('街道委员小组');
  const platform = await loadPlatformData();
  studios = platform.studios;

  const practiceCount = streetGroups.reduce(
    (count, street) => count + getPracticeByStreet(street.name).length,
    0,
  );

  document.getElementById('street-directory-stats').innerHTML = renderStatItems([
    { value: String(streetGroups.length), label: '街道总数', note: '14 个街道入口' },
    { value: String(studios.length), label: '关联工作室', note: '支持从街道跳到工作室详情' },
    { value: String(practiceCount), label: '街道案例', note: '已接入协商实践案例' },
    { value: '1', label: '资料总入口', note: '街道 PDF 已保留' },
  ]);

  document.getElementById('street-search').addEventListener('input', (event) => {
    query = event.target.value.trim();
    renderDirectory();
  });

  renderDirectory();
  setupClock();
  setupReveal();
};

init().catch((error) => {
  document.getElementById('street-directory-empty').hidden = false;
  document.getElementById('street-directory-empty').innerHTML = `<p>${escapeHtml(
    `加载失败：${error.message}`,
  )}</p>`;
});
