import { getRandomInt }  from '../randomnum.js';
import gameLogic from '../index.js';


const description = 'Find the greatest common divisor of given numbers.';
   
    const gcd = (x, y) => {

      if (y > x) {
        return gcd(y, x);
      }
      if (!y) {
        return x;
      }
      return gcd(y, x % y);
    };

    export const gamesEngine = () => { 
      const randomNumber1 = getRandomInt(0, 11);
      const randomNumber2 = getRandomInt(0, 11);
     const question = `${randomNumber1} ${randomNumber2}`;
     const result = gcd(randomNumber1, randomNumber2);
     const answer = result.toString();
    return { answer, question };
};
export default () => gameLogic(description, gamesEngine);
