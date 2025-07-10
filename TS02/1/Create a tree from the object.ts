const data: Record<string, any> = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },
  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

function createTree(container: HTMLElement, obj: Record<string, any>): void {
  const treeDom = createTreeDom(obj);
  if (treeDom) {
    container.append(treeDom);
  }
}

function createTreeDom(obj: Record<string, any>): HTMLUListElement | undefined {
  if (!Object.keys(obj).length) return;

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');
    li.innerHTML = key;

    const childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

const container = document.getElementById('container');
if (container) {
  createTree(container, data);
}
