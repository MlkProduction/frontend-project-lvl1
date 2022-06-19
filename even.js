import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);


// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }; 

  // Определение функции игры на четность
export const evenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i++) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
  const answerUser = readlineSync.question('Your answer:');
if (number % 2 === 0 && answerUser === 'yes' || number % 2 !== 0 && answerUser === 'no') {
    return 'Correct';
}
if (number % 2 !== 0 && answerUser === 'yes')  {
    return "'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!"
}
}
console.log(`Congratulations, ${userName}!`);
};
