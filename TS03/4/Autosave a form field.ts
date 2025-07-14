const area = document.getElementById('area') as HTMLTextAreaElement | null;

if (area) {
  area.value = localStorage.getItem('area') || '';

  area.oninput = () => {
    localStorage.setItem('area', area.value);
  };
}
