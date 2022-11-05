const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (a, b) => {
  if (typeof a !== 'number') {
    throw 'Параметр "a" не является числовым значением';
  }

  if (typeof b !== 'number') {
    throw 'Параметр "b" не является числовым значением';
  }

  if (a < 0) {
    throw 'Параметр "a" не может быть отрицательным числом';
  }

  if (b < 0) {
    throw 'Параметр "b "не может быть отрицательным числом';
  }

  if (!Number.isFinite(a)) {
    throw 'Параметр "a" не является конечным значением';
  }

  if (!Number.isFinite(b)) {
    throw 'Параметр "b" не является конечным значением';
  }

  if (Math.abs(b - a) < 1) {
    throw 'Нет целых чисел в диапазоне';
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  if (min >= 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return NaN;
};

const getRandomArrayElement = (elements) => {
  if (!Array.isArray(elements)) {
    return undefined;
  }

  if (elements.length === 0) {
    return undefined;
  }

  if (elements.length === 1) {
    return elements[0];
  }

  return elements[getRandomInteger(0, elements.length - 1)];
};

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

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isOutsideEvent = (evt) => evt.target.matches('section');

const openAlert = (type) => {
  const alertTemplate = document
    .querySelector(`#${type}`)
    .content.querySelector(`.${type}`);
  const alertMessage = alertTemplate.cloneNode(true);
  const alertButton = alertMessage.querySelector(`.${type}__button`);

  const onCloseMessageClick = () => {
    alertMessage.remove();
    removeHandler();
  };

  const onOutCloseClick = (evt) => {
    if (isOutsideEvent(evt)) {
      evt.preventDefault();
      alertMessage.remove();
      removeHandler();
    }
  };

  const onEscAlertKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      alertMessage.remove();
      removeHandler();
    }
  };

  function removeHandler() {
    document.removeEventListener('click', onOutCloseClick);
    document.removeEventListener('keydown', onEscAlertKeydown);
  }

  alertButton.addEventListener('click', onCloseMessageClick);
  document.addEventListener('click', onOutCloseClick);
  document.addEventListener('keydown', onEscAlertKeydown);

  document.body.append(alertMessage);
};

export { getRandomInteger, getRandomArrayElement, showAlert, openAlert };
