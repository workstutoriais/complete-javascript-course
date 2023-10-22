'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type
        movements__type--${type}">${i + 1}${type} </div>
        <div class="movements__value">${mov} €</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

const user = 'Steven Thomas Williams'; //stw
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function () {
  //Display Movements
  displayMovements(currentAccount.movements);

  //Display Balance
  calcDisplayBalance(currentAccount);

  //DisplaySummary
  calcDisplaySummary(currentAccount);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    // Display UI and Message
    labelWelcome.textContent = `Welcome Back${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //Clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => user.username === currentAccount.username
    );
    console.log(index);
    //.indexOf(23)<
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount >= 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);

    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//displayMovements(currentAccount);

//calcDisplayBalance(currentAccount);

//calcDisplaySummary(currentAccount);

const balance = movements.reduce((acc, cur) => (acc = cur), 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Acumulator

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);

/* 
console.log(createUsernames('Carlos Almeid Teixeir'));

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// console.log(movements);
// console.log(deposits);

const depositFor = [];
console.log('---------depositFor---------');
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

console.log('---------withdrawls---------');
// const withdrawls = [];
// for (const mov of movements) if (mov < 0) withdrawls.push(mov);
//

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls);

/////////////////////////////////////////////////


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2))

console.log(arr.slice(2,4))

console.log(arr.slice(-2))
console.log(arr.slice(-1)) // remove all the elements of the arrays keeping only the last one

console.log(arr.slice(1, -2))
console.log(arr.slice) // remove all the elements of the Array

//Splice
console.log(arr.splice(2))
console.log(arr)


// to know more about Array documentation go to mdn documentaiton (developer.mozzila.org)

//reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i','g','f'];

console.log(arr2.reverse())
console.log(arr2)

//CONCAT
const letters = arr.concat(arr2)
console.log(letters)


const arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(0))

// Getting last array element

console.log(arr[arr.length-1])
//Slice get the elements from the Array from a specific position
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))
console.log('Carlos'.at(1))


// ForEach Methods




for (const [i,movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i+1}: you deposited  ${movement}`)
  } else {
    console.log(`Movement ${i+1}: you withdrew  ${Math.abs(movement)}`)
  }
}

console.log('------------------FOREACH-------------------')
movements.forEach(function(movement){
  if(movement > 0) {
    console.log(`you Deposited ${movement}`)
  } else {
    console.log(`you withdrew the amount ${movement}`)
  }

});

// ForEach  with MAPS and SETS

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
// This is with a MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value, key, map) { 
  console.log(`${key}: ${value}`)
})

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'BRL']);
console.log(currenciesUnique)

currenciesUnique.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`)
})

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

displayMovements(account1.movements);
console.log(movements);


TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};


const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


const firstWithdrawl = movements.find(mov => mov < 0);

console.log(movements);

console.log(firstWithdrawl);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);




// Equality
console.log(movements.includes(-130))

// SOME: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov >0);
console.log(anyDeposits);

// EVERY

console.log(movements.every(mov => mov >0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))

const arr = [[1,2,3], [4,5,6],7,8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]],7,8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements)

const allMovements = accountMovements.flat();
console.log(allMovements)

//Flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)


//Flat
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)


//Sorting Arrays
const owners = ['Jonas','Zach', 'Adam', 'Martha']
console.log(owners.sort())
console.log(owners)


//Numbers
console.log(movements)
//console.log(movements.sort())
// return < 0, A, B (Keep the order)
// return > 0, B, A


//Ascending
movements.sort((a,b) => {
  if(a > b){
    return 1;
  }else if (a < b) {
    return -1;
  }
})
movements.sort((a,b) => {
  if(a > b){
    return -1;
  }else if (a < b) {
    return 1;
  }
})

// Ascending
movements.sort((a,b) => a -b)
console.log(movements)


//Descending

movements.sort((a,b) => b -a)
console.log(movements)
console.log(movements)

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(5);
console.log(x);

console.log(x.map(() => 5));

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);

console.log(arr);

//Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUI);
  const movementUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementUI2);
});
*/
