import { galleryItems } from './gallery-items.js';
// Change code below this line
const mainDivForGalleryItems = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
function createItemsMarkup(item) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
        })
        .join("");
}
function onClick(e) {
    e.preventDefault();
    if (e.target.classList.contains(".gallery")) return;
    const src = e.target.dataset.source;
    basicLightbox.create(`
		<img src="${src}">
	`).show();
}

mainDivForGalleryItems.insertAdjacentHTML("beforeend", imagesMarkup);
mainDivForGalleryItems.addEventListener("click", onClick);