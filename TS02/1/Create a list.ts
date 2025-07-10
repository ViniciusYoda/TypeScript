const ul: HTMLUListElement = document.createElement('ul');
document.body.append(ul);

while (true) {
  const data: string | null = prompt("Enter the text for the list item", "");

  if (!data) {
    break;
  }

  const li: HTMLLIElement = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
