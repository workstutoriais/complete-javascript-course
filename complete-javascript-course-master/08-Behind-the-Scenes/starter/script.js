'use strict';

/*function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh! And you are a millenial, ${firstName}`;
            console.log(str);
            output = 'New output test carl';

            function add(a, b) {
                return a + b;
            }

       
        }else {
            console.log('Ahh you aren a millenial, sorry!');
        }
        console.log(output);
        
    }

    //console.log(str);
    
    printAge();

    return age;
   
}

const firstName = 'Carl Schodson';
calcAge(1989);

console.log(this);

const calcAge = function(birthYear){
    console.log(2023 - birthYear);
    console.log(this);
}

calcAge(1989);


const calcAgeArrow = birthYear =>{
    console.log(2023 - birthYear);
    console.log(this);
}

calcAgeArrow(1985);
//var firstName ='Carleu';

const jonas = {
    firstName: 'Jonas Gabriel',
    year: 1989,
    calcAge: function () {
        console.log(this);
        console.log(2023 - this.year);

        /*Solution 1
        const self = this; // Self or That
        const isMillenial = function() {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);

        };

        //Solution 2
        
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);

        };

        isMillenial();
    },
    
    greet: function (){
        console.log(this);
        console.log(` Hey ${this.firstName}`);
    },
};

jonas.greet();
jonas.calcAge();

//arguments Keyword

const addExpor = function( a,b){
    console.log(arguments);
    return a + b;
};

    addExpor(3,9);
    addExpor(3,9,5,8);

const addArrow = (a,b) => {
    console.log(arguments);
    return a + b;

};

addArrow(7,4);

const matilda = {
    year: 2017,
};


matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
//f();

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Gabriel Carl',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me', me);

*/

//Primiteve Type
let lastName = 'Carl';
let oldLastName = lastName;

lastName = 'Gabriel';
console.log(lastName, oldLastName);

//reference type
const gabriel = {
  firstName: 'Teixeira',
  lastName: 'Almeida',
  age: 37,
};

const marriedGabriel = gabriel;
marriedGabriel.lastName = 'Carleu';
console.log('Before Marriage: ', gabriel);
console.log('After Marriage: ', marriedGabriel);

//Copying objects

const gabriel2 = {
  firstName: 'Teixeira',
  lastName: 'Almeida',
  age: 37,
  family: ['Valod', 'Gena'],
};

const gabrielCopy = Object.assign({}, gabriel2);
gabrielCopy.lastName = 'Solrac';

console.log(' gabriel2 Before Marriage: ', gabriel2);
console.log(' gabrielCopy After Marriage: ', gabrielCopy);
gabrielCopy.family.push('Klark');
gabrielCopy.family.push('Natalia');

console.log(' gabrielCopy After Marriage: ', gabrielCopy);
