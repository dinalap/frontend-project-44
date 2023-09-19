import engine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

/* const startEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameDataEven = () => {
    const numOfQuestions = 3;
    const questions = [];
    const correctAnswers = [];
    for (let i = 0; i < numOfQuestions; i += 1) {
      const randomInt = getRandomInt(1, 50);
      questions.push(randomInt);
      const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
      correctAnswers.push(correctAnswer);
    }
    return [questions, correctAnswers];
  };
  return engine(instruction, gameDataEven());
}; */
const generateRound = () => {
  const question = getRandomInt(1, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  engine(instruction, generateRound);
};

export default startEven;
