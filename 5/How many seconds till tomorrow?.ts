function getSecondsToTomorrow(): number {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const diff = tomorrow.getTime() - now.getTime(); // diferença em ms
  return Math.round(diff / 1000); // converte para segundos
}

alert(getSecondsToTomorrow());
