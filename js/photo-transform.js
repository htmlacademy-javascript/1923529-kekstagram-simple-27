import { imgUploadOverlay, imgUploadPreview } from './form.js';

const scaleControlSmaller = imgUploadOverlay.querySelector(
  '.scale__control--smaller'
);
const scaleControlBigger = imgUploadOverlay.querySelector(
  '.scale__control--bigger'
);
const scaleControlValue = imgUploadOverlay.querySelector(
  '.scale__control--value'
);

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_STEP = 25;

const onScaleMinusClick = () => {
  let downDifference;
  const currentValue = Number.parseFloat(scaleControlValue.value);

  if (!isNaN(currentValue)) {
    downDifference = currentValue - DEFAULT_SCALE_STEP;
  }

  if (currentValue === MIN_SCALE_VALUE) {
    return false;
  }

  scaleControlValue.value = `${downDifference}%`;

  imgUploadPreview.style.transform = `scale(${downDifference / 100})`;
};

const onScalePlusClick = () => {
  let bigDifference;
  const currentValue = Number.parseFloat(scaleControlValue.value);

  if (!isNaN(currentValue)) {
    bigDifference = currentValue + DEFAULT_SCALE_STEP;
  }

  if (currentValue === MAX_SCALE_VALUE) {
    return false;
  }

  scaleControlValue.value = `${bigDifference}%`;

  imgUploadPreview.style.transform = `scale(${bigDifference / 100})`;
};

scaleControlBigger.addEventListener('click', onScalePlusClick);
scaleControlSmaller.addEventListener('click', onScaleMinusClick);
