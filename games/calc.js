import readlineSync from 'readline-sync';

const askUsersName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const usersName = askUsersName();
const getRandomInt = (max) => Math.floor(Math.random() * max);

const genRandOperator = () => {
  const arr = ['+', '-', '*'];
  const rand = () => Math.floor(Math.random() * arr.length);
  return arr[rand()];
};

const playCalcGame = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(99);
    const num2 = getRandomInt(99);
    const operator = genRandOperator();
    const rightAnswer = eval(`${num1} ${operator} ${num2}`);

    console.log(`Question: ${num1} ${operator} ${num2}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer == rightAnswer) {
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
