import { getRandomInt }  from '../randomnum.js';
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);



//Определение функции


export const primeNumber = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
   
    let user = 0;
while (user < 3) {
    let prime = 'yes';
    const randomNumber = getRandomInt(1, 100);
    
for (let i = 2; i < randomNumber; i++) {
if (randomNumber % i === 0) {
 prime = 'no';
}
}

console.log(`Question: ${randomNumber}`);
 const answerUser = readlineSync.question('Your answer: ');

if (prime === answerUser) {
    user += 1;
    console.log('Correct');

}
else {
    return console.log(`"${answerUser}" is wrong answer ;(. Correct answer was '${prime}'.\nLet's try again, ${userName}!`);   
}
}
if (user === 3) {
    return console.log(`Congratulations, ${userName}!`);
}
};

