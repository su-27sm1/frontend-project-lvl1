import readlineSync from 'readline-sync';

import askUsersName from '../index.js';
import getRandomInt from '../utils.js';

const usersName = askUsersName();

const playDivisorGame = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let c = 0; c < 3; c += 1) {
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
    console.log(`Question: ${num1} ${num2}`);
    const usersAnswer = Number(readlineSync.question('Your answer: '));

    if (usersAnswer === intersection[0]) {
      console.log('Correct!');
    } else {
      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${intersection[0]}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);
      return;
    }
  }

  console.log(`Congratulations, ${usersName}!`);
};
export default playDivisorGame;
