(() => {
  const viewer = document.querySelector('.res-viewer');
  if (!viewer || typeof viewer.showModal !== 'function') return;
  const selector = '.res-gallery__item, .designs figure a[href]';
  const caption = viewer.querySelector('#res-viewer-caption');
  let group = [], index = 0, opener;
  function display(step) {
    index = (index + step + group.length) % group.length;
    const link = group[index];
    const project = link.closest('.res-card')?.querySelector('.res-card__title')?.textContent.trim();
    const label = link.querySelector('span')?.firstChild?.textContent.trim() || link.querySelector('img').alt;
    viewer.querySelector('img').src = link.href;
    viewer.querySelector('img').alt = label;
    viewer.querySelector('.full-image').href = link.href;
    caption.textContent = [project,label,(index+1)+' of '+group.length].filter(Boolean).join(' · ');
  }
  document.querySelectorAll(selector).forEach(link => link.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    group = Array.from((link.closest('.res-gallery') || document.querySelector('.designs')).querySelectorAll(selector));
    opener = link; index = group.indexOf(link); display(0); viewer.showModal();
  }));
  viewer.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => display(Number(b.dataset.step))));
  viewer.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {e.preventDefault(); display(e.key === 'ArrowLeft' ? -1 : 1);}
  });
  viewer.addEventListener('close', () => { viewer.querySelector('img').removeAttribute('src'); opener?.focus(); });
})();
