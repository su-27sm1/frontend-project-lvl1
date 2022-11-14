import readlineSync from 'readline-sync';

import askUsersName from '../src/index.js';
import getRandomInt from '../src/utils.js';

const usersName = askUsersName();

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 100);

    console.log(`Question: ${num}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const meaning1 = num % 2 === 0 && usersAnswer === 'yes';
    const meaning2 = num % 2 !== 0 && usersAnswer === 'no';
    if (meaning1 || meaning2) {
      console.log('Correct!');
    } else {
      const rightAnswer = usersAnswer === 'yes' ? 'no' : 'yes';

      const uncorrectMessage = `${usersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${usersName}!`;
      console.log(uncorrectMessage);
      return;
    }
  }
  console.log(`Congratulations, ${usersName}!`);
};
export default playEvenGame;
