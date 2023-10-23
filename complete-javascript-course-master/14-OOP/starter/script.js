'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties

  this.firstName = firstName;
  this.birthYear = birthYear;
};

const carlos = new Person('Carlos Almeida', 1989);

console.log(carlos);

//New {} is created
// function is called, this = {}
//{} linked to prototye
// function automatically return {}

const klarc = new Person('Klarc', 2010);
const otavio = new Person('Otavio', 2022);

console.log(klarc, otavio);

const klrc = 'sd';

console.log(klrc instanceof Person);

/////////////////////////////////////////
//Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const almeida = new Person('Almeida Carleu', 1989);

almeida.calcAge();

console.log(almeida, klarc, otavio);

klarc.calcAge();
otavio.calcAge();

console.log(klarc.__proto__);
console.log(klarc.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(klarc));

Person.prototype.species = 'Homo Sapies';

console.log(almeida, klarc, otavio);
