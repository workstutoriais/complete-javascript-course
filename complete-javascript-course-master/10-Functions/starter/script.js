'use strict';

/*const bookings = [];
const createdBooking = function (flightNum, numPassengers =  , price = 199 * numPassengers) {
  //ESS
  numPassengers = numPassengers || 1;
  price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createdBooking('LH123');*/
/*
const flight = 'LH234';
const carleu = {
  name: 'Carl Ahme',
  passport: 'FY988766',
};

const checkIn = function (flightNu, passenger) {
  flightNu = 'LH9988';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 'FY988766') {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, carleu);
console.log(flight);
console.log(carleu);

// The flight number will not be changed in the object, is the same as doins
const flightNum = flight;
const passenger = carleu;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(carleu);
checkIn(flight, carleu); 

//Passing by value or by reference (JavaScript does not have pass by Reference)
//this working even with primitive

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// We are passing by parameter the function  upperFirstWord();
const transformer = function (str, fn) {
  console.log(`Original String ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the Best!', upperFirstWord);

transformer('JavaScript is the Best!', oneWord);

const high5 = function () {
  console.log('😋');
};

document.body.addEventListener('click', high5);

['Carleu', 'Marth', 'Adam', 'Gabriel'].forEach(high5);
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Carleu');

greet('Hello')('Gaberiel');

///Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Carla')('Almeida999');*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ Flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(233, 'John Smith');

const eurowings = {
  name: 'eurowings',
  iataCode: 'LH9U',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
// book(234, 'Klarc Almeida');
book.call(eurowings, 4343, 'Sarah Williams');

console.log(eurowings);
book.call(lufthansa, 344, 'Mary Cooper');
console.log(lufthansa);

//Bin Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(234, 'Marjorie Eto');
