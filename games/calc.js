import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const genRandOperator = () => {
  const arr = ['+', '-', '*'];
  const rand = () => Math.floor(Math.random() * arr.length);
  return arr[rand()];
};

const playCalcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(20);
    const num2 = getRandomInt(20);
    const operator = genRandOperator();
    let rightAnswer;
    if (operator === '+') {
      rightAnswer = num1 + num2;
    } else if (operator === '-') {
      rightAnswer = num1 - num2;
    } else {
      rightAnswer = num1 * num2;
    }

    console.log(`Question: ${num1} ${operator} ${num2}`);

    const usersAnswer = Number(readlineSync.question('Your answer: '));

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);

      if (uncorrectMessage) {
        return;
      }
    }
  }
  console.log(`Congratulations, ${usersName}!`);
};
export default playCalcGame;
