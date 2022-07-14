let register:Object[];

interface person {
    name: String;
    age: Number;
    ocupation: ocupation;
}

enum ocupation {
    Padeiro,
    Atriz
}

const person1: person = {
    name: 'Maria',
    age: 29,
    ocupation: ocupation.Atriz
}

const person2: person = {
    name: 'Roberto',
    age: 19,
    ocupation: ocupation.Padeiro
}

const person3: person = {
    name: 'Laura',
    age: 32,
    ocupation: ocupation.Atriz
}

const person4: person = {
    name: 'Carlos',
    age: 19,
    ocupation: ocupation.Padeiro
}

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);