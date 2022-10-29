const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadPreview = imgUploadOverlay.querySelector(
  '.img-upload__preview img'
);
const slider = imgUploadOverlay.querySelector('.img-upload__effect-level');

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
    uploadFile.value = '';
    imgUploadPreview.style.transform = '';
    imgUploadPreview.classList = '';
  }
};

const onContentLoadChange = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  slider.style.display = 'none';
  imgUploadPreview.style.filter = '';
  document.addEventListener('keydown', onEscKeydown);
};

const onCloseFormClick = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  uploadFile.value = '';
  imgUploadPreview.style.transform = '';
  imgUploadPreview.classList = '';
};

uploadFile.addEventListener('click', onContentLoadChange);
uploadCancel.addEventListener('click', onCloseFormClick);

export { imgUploadOverlay, imgUploadPreview, slider };
