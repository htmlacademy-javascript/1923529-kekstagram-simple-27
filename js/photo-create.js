import { generationPhotos } from './data.js';

const pictures = document.querySelector('.pictures');
const photos = generationPhotos();

const createPhotos = () => {
  const picture = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureLink = picture.cloneNode(true);

    pictureLink.querySelector('.picture__img').src = photo.url;
    pictureLink.querySelector('.picture__likes').textContent = photo.likes;
    pictureLink.querySelector('.picture__comments').textContent =
      photo.comments;

    pictureFragment.appendChild(pictureLink);
  });

  pictures.appendChild(pictureFragment);
};

export { createPhotos };
