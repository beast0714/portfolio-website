const filters = document.querySelector('#filters');
const cards = [...document.querySelectorAll('[data-kind]')];
filters.hidden = false;
filters.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const kind = button.dataset.filter;
  for (const item of filters.querySelectorAll('button')) item.setAttribute('aria-pressed', String(item === button));
  for (const card of cards) card.hidden = kind !== 'all' && card.dataset.kind !== kind;
  const visible = cards.filter(card => !card.hidden).length;
  document.querySelector('#filter-status').textContent = visible + (visible === 1 ? ' project shown' : ' projects shown');
});
