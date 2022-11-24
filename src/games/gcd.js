import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const divNum1 = [];
  const divNum2 = [];

  for (let i = num1; i > 0; i -= 1) {
    if (num1 % i === 0) {
      divNum1.push(i);
    }
  }

  for (let j = num2; j > 0; j -= 1) {
    if (num2 % j === 0) {
      divNum2.push(j);
    }
  }

  const intersection = divNum1.filter((x) => divNum2.includes(x));
  const question = `${num1} ${num2}`;
  const correctAnswer = String(intersection[0]);
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
