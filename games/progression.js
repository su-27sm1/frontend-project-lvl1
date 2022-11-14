import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const playProgressionGame = () => {
  console.log('What number is missing in the progression?');

  for (let c = 0; c < 3; c += 1) {
    const randomInt1 = (min, max) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Math.floor(Math.random() * (max - min) + min);

    let startNumber = getRandomInt(100);
    const multiplier = randomInt1(2, 10);

    let i = 0;
    const arr = [];

    while (i < randomInt1(5, 11)) {
      startNumber += multiplier;
      i += 1;
      arr.push(startNumber);
    }
    const rightAnswer = arr.splice(randomInt1(2, 4), 1, '..').join('');
    const newArr = arr.join(' ').split(',');
    console.log(`Question: ${newArr}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);
      return;
    }
  }
  console.log(`Congratulations, ${usersName}!`);
};
export default playProgressionGame;
