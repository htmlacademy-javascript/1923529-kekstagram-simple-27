import { createPhotos } from './photo-create.js';
import { openAlert, showAlert } from './util.js';
import {
  onCloseFormClick,
  blockSubmitButton,
  unblockSubmitButton,
} from './form.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      createPhotos(photos);
    })
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

  fetch('https://27.javascript.pages.academy/kekstagram-simpl', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        onCloseFormClick();
        unblockSubmitButton();
        openAlert('success');
      } else {
        unblockSubmitButton();
        openAlert('error');
      }
    })
    .catch(() => {
      unblockSubmitButton();
      openAlert('error');
    });
};

export { getData, sendData };
