import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const gallery = document.querySelector(`.gallery`);

const markup = galleryItems.reduce((acc, {preview,original,description}) => 
acc + `<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`, ``);

gallery.insertAdjacentHTML(`beforeend`,markup);

var lightbox = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: `250ms` });

console.log(galleryItems);
