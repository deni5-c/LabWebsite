const galleryItems = document.querySelectorAll('.container-gallery');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const lastChild = item.lastElementChild;
        const lastOfLast = lastChild.lastElementChild;

        // Înlătură clasa 'h-28' și adaugă clasa 'h-full'
        lastChild.classList.remove('h-28');
        lastChild.classList.add('h-full');

        // Așteaptă 100ms și înlătură clasa 'hidden' și modifică stilurile pentru a face vizibil elementul
        setTimeout(() => {
            lastOfLast.classList.remove('hidden');
            setTimeout(() => {
                lastOfLast.classList.remove('bottom-0');
                lastOfLast.style.top = '50%';
            }, 100);
        }, 100);
    });
});

galleryItems.forEach(item => {
    item.addEventListener('mouseout', () => {
        const lastChild = item.lastElementChild;
        const lastOfLast = lastChild.lastElementChild;

        lastChild.classList.add('h-28');
        lastChild.classList.remove('h-full');

        setTimeout(() => {
            lastOfLast.classList.add('hidden');
            setTimeout(() => {
                lastOfLast.classList.add('bottom-0');
            }, 100);
        }, 100);
    });
});

function openMinecraftThumbnails() {
    window.location.href = "minecraft_thumbnails.html";
}
function openMinecraftHardcoreThumbnails() {
    window.location.href = "minecraft_thumbnails.html";
}
function openHorrorThumbnails() {
    window.location.href = "minecraft_thumbnails.html";
}
function openVlogThumbnails() {
    window.location.href = "minecraft_thumbnails.html";
}
function openPhotoEditing() {
    window.location.href = "minecraft_thumbnails.html";
}
function openCustomArt() {
    window.location.href = "minecraft_thumbnails.html";
}


