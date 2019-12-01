import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbers = new NumbersCollection([-10, 0, -60, 3, 9]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("HriapnqJ");
characters.sort();
console.log(characters.data);
