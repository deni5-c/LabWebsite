const galleryItems = document.querySelectorAll('.gallery-1');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const lastChild = item.lastElementChild;
        const firstOfLast = lastChild.firstElementChild; 
        const lastOfLast = lastChild.lastElementChild;

        firstOfLast.classList.remove('scale-0');
        firstOfLast.classList.add('scale-100');
        lastOfLast.classList.remove('scale-0');
        lastOfLast.classList.add('scale-100');
    });
});

galleryItems.forEach(item => {
    item.addEventListener('mouseout', () => {
        const lastChild = item.lastElementChild;
        const firstOfLast = lastChild.firstElementChild; 
        const lastOfLast = lastChild.lastElementChild;

        firstOfLast.classList.add('scale-0');
        firstOfLast.classList.remove('scale-100');
        lastOfLast.classList.add('scale-0');
        lastOfLast.classList.remove('scale-100');
    });
});
