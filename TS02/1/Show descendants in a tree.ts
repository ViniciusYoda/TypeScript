const lis: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName('li');

for (const li of Array.from(lis)) {
  // Conta quantos <li> estão dentro deste <li>
  const descendantsCount: number = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  const firstChild = li.firstChild;
  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    firstChild.textContent += ` [${descendantsCount}]`;
  }
}
