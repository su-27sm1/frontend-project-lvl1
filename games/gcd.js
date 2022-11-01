import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const guessDivisor = () => {
  console.log('Find the greatest common divisor of given numbers.');

  for (let c = 0; c < 3; c += 1) {
    let num1 = getRandomInt(30) + 30;
    let num2 = getRandomInt(30) + 10;

    for (let p = 2; p <= num1 / 2; p += 1) {
      if (num1 % p === 0) {
        break;
      } else {
        num1 += 1;
      }
    }

    for (let d = 2; d <= num2 / 2; d += 1) {
      if (num2 % d === 0) {
        break;
      } else {
        num2 += 1;
      }
    }

    const divNum1 = [];
    const divNum2 = [];

    for (let i = num1; i > 1; i -= 1) {
      if (num1 % i === 0) {
        divNum1.push(i);
      }
    }

    for (let j = num2; j > 1; j -= 1) {
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

      if (uncorrectMessage) {
        return;
      }
    }
  }

  console.log(`Congratulations, ${usersName}!`);
};
export default guessDivisor;
