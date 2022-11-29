import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (startNumber, progressionStep) => {
  let progressionLength = 0;
  const progression = [];

  while (progressionLength < getRandomInt(5, 11)) {
    // eslint-disable-next-line no-param-reassign
    startNumber += progressionStep;
    progressionLength += 1;
    progression.push(startNumber);
  }
  return progression;
};

const makeRound = () => {
  const startNumber = getRandomInt(1, 100);
  const progressionStep = getRandomInt(2, 10);
  const madeProgression = getProgression(startNumber, progressionStep);
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
