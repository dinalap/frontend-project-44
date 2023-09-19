import engine from '../index.js';
import getRandomInt from '../utils.js';

const getRandomRow = () => {
  const startInt = getRandomInt(0, 10);
  const step = getRandomInt(1, 9);
  const row = [startInt];
  let result = startInt;
  for (let i = 0; i <= 8; i += 1) {
    result += step;
    row.push(result);
  }
  const index = getRandomInt(0, 9);
  const hiddenNum = row[index];
  row[index] = '..';
  return [row.join(' '), String(hiddenNum)];
};

/* const startProgression = () => {
  const instruction = 'What number is missing in the progression?';

  const gameDataProgr = () => {
    const numOfQuestions = 3;
    const questions = [];
    const correctAnswers = [];
    for (let i = 0; i < numOfQuestions; i += 1) {
      const [randomRow, correctAnswer] = getRandomRow();
      questions.push(randomRow);

      correctAnswers.push(String(correctAnswer));
    }
    return [questions, correctAnswers];
  };

  return engine(instruction, gameDataProgr());
}; */

const generateRound = () => {
  const [question, answer] = getRandomRow();
  return [question, answer];
};

const startProgression = () => {
  const instruction = 'What number is missing in the progression?';

  engine(instruction, generateRound);
};
export default startProgression;
