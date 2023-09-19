import readlineSync from 'readline-sync';
import welcome from './cli.js';

/* const engine = (instruction, [questions, correctAnswers]) => {
  const name = welcome();

  console.log(instruction);

  const numOfCorrectAnswers = 3;
  for (let i = 0; i < numOfCorrectAnswers; i += 1) {
    const answer = readlineSync.question(`Question: ${questions[i]}\nYour answer: `);
    if (correctAnswers[i] === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(.
      Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
*/
const engine = (instruction, generateRound) => {
  const name = welcome();

  console.log(instruction);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default engine;
