'use strict';


let hasDriverLicense = false;
let passTest= true;
if(passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can Drive :D');


//const interface = 'Audio';

//const private = 234;

function logger(){

    console.log('My name is Carlos');
}


logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;

}

console.log(fruitProcessor(5,3));

const appleJuice = fruitProcessor(8,0);
console.log(appleJuice);


const num = Number('23');
console.log(num);
let birthYear = 1989;

function calcAge1(birthYear){

    return 2023 - birthYear;
}

//function expression
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}

const ageCarlos = calcAge1(birthYear);
console.log(ageCarlos);

const age2 = calcAge2(1990);

console.log(ageCarlos, age2);

//arrow function

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1978);
console.log(age3);

const calcAge4 = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName)=> {
    
    const age = 2028 - birthYear;
    const retirement = 65 - age;
   // return `${firstName} retires in ${retirement} years`;
   if(retirement >0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

   }else {
    console.log(`${firstName} is already retired`);
    return -1;
   }

}


console.log(yearsUntilRetirement(1939, 'Carlinhos'));
   console.log(yearsUntilRetirement(1970, 'Carleu Gabriel'));

console.log(yearsUntilRetirement(1991, 'Almeida'));


console.log(yearsUntilRetirement(1980, 'Teixeira Carlos'));

// Functions Calling other Functions

function cutFruiPieces(fruit){  
    return fruit * 4;
}


