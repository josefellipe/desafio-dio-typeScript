"use strict";
let register;
var ocupation;
(function (ocupation) {
    ocupation[ocupation["Padeiro"] = 0] = "Padeiro";
    ocupation[ocupation["Atriz"] = 1] = "Atriz";
})(ocupation || (ocupation = {}));
const person1 = {
    name: 'Maria',
    age: 29,
    ocupation: ocupation.Atriz
};
const person2 = {
    name: 'Roberto',
    age: 19,
    ocupation: ocupation.Padeiro
};
const person3 = {
    name: 'Laura',
    age: 32,
    ocupation: ocupation.Atriz
};
const person4 = {
    name: 'Carlos',
    age: 19,
    ocupation: ocupation.Padeiro
};
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);