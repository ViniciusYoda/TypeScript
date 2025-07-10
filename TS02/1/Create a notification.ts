interface NotificationOptions {
  top?: number;
  right?: number;
  className?: string;
  html: string;
}

function showNotification({ top = 0, right = 0, className, html }: NotificationOptions): void {
  const notification = document.createElement('div');
  notification.className = 'notification';

  if (className) {
    notification.classList.add(className);
  }

  notification.style.position = 'fixed'; // necessário para posicionamento com top/right
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  notification.innerHTML = html;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

// Teste
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: 'welcome'
  });
}, 2000);
