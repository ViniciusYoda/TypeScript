const flyjet2 = document.getElementById('flyjet') as HTMLElement | null;

if (flyjet2) {
  flyjet2.onclick = () => {
    flyjet2.classList.add('growing');
  };
}
