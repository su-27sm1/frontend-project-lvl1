import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const guessProgression = () => {
  console.log('What number is missing in the progression?');

  for (let c = 0; c < 3; c += 1) {
    const randomInt1 = (min, max) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Math.floor(Math.random() * (max - min) + min);

    let startNumber = getRandomInt(100);
    const multiplier = randomInt1(2, 10);

    let i = 0;
    const arr = [];

    while (i < randomInt1(9, 11)) {
      startNumber += multiplier;
      i += 1;
      arr.push(startNumber);
    }
    const removed = arr.splice(randomInt1(2, 8), 1, '..').join('');

    console.log(`Question: ${arr}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === removed) {
      console.log('Correct!');
    } else {
      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${removed}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);

      if (uncorrectMessage) {
        return;
      }
    }
  }
  console.log(`Congratulations, ${usersName}!`);
};
export default guessProgression;
