import { imgUploadOverlay, imgUploadPreview, slider } from './form.js';

const effectsList = imgUploadOverlay.querySelector('.effects__list');
const effectLevelSlider = imgUploadOverlay.querySelector(
  '.effect-level__slider'
);
const effectLevelValue = imgUploadOverlay.querySelector('.effect-level__value');

noUiSlider.create(effectLevelSlider, {
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});

const createSlider = (MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });

  effectLevelSlider.noUiSlider.on('update', () => {
    effectLevelValue.value = effectLevelSlider.noUiSlider.get();
    imgUploadPreview.style.filter = `${EFFECT}(${effectLevelSlider.noUiSlider.get()}${UNIT_MEASURE})`;
  });
};

const onPhotoEffectChange = (evt) => {
  const target = evt.target;

  if (target && target.value === 'none') {
    imgUploadPreview.classList.add('effects__preview--none');
    imgUploadPreview.style.filter = '';
    slider.style.display = 'none';
  } else {
    imgUploadPreview.classList.remove('effects__preview--none');
    slider.style.display = 'block';
  }

  if (target && target.value === 'chrome') {
    imgUploadPreview.classList.add('effects__preview--chrome');

    const CHROME = {
      MIN: 0,
      MAX: 1,
      START: 1,
      STEP: 0.1,
      EFFECT: 'grayscale',
      UNIT_MEASURE: '',
    };

    const { MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE } = CHROME;

    createSlider(MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE);
  } else {
    imgUploadPreview.classList.remove('effects__preview--chrome');
  }

  if (target && target.value === 'sepia') {
    imgUploadPreview.classList.add('effects__preview--sepia');

    const SEPIA = {
      MIN: 0,
      MAX: 1,
      START: 1,
      STEP: 0.1,
      EFFECT: 'sepia',
      UNIT_MEASURE: '',
    };

    const { MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE } = SEPIA;

    createSlider(MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE);
  } else {
    imgUploadPreview.classList.remove('effects__preview--sepia');
  }

  if (target && target.value === 'marvin') {
    imgUploadPreview.classList.add('effects__preview--marvin');

    const MARVIN = {
      MIN: 0,
      MAX: 100,
      START: 100,
      STEP: 1,
      EFFECT: 'invert',
      UNIT_MEASURE: '%',
    };

    const { MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE } = MARVIN;

    createSlider(MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE);
  } else {
    imgUploadPreview.classList.remove('effects__preview--marvin');
  }

  if (target && target.value === 'phobos') {
    imgUploadPreview.classList.add('effects__preview--phobos');

    const PHOBOS = {
      MIN: 0,
      MAX: 3,
      START: 3,
      STEP: 0.1,
      EFFECT: 'blur',
      UNIT_MEASURE: 'px',
    };

    const { MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE } = PHOBOS;

    createSlider(MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE);
  } else {
    imgUploadPreview.classList.remove('effects__preview--phobos');
  }

  if (target && target.value === 'heat') {
    imgUploadPreview.classList.add('effects__preview--heat');

    const HEAT = {
      MIN: 1,
      MAX: 3,
      START: 3,
      STEP: 0.1,
      EFFECT: 'brightness',
      UNIT_MEASURE: '',
    };

    const { MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE } = HEAT;

    createSlider(MIN, MAX, START, STEP, EFFECT, UNIT_MEASURE);
  } else {
    imgUploadPreview.classList.remove('effects__preview--heat');
  }
};

effectsList.addEventListener('change', onPhotoEffectChange);
