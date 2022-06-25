
import { getRandomInt }  from '../randomnum.js';
import gamesBrain from '../index.js';

  
//  Опеределение функции
const description = 'What number is missing in the progression?';

const progressionLength = 10;

export const gamesProgression = () => {
  const first = getRandomInt(1, 10);
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    const current = first * i;
    progression.push(current);
  }
  const hiddenNumberIndex = getRandomInt(1, progressionLength - 1);
  const answer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join('  ');
  return { answer, question };
};
export default () => gamesBrain(description, gamesProgression);
