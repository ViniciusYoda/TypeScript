function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  let diffMs = new Date().getTime() - date.getTime();
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = Math.floor(diffSec / 60);
  let diffHour = Math.floor(diffMin / 60);

  // formata com zero à esquerda se necessário
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month.toString();
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth.toString();
  hour = hour < 10 ? '0' + hour : hour.toString();
  minutes = minutes < 10 ? '0' + minutes : minutes.toString();

  if (diffSec < 1) {
    return 'right now';
  } else if (diffMin < 1) {
    return `${diffSec} sec. ago`;
  } else if (diffHour < 1) {
    return `${diffMin} min. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}
