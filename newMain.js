// import Card from './card.js';
import Card, { AmazingCard } from './card.js';

const appContainer = document.querySelector('.container');
const startBtn = document.querySelector('.setup-btn');
const startBtnImages = document.querySelector('.setup-btn-images');
let firstCard = null;
let secondCard = null;
const pairsCount = 4;
const successedCard = [];

// generate array with (count) pairs numbers
function createNumbersArray(count, array) {
  for (let i = 1; i <= (count * 2); i++) {
    array.push(Number(i));
    array.push(Number(i));
  }
  return array;
}

// shuffle array with numbers
function shuffle(arr) {
  for (let i = (arr.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// return shuffled array with count pairs numbers
function getShuffleArray(count) {
  const array = [];
  createNumbersArray(count, array);
  shuffle(array);
  return array;
}

function flip(card) {
  if (firstCard !== null && secondCard !== null) {
    if (firstCard.number !== secondCard.number) {
      firstCard.open = false;
      secondCard.open = false;
      firstCard = null;
      secondCard = null;
    }
  }

  if (firstCard == null) {
    firstCard = card;
  } else if (secondCard == null) {
    secondCard = card;
  }

  if (firstCard !== null && secondCard !== null) {
    if (firstCard.number === secondCard.number) {
      firstCard.success = true;
      secondCard.success = true;
      successedCard.push(firstCard);
      successedCard.push(secondCard);
      firstCard = null;
      secondCard = null;
    }
  }
  if (successedCard.length === (pairsCount * 4)) {
    alert('Вы победили!');
  }
}

function createGameArea(array) {
  for (const cardNumber of array) {
    const card = new Card(appContainer, cardNumber, flip);
    card.number = cardNumber;
  }
}

function createGameAreaForAmazingCard(array) {
  for (const cardNumber of array) {
    const card = new AmazingCard(appContainer, cardNumber, flip);
    card.number = cardNumber;
    const cardImg = document.createElement('img');
    cardImg.src = `${cardNumber}.svg`;
    card.card.textContent = '';
    card.card.append(cardImg);
  }
}

function clearGameArea() {
  appContainer.textContent = '';
}

function startGame() {
  clearGameArea();
  successedCard.length = 0;
  const cardsNumberArray = getShuffleArray(pairsCount);
  createGameArea(cardsNumberArray);
}

function startGameWithAmazingCard() {
  clearGameArea();
  successedCard.length = 0;
  const cardsNumberArray = getShuffleArray(pairsCount);
  createGameAreaForAmazingCard(cardsNumberArray);
}

startBtn.addEventListener('click', startGame);
startBtnImages.addEventListener('click', startGameWithAmazingCard);
