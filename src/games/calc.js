import runGame from '../index.js';
import getRandomInt from '../utils.js';

const genRandOperator = () => {
  const arr = ['+', '-', '*'];
  const rand = () => getRandomInt(0, 2);
  return arr[rand()];
};

const gameDescription = 'What is the result of the expression?';

const makeRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = genRandOperator();
  const question = `${num1} ${operator} ${num2}`;
  let result = 0;

  if (operator === '+') {
    result = String(num1 + num2);
  } else if (operator === '-') {
    result = String(num1 - num2);
  } else {
    result = String(num1 * num2);
  }

  const correctAnswer = result;

  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
