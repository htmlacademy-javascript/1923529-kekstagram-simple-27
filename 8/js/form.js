import { sendData } from './api.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadForm = document.querySelector('#upload-select-image');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const submitButton = imgUploadOverlay.querySelector('#upload-submit');
const imgUploadPreview = imgUploadOverlay.querySelector(
  '.img-upload__preview img'
);
const slider = imgUploadOverlay.querySelector('.img-upload__effect-level');

const onContentLoadChange = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  slider.style.display = 'none';
  imgUploadPreview.style.filter = '';
  document.addEventListener('keydown', onEscFormKeydown);
};

const onCloseFormClick = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscFormKeydown);
  imgUploadForm.reset();
  imgUploadPreview.style.transform = '';
  imgUploadPreview.className = '';
};

function onEscFormKeydown(evt) {
  if (evt.key === 'Escape') {
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

imgUploadForm.addEventListener('submit', sendData);
uploadFile.addEventListener('click', onContentLoadChange);
uploadCancel.addEventListener('click', onCloseFormClick);

export {
  imgUploadOverlay,
  imgUploadPreview,
  slider,
  onCloseFormClick,
  blockSubmitButton,
  unblockSubmitButton,
};
