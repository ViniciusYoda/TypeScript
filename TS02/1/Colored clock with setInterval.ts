let timerId: number | null = null;

function update(): void {
  const clock = document.getElementById('clock');
  if (!clock || clock.children.length < 3) return;

  const date = new Date();

  let hours: string | number = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours.toString();

  let minutes: string | number = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes.toString();

  let seconds: string | number = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds.toString();
}

function clockStart(): void {
  if (timerId === null) {
    timerId = window.setInterval(update, 1000);
  }
  update();
}

function clockStop(): void {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}
