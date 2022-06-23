import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);


// Определение функции, дающее рандомное целое число
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }; 


    // Определение функции игры на четность
export const gcdGame = () => {
    console.log('Find the greatest common divisor of given numbers.');
  let user = 0;
    while (user < 3) {
    const randomNumber1 = getRandomInt(10);
    const randomNumber2 = getRandomInt(10);

    console.log('Question:', `${randomNumber1} ${randomNumber2}`);
    const answerUser = readlineSync.question('Your answer:');

    const gcd = (x, y) => {

      if (y > x) {
        return gcd(y, x);
      }
      if (!y) {
        return x;
      }
      return gcd(y, x % y);
    }
    const result = gcd(randomNumber1, randomNumber2);
    const a = result.toString()
    
    if (answerUser === a) {
      console.log('Correct')
      user += 1
    }
    else {
    return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was '${a}'.\nLet's try again, ${userName}!`);   
    }
  }
  if (user === 3) {
  return console.log(`Congratulations, ${userName}!`);
}
};