import readlineSync from 'readline-sync';

let name;
const welcome = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const engine = (instruction, [questions, correctAnswers]) => {
  welcome();

  console.log(instruction);

  const numOfCorrectAnswers = 3;
  for (let i = 0; i < numOfCorrectAnswers; i += 1) {
    const answer = readlineSync.question(`Question: ${questions[i]}\nYour answer: `);
    if (correctAnswers[i] === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers[i]}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export { getRandomInt, engine };
