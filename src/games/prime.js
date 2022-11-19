import mainPlayGame from '../index.js';

import getRandomInt from '../utils.js';

// eslint-disable-next-line operator-linebreak
const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundGenerateGame = () => {
  const num = getRandomInt(1, 100);

  const question = num;

  const isPrime = () => {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const correctAnswer = isPrime(num);
  return [question, correctAnswer];
};

export default mainPlayGame(gameDescription, roundGenerateGame);
