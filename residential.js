const viewer = document.querySelector('.res-viewer');
const drawing = viewer.querySelector('img');
const caption = viewer.querySelector('figcaption');

document.querySelectorAll('.res-gallery__item').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        typeof viewer.showModal !== 'function') {
      return;
    }

    event.preventDefault();
    const project = link.closest('.res-card').querySelector('.res-card__title');
    const label = link.querySelector('span').firstChild.textContent.trim();
    caption.textContent = project.textContent + ' · ' + label;
    drawing.src = link.href;
    viewer.showModal();
  });
});

viewer.addEventListener('close', () => {
  drawing.removeAttribute('src');
});
