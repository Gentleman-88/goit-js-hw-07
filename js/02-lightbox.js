import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function galleryMarkup(items) {
    return items.map((item) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
    ).join("");
};

const addGalleryMarkup = galleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", addGalleryMarkup);

gallery.addEventListener('click', openImage);

function openImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
    var lightbox = new SimpleLightbox('.gallery a', {});
};

