function initCarousel() {
  const carousel = document.getElementById('carousel');

  if (!carousel) {
    console.warn('Elemento com id "carousel" não encontrado no DOM');
    return;
  }

  let i = 1;
  carousel.querySelectorAll('li').forEach(li => {
    if (!(li instanceof HTMLElement)) return;
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  });

  const width = 130;
  const count = 3;

  const list = carousel.querySelector('ul');
  const listElems = carousel.querySelectorAll('li');

  if (!list) {
    console.warn('Elemento <ul> não encontrado dentro do carousel');
    return;
  }

  let position = 0;

  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      position += width * count;
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    });
  }
}

// Chama a função para inicializar o carousel
initCarousel();
