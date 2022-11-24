import runGame from '../index.js';
import getRandomInt from '../utils.js';

// eslint-disable-next-line operator-linebreak
const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
