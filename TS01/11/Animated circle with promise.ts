// TypeScript code starts here
function go(): void {
    showCircle(150, 150, 100).then((div: HTMLDivElement) => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
}

function showCircle(cx: number, cy: number, radius: number): Promise<HTMLDivElement> {
    let div: HTMLDivElement = document.createElement('div');
    div.style.width = '0';
    div.style.height = '0';
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            const handler = function (this: HTMLDivElement, ev: TransitionEvent): void {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            };

            div.addEventListener('transitionend', handler);
        }, 0);
    });
}
// TypeScript code ends here