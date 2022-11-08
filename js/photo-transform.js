import { overlay, preview } from './form.js';

const smallerButton = overlay.querySelector('.scale__control--smaller');
const biggerButton = overlay.querySelector('.scale__control--bigger');
const controlValue = overlay.querySelector('.scale__control--value');

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_STEP = 25;

const onScaleMinusClick = () => {
  let downDifference;
  const currentValue = Number.parseFloat(controlValue.value);

  if (!isNaN(currentValue)) {
    downDifference = currentValue - DEFAULT_SCALE_STEP;
  }

  if (currentValue === MIN_SCALE_VALUE) {
    return false;
  }

  controlValue.value = `${downDifference}%`;

  preview.style.transform = `scale(${downDifference / 100})`;
};

const onScalePlusClick = () => {
  let bigDifference;
  const currentValue = Number.parseFloat(controlValue.value);

  if (!isNaN(currentValue)) {
    bigDifference = currentValue + DEFAULT_SCALE_STEP;
  }

  if (currentValue === MAX_SCALE_VALUE) {
    return false;
  }

  controlValue.value = `${bigDifference}%`;

  preview.style.transform = `scale(${bigDifference / 100})`;
};

biggerButton.addEventListener('click', onScalePlusClick);
smallerButton.addEventListener('click', onScaleMinusClick);
