import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const makeRound = () => {
  let startNumber = getRandomInt(1, 100);
  const multiplier = getRandomInt(2, 10);
  let i = 0;
  const arr = [];

  while (i < getRandomInt(5, 11)) {
    startNumber += multiplier;
    i += 1;
    arr.push(startNumber);
  }

  const correctAnswer = arr.splice(getRandomInt(2, 4), 1, '..').join('');
  const newArr = arr.join(' ').split(',');
  const question = `${newArr}`;
  return [question, correctAnswer];
};
export default () => {
  runGame(gameDescription, makeRound);
};
