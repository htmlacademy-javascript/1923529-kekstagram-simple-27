import { getRandomInteger, getRandomArrayElement } from './util.js';

const PHOTO = 25;

const LIKES = {
  min: 15,
  max: 200,
};

const COMMENTS = {
  min: 0,
  max: 200,
};

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

const makePhotoDescription = (i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(LIKES.min, LIKES.max),
  comments: getRandomInteger(COMMENTS.min, COMMENTS.max),
});

const generationPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTO; i++) {
    photos.push(makePhotoDescription(i));
  }

  return photos;
};

export { generationPhotos };
