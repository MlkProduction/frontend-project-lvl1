import { getRandomInt } from '../randomnum.js';
import gameLogic from '../index.js';
// Определение функции
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // условия
const primeNumber = (num) => {
    for (let i = 2; i < num; i++) {
if (num % i === 0) {
 return false;
}
}
return num > 1;
};
export const gamesEngine = () => { 
    const forQuestion = getRandomInt(1, 100);
    const question = forQuestion;
    const answer = primeNumber(question) ? 'yes' : 'no';
    return { answer, question };
};
export default () => gameLogic(description, gamesEngine);
