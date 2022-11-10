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
const onClick = e => {
  e.preventDefault();
  if (e.target.classList.contains(".gallery")) return;
  const src = e.target.dataset.source;
  const instance = basicLightbox.create(`
		<img src="${src}">
	`, {
    onShow: () => window.addEventListener("keydown", onExitEsc),
    onClose: () => window.removeEventListener("keydown", onExitEsc)
  });
  const onExitEsc = e => {
    if (e.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}

mainDivForGalleryItems.insertAdjacentHTML("beforeend", imagesMarkup);
mainDivForGalleryItems.addEventListener("click", onClick);