
import { getRandomInt }  from '../randomnum.js';
import gameLogic from '../index.js';

  
//  Опеределение функции
const description = 'What number is missing in the progression?';

const arrayLength = 10;

export const gamesEngine = () => {

  const num = getRandomInt(1, 10);
  const array = [];

  for (let i = 1; i <= arrayLength; i += 1) {
    const step = num * i;
    array.push(step);
  }

  const hiddenNumber = getRandomInt(1, arrayLength - 1);
  const answer = String(array[hiddenNumber]);
  array[hiddenNumber] = '..';
  const forQuestion = array.join('  ');
  const question = forQuestion;
  
  return { answer, question };
};
export default () => gameLogic(description, gamesEngine);
