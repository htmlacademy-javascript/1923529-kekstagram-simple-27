const pictures = document.querySelector('.pictures');

const createPhotos = (photos) => {
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

    pictureFragment.append(pictureLink);
  });

  pictures.append(pictureFragment);
};

export { createPhotos };
