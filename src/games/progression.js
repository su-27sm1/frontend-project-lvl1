/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (startNumber, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    startNumber += progressionStep;
    progression.push(startNumber);
  }
  return progression;
};

const makeRound = () => {
  const progressionLength = getRandomInt(5, 11);
  const startNumber = getRandomInt(1, 100);
  const progressionStep = getRandomInt(2, 10);
  const madeProgression = getProgression(
    startNumber,
    progressionStep,
    progressionLength
  );
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
