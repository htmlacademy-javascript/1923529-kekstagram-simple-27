import { getRandomInteger, getRandomArrayElement } from './util.js';

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
  likes: getRandomInteger(15, 200),
  comments: getRandomInteger(0, 200),
});

const generationPhotos = () => {
  const photos = [];

  for (let i = 0; i < 25; i++) {
    photos.push(makePhotoDescription(i));
  }

  return photos;
};

export { generationPhotos };
