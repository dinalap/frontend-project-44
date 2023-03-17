import readlineSync from 'readline-sync';

let name;
const userName = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
};

userName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const evenOrNot = () => {
  let randomInt;
  let numOfCorrectAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    randomInt = getRandomInt(1, 50);
    const answer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
    if ((randomInt % 2 === 0 && answer === 'yes') || (randomInt % 2 !== 0 && answer === 'no')) {
      numOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      const correctAnswer = (randomInt % 2 === 0) ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      i = 3;
    }
  }
  numOfCorrectAnswers === 3 ? console.log(`Congratulations, ${name}!`) : evenOrNot();
};

evenOrNot();