function fruitProcessor (apples, oranges){

    const applePieces = cutFruiPieces(apples);
    const orangePieces = cutFruiPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`

    return juice;
}


console.log(fruitProcessor(2,3));



/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
    
    const avarageScore = (score1+score2+score3)/3;
    
    return avarageScore;
}


let scoreDolphins =  calcAverage(44,23,71);
let scoreKoalas =  calcAverage(65,54,49);
const avgDolphins2 =  calcAverage(85,54,41);
const avgKoalas2 =  calcAverage(23,34,27);




const checkWinner = (avgDolphins,avgKoalas) =>{

   if(avgDolphins >= (avgKoalas * 2)){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
       
        
       
   }else if(avgKoalas >= (avgDolphins * 2)){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
     
   }else {
       console.log(`No team wins...`);
   }

return checkWinner;
   
}


checkWinner(scoreDolphins,scoreKoalas);
checkWinner(avgDolphins2,avgKoalas2);



//Introduction to Arrays

const friends = ['Carlos', 'Otavio', 'Marjorie'];

console.log(friends[0]);

console.log(`${friends}`);

let years = new Array(1991, 1984, 2008, 2020);

console.log(`${years}`);


console.log(`${friends.length}`);
console.log(`${years.length}`);
console.log(`The year which is placed in the last positoin is: ${years[years.length-1]}`);

friends[0] = 'Carlos Almeida';

console.log(`${friends}`);

//Array when declared as const,  can be changed the value, but not be replaced by a new array
// i.e frirends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schamedtmann', 2037 - 1991, 'teacher', friends];


console.log(`${jonas}`);
console.log(`${jonas.length}`);


//exercise

const calcage = function (birthYear) {
    return 2037 - birthYear;
}


years = [1990, 1967, 2002, 2010, 2018];

const age1 =  calcage(years[0]);
const ageB =  calcage(years[1]);
const ageC =  calcage(years.length -1);

console.log(age1, ageB, ageC);

const ages = [calcage(years[0]), calcage(years[1]), calcage(years.length -1) ]

console.log(`${calcage(years)}`);

console.log(`${ages}`);

const amigos = ['Celio', 'Bruno', 'Tiago'];
console.log(`${amigos}`);

// add elements in the final of the array
const newLength = amigos.push('Marjorie');

console.log(`${amigos}`);
console.log(`${newLength}`);

// add elements in the begining of the array
amigos.unshift('Marjorie');
console.log(`${amigos}`);

//Remove elements of the array
const popped = amigos.pop();
console.log(`${popped}`);
console.log(`${amigos}`);


amigos.shift();

console.log(`${amigos}`);

console.log(`${amigos.indexOf('Celio')}`);

console.log(`${amigos.includes('Genoveva')}`);
console.log(`${amigos.includes('Bruno')}`);


amigos.push(23);
console.log(`${amigos.includes(23)}`);


if(amigos.includes('Celio')){

    console.log(`you have a friend called ${amigos[amigos.indexOf('Celio')]}`);
}


/*CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

Write your code below. Good luck! 🙂 */

const calcTip = (bill) => {
    let tip = 0;
   if(bill >= 50 && bill <= 300){
       
       tip = bill *(15/100)
       
   }else {
       
         tip = bill *(20/100)
   }
    
    return tip;
}


console.log(`The Tip for the value 100 is: ${calcTip(100)}`);


const bills = [125, 555,44];

console.log(`Arrays the the following values: ${bills}`);

const tips = [];

tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))



console.log(`The Tips are: ${tips}`);

const totals  = [];

totals.push(calcTip(bills[0]) + bills[0]);
totals.push(calcTip(bills[1]) + bills[1]);
totals.push(calcTip(bills[2]) + bills[2]);

console.log(`The Totals of each bill + tip are: ${totals}`);




const carleu = {
    firstName: 'Carlos',
    lastName: 'Almeida',
    birthYear: 1989,
    job: 'QA Engineer',
    friends: ['Otavio', 'Bruno', 'Celio'],
    hasDriverLicense: true,
    /*calcAge1: function(birthYear){
        return 2023 - birthYear;
    }*/

    calcAge1: function(){
        this.age2 = 2023 - this.birthYear;
        return age2;
    },
    getSummary: function(){
        return (`${this.firstName} is a  ${this.calcAge1(this.birthYear)} years old ${this.job},  and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`)
    }
}
const nameKey = 'Name';
console.log(carleu);

console.log(carleu.firstName);
console.log(carleu['lastName']);

console.log(carleu.age);

console.log(carleu['first' + nameKey]);
console.log(carleu['last' + nameKey]);

//console.log(carlosArray.'first' + nameKey);


carleu.location = 'Sweden';
carleu['twiter'] = '@carleu89';

console.log(carleu);

const interestedIn = prompt('What do you want to know about Carleu? Choose between First Name, LastName, age, job, and Friends');
console.log(carleu[interestedIn]);

if(carleu[interestedIn]) {
console.log(carleu[interestedIn]);

} else {
const interestedIn = prompt('What do you want to know about Carleu? Choose between First Name, LastName, age, job, and Friends');
console.log('Wrong Request, ');
}

//Challenge
// 'Carlos has 3 friends, and his best friens is called Celio'


console.log(`${carleu.firstName} has ${carleu.friends.length} friends, and his best friend is called ${carleu.friends[0]}`)

console.log(` The age of ${carleu.lastName} is ${carleu.calcAge1()}`);

console.log(` The age of ${carleu.lastName} is ${carleu.age2}`);

console.log(`${carleu.getSummary()}`);


/* 
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


Write your code below. Good luck! 🙂 */
let bmi = 0;
const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,
    calcBMI: function(){
        this.bmi = mark.mass / (mark.height * mark.height);
        return this.bmi;
    }
    
}

const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,
    calcBMI: function() {
        this.bmi = john.mass / (john.height * john.height);
        return this.bmi;
    }
    
}


if(mark.calcBMI() > john.calcBMI()){
    
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
    
   
}else{

    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
    
}


// Objects in javaScript

const carlosArray = [
    'Carlos',
    'Otavio',
    44-4,
    [125, 555,44],
    
];


const types = [];
for(let i=0; i <=carlosArray.length; i++){

    console.log(` array content: ${carlosArray[i]} is a `+ typeof (carlosArray[i]));

types.push(typeof carlosArray[i])

}

const anos =  [1989, 1878, 1958];

const idades = [];

for(let i=0; i <=anos.length; i++){

    console.log(` array content: ${anos[i]} is a `+ typeof (anos[i]));

    idades.push( 2023 - anos[i])

}

console.log(idades);

//Continue and Break

console.log('---- ONLY STRINGS ----')
for (let i=0; i < carlosArray.length; i++){
    if(typeof carlosArray[i] != 'string') continue;
    console.log(carlosArray[i], typeof carlosArray[i])
}

for(let i=carlosArray.length;i >= 0 ; i--){

    console.log(` array content: ${carlosArray[i]} is a `+ typeof (carlosArray[i]));
}

for(let exercise=1; exercise <4; exercise++){

    console.log(`--------------Starting Exercise ${exercise}`);
    for(let rep=1; rep<6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}


let rep = 1;

while (rep <=10){

    console.log(`While: Lifting weight repetition ${rep}`);

    rep++;
}


let dice = Math.trunc(Math.random() * 6)+1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice =  Math.trunc(Math.random() * 6)+1;

    if(dice ===6)  console.log(`Loop is about to end...`);
}




/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
Write your code below. Good luck! 🙂 

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
  console.log('The bill lenght is:'+ bills.length);
  
  const tips = [];
  const totals = [];
  
  
  for(let i=0; i<bills.length; i++ ){
     
     console.log(`------------ Bill:  ${i} `); 
      tips.push(calcTip(bills[i]));
      
      console.log('The tip is: '+ tips[i]);
      
      totals.push(bills[i]+tips[i]);
      
       console.log(`The total bill is  ${bills[i]} + ${tips[i]} = ${totals[i]}`);
      
      
  }
  
  
  
  const calcAverage = (arr=[]) => {
      let sum = 0;
      
      for (let i=0; i<arr.length;i++){
          
          sum = sum+arr[i];
      }
      
      return sum / arr.length;
      
  }
  
  console.log(`The totals average is: ${calcAverage(totals)}`);*/
  
  