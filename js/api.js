import { createPhotos } from './create-photos.js';
import { openSuccess, openError, showAlert } from './popup-alert.js';
import {
  onCloseFormClick,
  blockSubmitButton,
  unblockSubmitButton,
} from './form.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then(createPhotos)
    .catch(() => {
      showAlert(
        'Не удалось загрузить посты. Попробуйте перезагрузить страницу'
      );
    });
};

const sendData = (evt) => {
  const formData = new FormData(evt.target);

  evt.preventDefault();
  blockSubmitButton();

  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        onCloseFormClick();
        openSuccess();
      } else {
        throw new Error('Ошибка отправки данных');
      }
    })
    .catch(() => {
      openError();
    })
    .finally(() => {
      unblockSubmitButton();
    });
};

export { getData, sendData };
