import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  let startNumber = getRandomInt(1, 100);
  const progressionStep = getRandomInt(2, 10);
  let progressionLength = 0;
  const progression = [];

  while (progressionLength < getRandomInt(5, 11)) {
    startNumber += progressionStep;
    progressionLength += 1;
    progression.push(startNumber);
  }
  return progression;
};

const makeRound = () => {
  const madeProgression = getProgression();
  const correctAnswer = madeProgression
    .splice(getRandomInt(2, 4), 1, '..')
    .join('');
  const resultProgression = madeProgression.join(' ').split(',');
  const question = `${resultProgression}`;
  return [question, correctAnswer];
};

export default () => {
  runGame(gameDescription, makeRound);
};
