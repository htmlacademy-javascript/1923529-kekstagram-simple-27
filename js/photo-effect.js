import { imgUploadOverlay, imgUploadPreview, slider } from './form.js';

const effectsList = imgUploadOverlay.querySelector('.effects__list');
const effectLevelSlider = imgUploadOverlay.querySelector(
  '.effect-level__slider'
);
const effectLevelValue = imgUploadOverlay.querySelector('.effect-level__value');

const EFFECT = {
  // params:[min, max, start, step, effect, unit]
  none: {
    name: 'none',
    className: 'effects__preview--none',
  },
  chrome: {
    name: 'chrome',
    className: 'effects__preview--chrome',
    params: [0, 1, 1, 0.1, 'grayscale', ''],
  },
  sepia: {
    name: 'sepia',
    className: 'effects__preview--sepia',
    params: [0, 1, 1, 0.1, 'sepia', ''],
  },
  marvin: {
    name: 'marvin',
    className: 'effects__preview--marvin',
    params: [0, 100, 100, 1, 'invert', '%'],
  },
  phobos: {
    name: 'phobos',
    className: 'effects__preview--phobos',
    params: [0, 3, 3, 0.1, 'blur', 'px'],
  },
  heat: {
    name: 'heat',
    className: 'effects__preview--heat',
    params: [1, 3, 3, 0.1, 'brightness', ''],
  },
};

noUiSlider.create(effectLevelSlider, {
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});

const createSlider = (min, max, start, step, effect, unit) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();
    imgUploadPreview.style.filter = `${effect}(${effectLevelSlider.noUiSlider.get()}${unit})`;
  });
};

const onPhotoEffectChange = (evt) => {
  const target = evt.target;

  if (target && target.value === EFFECT.none.name) {
    imgUploadPreview.classList.add(EFFECT.none.className);
    imgUploadPreview.style.filter = '';
    slider.style.display = 'none';
  } else {
    imgUploadPreview.classList.remove(EFFECT.none.className);
    slider.style.display = 'block';
  }

  if (target && target.value === EFFECT.chrome.name) {
    imgUploadPreview.classList.add(EFFECT.chrome.className);

    createSlider(...EFFECT.chrome.params);
  } else {
    imgUploadPreview.classList.remove(EFFECT.chrome.className);
  }

  if (target && target.value === EFFECT.sepia.name) {
    imgUploadPreview.classList.add(EFFECT.sepia.className);

    createSlider(...EFFECT.sepia.params);
  } else {
    imgUploadPreview.classList.remove(EFFECT.sepia.className);
  }

  if (target && target.value === EFFECT.marvin.name) {
    imgUploadPreview.classList.add(EFFECT.marvin.className);

    createSlider(...EFFECT.marvin.params);
  } else {
    imgUploadPreview.classList.remove(EFFECT.marvin.className);
  }

  if (target && target.value === EFFECT.phobos.name) {
    imgUploadPreview.classList.add(EFFECT.phobos.className);

    createSlider(...EFFECT.phobos.params);
  } else {
    imgUploadPreview.classList.remove(EFFECT.phobos.className);
  }

  if (target && target.value === EFFECT.heat.name) {
    imgUploadPreview.classList.add(EFFECT.heat.className);

    createSlider(...EFFECT.heat.params);
  } else {
    imgUploadPreview.classList.remove(EFFECT.heat.className);
  }
};

effectsList.addEventListener('change', onPhotoEffectChange);
