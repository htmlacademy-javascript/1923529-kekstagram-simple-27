const descriptions = [
  'Отель Eden Хорватия',
  'Указатель Сходи на пляж',
  'Симиланские острова',
  'Девушка на пляже',
  'Тайский суп',
  'Черный матовый Maclaren 650S',
  'Сервировочные тарелки',
  'Сок',
  'Винтомоторный летательный аппарат',
  'Подставка для обуви',
  'Ауди RS5',
  'Суперфуд',
  'Котосуши',
  'Гигантские тапочки-роботы',
  'Земля',
  'Концерт',
  'Антикварный автомобиль',
  'Тапочки с фонариком',
  'Отель Long Beach',
  'Тайская курица в мультиварке',
  'Закат',
  'Краб',
  'Рок-концерт',
  'Спортивный внедорожник',
];

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

export const checkingStringLength = (string, length) => string.length <= length;

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

const makePhotoDescription = (i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

export const generationPhotos = () => {
  const photos = [];

  for (let i = 0; i < 25; i++) {
    photos.push(makePhotoDescription(i));
  }

  return photos;
};
