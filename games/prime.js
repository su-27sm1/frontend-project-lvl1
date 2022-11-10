import readlineSync from 'readline-sync';

import { askUsersName, getRandomInt } from '../src/index.js';

const usersName = askUsersName();

const guessPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let c = 0; c < 3; c += 1) {
    const num = getRandomInt(100);

    console.log(`Question: ${num}`);
    const usersAnswer = readlineSync.question('Your answer: ');

    const isPrime = () => {
      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    isPrime(num);

    const meaning1 = isPrime() === true && usersAnswer === 'yes';
    const meaning2 = isPrime() === false && usersAnswer === 'no';
    if (meaning1 === true || meaning2 === true) {
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

export default guessPrime;
