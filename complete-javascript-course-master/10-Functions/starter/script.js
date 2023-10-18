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

greetArr('Carla')('Almeida999'); 

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
  airline: 'eurowings',
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

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SWG',
  bookings: [],
};
 
book.call(swiss, 345, 'Mary Cooper');

const bookEW34 = book.bind(eurowings, 43);
bookEW34('Teixeira Almeida')
bookEW34('Gabriel trehvoer')



// With Event Listerners

lufthansa.planes =300;

lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
//lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//partial Application

const addTax = (rate, value ) => value + value * rate;
console.log(0.1, 200);

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(233));
console.log(addVAT(100));


const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(160));
console.log(addVAT2(23)); 

/// Coding challenge 1

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1; Python', '2: Rust', '3: C++'],
  //This Generates [0,0,0,0] 
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer 
    const answer = Number(
      prompt(
      `${this.question}\n${this.options.join('\n')}
      \n(Write option Number)`
      )
    );
    console.log(this.answer);
    //Registrer answer
    typeof answer === 'number' &&
      answer < this.answers.length && 
      this.answers[answer]++;
    
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if(type === 'array'){
      console.log(this.answer);
    }else if(type === 'string'){
      //Poll results are 13, 14, 2, 4, 1
      console.log(`Poll result are ${this.answers.join(',')}`);
    }
  
  }

};


//poll.registerNewAnswer()

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll)); 


// Immediately Invoked Function Expressionts (LIFE)

const runOnce = function () {
  console.log('This will never run again');
};


// This function will be executed only once, automatically
(function () {
  console.log('This will never Run again');
  const isPrivate = 23;
}) ();

//console.log(isPrivate)

(() => console.log('This will also never run again'))();

{ 
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate)*/

/// 137- Closures

const secureBooking = function(){
  let passengerCount =0;

  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`);

  }
}
const booker = secureBooking;

//139 Coding Challenge #2


(function() {
  const header = document.querySelector('h1');
  header.style.color = 'blue';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'red';
  })

})();