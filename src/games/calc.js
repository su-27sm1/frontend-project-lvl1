import runGame from '../index.js';
import getRandomInt from '../utils.js';

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const getOperatorExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const gameDescription = 'What is the result of the expression?';

const makeRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getOperatorExpression(num1, operator, num2));
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
