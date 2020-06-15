import cardsController from './controller/cards.js';
import cardByNameController from './controller/cardByName.js';
import cardDetailController from './controller/cardDetail.js';
import cardByTypeController from './controller/cardByType.js';

export const cards = {
  hash: '#cards',
  init: cardsController
};

export const cardByName = {
  hash: '#cardByName',
  init: cardByNameController
};

export const cardDetail = {
  hash: '#cardDetail',
  init: cardDetailController
};

export const cardType = {
  hash: '#cardType',
  init: cardByTypeController
};
