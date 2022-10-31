import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const playGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(99);

    console.log(`Question: ${num}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const meaning1 = num % 2 === 0 && usersAnswer === 'yes';
    const meaning2 = num % 2 !== 0 && usersAnswer === 'no';
    if (meaning1 === true || meaning2 === true) {
      console.log('Correct!');
    } else {
      const oppositeAnswer = usersAnswer === 'yes' ? 'no' : 'yes';

      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${oppositeAnswer}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);

      if (uncorrectMessage) {
        return;
      }
    }
  }
  console.log(`Congratulations, ${usersName}!`);
};
export default playGame;
