import { getRandomInt, engine } from "../index.js";

const isPrime = (randomInt) => {
    if(randomInt < 2) {
        return false;
    };
    for(let i = 2; i <= randomInt / 2; i += 1) {
        if(randomInt % i === 0) {
            return false;
        }
    }
    return true;
};

const startPrime = () => {
    const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    const gameData = () => {
        const numOfQuestions = 3;
        const questions = [];
        const correctAnswers = [];
        for (let i = 0; i < numOfQuestions; i += 1) {
          const randomInt = getRandomInt(1, 50);
          questions.push(randomInt);
          const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';
          correctAnswers.push(correctAnswer);
        }
        return [questions, correctAnswers];
      };
    return engine(instruction, gameData());
};

export default startPrime;