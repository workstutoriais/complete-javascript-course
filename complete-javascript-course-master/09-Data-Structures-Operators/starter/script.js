'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replace(
    '_',
    ' '
  )} FROM ${getCode(from)} TO ${getCode(to)}  (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}

// Data needed for first part of the section
//It is a literal object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  numGuests: 10,
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 Enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious past with ${ing1}, ${ing2}, ${ing3}  `
    );
  },
  orderPizza: function (mainIgredient, ...otherIgredients) {
    console.log(mainIgredient);
    console.log(otherIgredients);
  },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )} `;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)} `);
  }
});

/**
********Test Data 
underscore_case
 first_name
Some_variBLE
  Calculate_AGE
delayed_departure

*/

///
// Working with Strings part 2
/*
const [firstName, lastName] = 'Carlos Gabriel'.split(' ');

const newName = ['Mr', firstName, lastName.toLocaleUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toLocaleUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('teixeira carl hah');

//Padding
const masterCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(masterCard(37494398349348439));

//Repeat
const message2 = 'Bad weather ... All Departures Delayed... \n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There aer ${n} plannes in line ${''.repeat(n)}`);
};

planesInLine(5); */

///
// Working with Strings part 2
/*
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

//Fix Capitalization in name
const passenger = 'JOnAS';
const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

console.log(email === normalizeEmail);

// replacing
const priceBR = '288.97R';
const priceUS = priceBR.replace('R', '$').replace('.', ',');
console.log(priceUS);

const announcement = 'All Passengers come to barding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate')); /*

/*
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);

console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(-2)); // remove from the right
/*
/**
 * 
 * const question = new Map([
  ['Question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try Again'],
]);

console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
console.log('Convert Map to Array');
console.log([...question]);
console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
 */

// MAP: Fundamentals
////////////////////////////////////

/*const rest = new Map();
rest.set('Name', 'Classic Italia Risto Carleu');
rest.set(1, 'Firenze', 'Italy');
console.log(rest.set(2, 'Lisboa', 'Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('opep', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are cloase');

const arr = [1, 5];
rest.set(arr, 'Test Array is my key in the map');

console.log(rest.get('Name'));

//check if the Map contains a certain key
console.log(rest.has('categories'));
rest.delete(2);*/

/*SET
//////////////////////
// Set Properties are unique, it automatically remove the duplicated eleemnts
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto9',
  'pasta',
  'pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

console.log(orderSet.has('pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Bread of Bacon');
orderSet.delete('risotto');

console.log(orderSet);

for (const order of orderSet) console.log(order);

const orderCopy = [...new Set(orderSet)];
console.log(orderCopy);

console.log(new Set('Carlos Almeida').size);
console.log(orderCopy); */

/*const properties = Object.keys(openingHours);
console.log(`We are open on ${properties.length} days of the week`);

let openStr = `We are open on ${properties.length} days of the week `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//properties NAMES

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//properties Values
const values = Object.values(openingHours);
console.log(values);

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/*
///////////////////////////
optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.fri);

// With optional chaining
console.log(restaurant.openingHours.fri?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}, we open at ${open} `);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.ordeRisoto?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [{ name: 'jonas', email: 'hello@jonas.com' }];

console.log(users[0]?.name ?? 'User does not exist');

if (users.length > 0) console.log(users[0].name);
else console.log('array is empty');

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La piazza',
//   owner: 'Carleu Rosseldo',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Nublish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 11;

//The logical AND operator
//Undefined since the owner property doesnt exist for rest1 object
// rest1.owner = rest1.owner && '<ANONYMUS>';
// //WILL ASSIGN anonymus
// rest2.owner = rest2.owner && '<ANONYMUS>';

// rest1.owner &&= '<ANONYMUS>';
// rest2.owner &&= '<ANONYMUS>';

// console.log(rest1);
// console.log(rest2);

//Spread, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, risoto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risoto, otherFood);

// console.log(false || 'carlos');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nublish: null and undefined (Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 19;
// console.log(guestCorrect);

//Short circuting (&& and ||)
//Setting a default value. 1. check if the variable exists, if yes, set the value 10
//
// console.log(guest1);
// const guest2 = restaurant.numGuests || 12;
// // console.log(guest2);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2. Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('cheese', 'tomato', 'olives');

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'tomato', 'olives');

//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 2?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta([...ingredients]);

// const newRestaurant = {
//   foundedIn: 1598,
//   ...restaurant,
//   founder: 'Carl Almehd',
// };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = 'Ristorantino Sao Paulo';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//The Spread operator is to unpack an array and log it separtin by comas
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// const str = 'jonas';

// const leeter = [...str];
// console.log(leeter);
//Note:spread the array and add a new elemet, the spread operator is similar to destructure array that remove eleements and keep them separated by coma

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'rua via del zapata medelin',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.order(2, 2);

// const arr = [2, 3, 4];

// const [x, y, z] = arr;

// console.log(`array destructured: ${arr}`);
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// //switching variables
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// //

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [3, 5, [7, 8]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(starters);

// //muting variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:


TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

//Coding Challenge 2
///////////////////////////////
//1.
/*
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.
let odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamSter = team === 'x' ? 'draw' : `vitory ${game[team]}`;
  console.log(`Odd of ${teamSter} ${odd}`);
} */

/*
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

console.log(players1);

console.log(players2);

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
//  and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log('All Players');
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final')
//  containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names
// (NOT an array) and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were score`);
};

// game.players[0][i] ? players[i] : (goalsSum = 3);

printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is more likely to win');

team2 < team1 && console.log('Team 2 is more likely to win'); */
