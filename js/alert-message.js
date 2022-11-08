import { onEscFormKeydown } from './form.js';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'white';
  alertContainer.style.color = 'black';
  alertContainer.style.textTransform = 'none';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

const openSuccess = () => {
  const successTemplate = document
    .querySelector('#success')
    .content.querySelector('.success');
  const successMessage = successTemplate.cloneNode(true);
  const successButton = successMessage.querySelector('.success__button');

  const onCloseSuccessClick = () => {
    successMessage.remove();
    removeHandler();
  };

  const onOutCloseClick = (evt) => {
    if (evt.target.matches('section')) {
      evt.preventDefault();
      onCloseSuccessClick();
    }
  };

  const onEscSuccessKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      onCloseSuccessClick();
    }
  };

  function removeHandler() {
    document.removeEventListener('click', onOutCloseClick);
    document.removeEventListener('keydown', onEscSuccessKeydown);
  }

  successButton.addEventListener('click', onCloseSuccessClick);
  document.addEventListener('click', onOutCloseClick);
  document.addEventListener('keydown', onEscSuccessKeydown);

  document.body.append(successMessage);
};

const openError = () => {
  const errorTemplate = document
    .querySelector('#error')
    .content.querySelector('.error');
  const errorMessage = errorTemplate.cloneNode(true);
  const errorButton = errorMessage.querySelector('.error__button');

  const onCloseErrorClick = () => {
    errorMessage.remove();
    setHandler();
  };

  const onOutCloseClick = (evt) => {
    if (evt.target.matches('section')) {
      evt.preventDefault();
      onCloseErrorClick();
    }
  };

  const onEscErrorKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      onCloseErrorClick();
    }
  };

  function setHandler() {
    document.removeEventListener('click', onOutCloseClick);
    document.removeEventListener('keydown', onEscErrorKeydown);
    document.addEventListener('keydown', onEscFormKeydown);
  }

  errorButton.addEventListener('click', onCloseErrorClick);
  document.addEventListener('click', onOutCloseClick);
  document.addEventListener('keydown', onEscErrorKeydown);
  document.removeEventListener('keydown', onEscFormKeydown);

  document.body.append(errorMessage);
};

export { showAlert, openSuccess, openError };
