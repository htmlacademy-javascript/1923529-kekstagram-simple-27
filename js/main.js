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

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0 || max <= min) {
    return NaN;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line no-unused-vars
const checkStringLenght = (string, length) => string.length <= length;

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const makePhotoDescription = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

// eslint-disable-next-line no-unused-vars
const generationPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(makePhotoDescription(i));
  }

  return photos;
};
