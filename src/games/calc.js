import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? : ');
console.log(`Hello, ${userName}!`);


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }; 
export const randomNumbers = () => {
console.log('What is the result of the expression?')
for (let i = 0; i < 3; i += 1) {



   
  const randomNumber1 = getRandomInt(100);
  const randomNumber2 = getRandomInt(100);
const randomOperator = ['+', '-', '*'];
const operator = randomOperator[getRandomInt(3)];
const question = `${randomNumber1} ${operator} ${randomNumber2}`;
let result = 0;
switch (operator) {
case '+':
   result = randomNumber1 + randomNumber2;
   break;
case '-':
   result = randomNumber1 - randomNumber2;
   break;
case '*':
   result = randomNumber1 * randomNumber2;
}
const again = result.toString();
    console.log('Question:', question);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === again) {
    console.log('Correct!');
    }
    else { 
    return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${userName}!`);
    }
}
console.log(`Congratulations, ${userName}!`);
};