"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([-10, 0, -60, 3, 9]);
numbers.sort();
console.log(numbers.data);
var characters = new CharactersCollection_1.CharactersCollection("HriapnqJ");
characters.sort();
console.log(characters.data);
