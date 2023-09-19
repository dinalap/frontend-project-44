import engine from '../index.js';
import getRandomInt from '../utils.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const index = getRandomInt(0, operations.length - 1);
  return operations[index];
};

const calculate = (randomOperation, firstRandomInt, secondRandomInt) => {
  switch (randomOperation) {
    case '+':
      return firstRandomInt + secondRandomInt;
    case '-':
      return firstRandomInt - secondRandomInt;
    case '*':
      return firstRandomInt * secondRandomInt;
    default:
      return Error('Something went wrong');
  }
};

/* const startCalc = () => {
  const instruction = 'What is the result of the expression?';

  const gameDataCalc = () => {
    const numOfQuestions = 3;
    const questions = [];
    const correctAnswers = [];
    for (let i = 0; i < numOfQuestions; i += 1) {
      const firstRandomInt = getRandomInt(1, 10);
      const secondRandomInt = getRandomInt(1, 10);
      const randomOperation = getRandomOperation();
      questions.push(`${firstRandomInt} ${randomOperation} ${secondRandomInt}`);

      const correctAnswer = calculate(randomOperation, firstRandomInt, secondRandomInt);
      correctAnswers.push(String(correctAnswer));
    }
    return [questions, correctAnswers];
  };
  return engine(instruction, gameDataCalc());
}; */
const generateRound = () => {
  const firstRandomInt = getRandomInt(1, 10);
  const secondRandomInt = getRandomInt(1, 10);
  const randomOperation = getRandomOperation();
  const question = `${firstRandomInt} ${randomOperation} ${secondRandomInt}`;
  const answer = String(calculate(randomOperation, firstRandomInt, secondRandomInt));
  return [question, answer];
};

const startCalc = () => {
  const instruction = 'What is the result of the expression?';

  engine(instruction, generateRound);
};
export default startCalc;
