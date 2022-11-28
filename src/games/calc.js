import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, 2)];
};

const gameDescription = 'What is the result of the expression?';

const makeRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandOperator();

  const getOperatorExpression = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
        break;
    }
    return String(result);
  };

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = getOperatorExpression(num1, num2, operator);

  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
