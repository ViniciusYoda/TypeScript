const div: HTMLDivElement = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// É necessário inserir no DOM para que as medidas sejam calculadas corretamente
document.body.append(div);

const scrollWidth: number = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);
