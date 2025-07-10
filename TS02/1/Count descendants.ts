for (const li of document.querySelectorAll<HTMLLIElement>('li')) {
  const firstChild = li.firstChild;
  
  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    const title = firstChild.textContent?.trim() || '';
    
    // title is the text in <li> before any other nodes
  }
}

