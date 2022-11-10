import { sendData } from './api.js';
import { isEscapeKey } from './util.js';

const overlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('#upload-select-image');
const uploadFile = document.querySelector('#upload-file');
const closeCansel = document.querySelector('#upload-cancel');
const submitButton = overlay.querySelector('#upload-submit');
const preview = overlay.querySelector('.img-upload__preview img');
const slider = overlay.querySelector('.img-upload__effect-level');

const onContentLoadChange = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  slider.style.display = 'none';
  preview.style.filter = '';
  document.addEventListener('keydown', onEscFormKeydown);
  preview.src = URL.createObjectURL(uploadFile.files[0]);
};

const onCloseFormClick = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscFormKeydown);
  form.reset();
  preview.style.transform = '';
  preview.className = '';
};

function onEscFormKeydown(evt) {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    onCloseFormClick();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

form.addEventListener('submit', sendData);
uploadFile.addEventListener('change', onContentLoadChange);
closeCansel.addEventListener('click', onCloseFormClick);

export {
  overlay,
  preview,
  slider,
  onCloseFormClick,
  blockSubmitButton,
  unblockSubmitButton,
  onEscFormKeydown,
};
