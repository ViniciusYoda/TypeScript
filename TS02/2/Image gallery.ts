const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg') as HTMLImageElement | null;

if (thumbs && largeImg) {
    thumbs.onclick = function (event: MouseEvent): void {
        const target = event.target as HTMLElement;
        const thumbnail = target.closest('a') as HTMLAnchorElement | null;

        if (!thumbnail) return;

        showThumbnail(largeImg, thumbnail.href, thumbnail.title);
        event.preventDefault();
    };

    function showThumbnail(img: HTMLImageElement, href: string, title: string): void {
        img.src = href;
        img.alt = title;
    }

}
