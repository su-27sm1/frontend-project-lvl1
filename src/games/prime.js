import runGame from '../index.js';
import getRandomInt from '../utils.js';

// eslint-disable-next-line operator-linebreak
const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const num = getRandomInt(1, 100);
  const question = num;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
