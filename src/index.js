import readlineSync from 'readline-sync';

const roundsCount = 3;

const mainPlayGame = (gameDescription, roundGenerateGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = roundGenerateGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        // eslint-disable-next-line comma-dangle
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default mainPlayGame;
