const flyjet = document.getElementById('flyjet') as HTMLElement | null;

if (flyjet) {
  let ended = false;

  flyjet.onclick = function () {
    const onTransitionEnd = () => {
      if (!ended) {
        ended = true;
        alert('Done!');
        flyjet.removeEventListener('transitionend', onTransitionEnd); // remove listener após uso
      }
    };

    flyjet.addEventListener('transitionend', onTransitionEnd);
    flyjet.classList.add('growing');
  };
}
