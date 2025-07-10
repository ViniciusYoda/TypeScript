const selector = 'a[href*="://"]:not([href^="http://internal.com"])';
const links = document.querySelectorAll<HTMLAnchorElement>(selector);

links.forEach(link => {
  link.style.color = 'orange';
});
