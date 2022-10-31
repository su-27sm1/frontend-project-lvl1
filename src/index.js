import readlineSync from 'readline-sync';

export const askUsersName = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (max) => Math.floor(Math.random() * max);
