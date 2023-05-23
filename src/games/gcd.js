import { getRandomInt, engine } from '../index.js';

const getCommonDivisor = (firstRandomInt, secondRandomInt) => {
  let x = firstRandomInt < secondRandomInt ? firstRandomInt : secondRandomInt;
  for (; x >= 1; x -= 1) {
    if ((firstRandomInt % x === 0) && (secondRandomInt % x === 0)) {
      return x;
    }
  }
};

const startGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const gameDataGcd = () => {
    const questions = [];
    const correctAnswers = [];
    const numOfQuestions = 3;
    for (let i = 0; i < numOfQuestions; i += 1) {
      const firstRandomInt = getRandomInt(1, 20);
      const secondRandomInt = getRandomInt(1, 20);

      questions.push(`${firstRandomInt} ${secondRandomInt}`);

      const correctAnswer = getCommonDivisor(firstRandomInt, secondRandomInt);
      correctAnswers.push(String(correctAnswer));
    }
    return [questions, correctAnswers];
  };

  return engine(instruction, gameDataGcd());
};

export default startGcd;
