'use strict';

/*
const Person = function (firstName, birthYear) {
  //Instance properties

  this.firstName = firstName;
  this.birthYear = birthYear;
};

const carlos = new Person('Carlos Almeida', 1989);
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

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

console.log(otavio.hasOwnProperty('firstName'))

//Object.prototype (top of prototype chain)
console.log(otavio.__proto__proto__proto__);


console.dir(Person.prototype.constructor)


const arr = [3,5,3,4,6,7]; //new array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1')


//
const Car = function (carMake, speed) {
  //Instance properties

  this.carMake = carMake;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed +=10;
  console.log(`${this.carMake} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -=5;
  console.log(`${this.carMake} is going at ${this.speed}`);
};
//console.log(bmwx6, bmw320i)

const bmwx6 = new Car('bmwX6', 120);
const bmw320i = new Car('320i', 120);

console.log(bmwx6, bmw320i)

bmw320i.accelerate();
bmw320i.brake();



//Class expression
//const PersonCl = class {}

//Class declaration

class PersonCl {
  constructor(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Instance Method
//Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear)
  }

  greet() {
    console.log(`Hey ${this.firstName}`)
  }
  get age() {
   return 2023 - this.birthYear;
  }
  
  //Set a property that already exists
  set fullName (name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`)
  }

  get fullName () {
    return this._fullName;
  }
  //static Method
  static hey() {
    console.log('Hey there ')
    console.log(this)
  }
}


const carleu = new PersonCl('Carleu Almeida', 1989);
console.log(carleu.age)
carleu.calcAge()

console.log(carleu.hey + ' hey asdlk')


console.log(carleu.__proto__ === PersonCl.prototype)

PersonCl.hey();

// 1. Classes are NOT hoisted (Search about what "Hoisted means")
// 2. Class are not first<class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Carlos White', 1989)
walter.fullName = 'Almeida AD'
const account = {
  owner: 'Carlos',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};


console.log(account.latest)
account.latest = 59;

console.log(account.movements)


const personProto = {
  calcAge() {
    console.log(2023 - this.birthYear)
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(personProto);
console.log(steve)

steve.name ='Steven'
steve.birthYear = 1989
steve.calcAge()

console.log(steve.__proto__ === personProto)
const almeida = Object.create(personProto);
almeida.init('Almeida', 1989)
almeida.calcAge()

////////////////////////////////////////////
//Challenge code 2
class car {
  constructor(make, speed){
    this.make = make;
    this.speed = speed;

  }

  accelerate  () {
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed}`);
  };
  brake() {
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed}`);
  };

  
  get speedUS() {
    return this.speed/1.6;
  }
  set speedUS(speed) {
    this.speed= speed * 1.6;
  }
  
};

const bmw = new car('BMW', 120);
console.log(bmw.speedUS)
bmw.accelerate();
bmw.brake();
bmw.speedUS = 50;
console.log(bmw)



////////////////////////////////////////////////////////////
//Inheritance Between "Classes": constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Carlos T G Alm', 1989, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//////////////////////////////////////////////////////////////////
//Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
const testla = new EV('Tesla', 120, 23);
testla.chargeBattery(90);

console.log(testla);

testla.brake();
testla.accelerate();


////////////////////////////////////////////////////////
//Inheritance Between "Classes": ES6 CLasses
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Instance Method
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
  //static Method
  static hey() {
    console.log('Hey there ');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, but as a student I feel more like ${
        2023 - this.birthYear + 10
      }`
    );
  }
}

const carlosAlmeida = new StudentCl('Carlos Almeida', 1989, 'Computer Science');

carlosAlmeida.introduce();
carlosAlmeida.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 1989, 'Computer Science');
jay.introduce();
jay.calcAge();

const carlos = new StudentProto()

//Public Field
//Private Fields
//Private Methods
//(there is also the static version)

class Account {
    // 1)public Fields (instances)
    locale = navigator.language;
   // _movements = [];

    //2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    //Protected property
    this.#pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`)
  }
  
  //Public interface
  //Public Methods
  getMovements(){
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val){
    this.deposit(-val);
    return this;
  }
 

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  //Private Methods
  _approveLoan(val){
    return true;
  }

}

const acc1 = new Account('Carlos G T Almeida', 'EUR', 1128);

//acc1.#movements.push(230);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);


console.log(acc1)
console.log(acc1.pin)
//console.log(acc1._approvaLoan());

console.log(acc1.getMovements())

acc1.deposit(434).deposit(900).withdraw(349).requestLoan(1090);
console.log(acc1)*/

class CarCl {
  constructor(make, speed){
  this.make = make;
  this.speed = speed;
  }
  accelerate () {
    this.speed += 10;
    console.log(
      `${this.make} is going at ${this.speed} km/h}`);

    return this;
  };

  brake() {
    this._speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed){
    this.speed = speed * 1.6;
  }

};


class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge){
    super(make, speed);
    this.#charge = charge;
  }

  get chargeBattery() {
    this.#charge = chargeTo;
    return this;
  };

  set chargeBattery(chargeTo) {
    this.#charge += chargeTo;
    return this;
  };

  accelerate(){
    this.speed = +20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`)
    return this;
  }
  

}


const rivian = new EVCL('Rivian', 120,23 );

console.log(rivian);
console.log(rivian.accelerate(39));

rivian.accelerate()
      .accelerate()
      .brake()
      .chargeBattery(40)
      .accelerate();

/*
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
//Link the prototypes
EV.prototype = Object.create(Car.prototype);

chargeBattery(chargeTo) {
  this.charge = chargeTo;
  return charge;
};

EV.prototype.accelerate = function() {
  this.speed += chargeTO;
};

EV.prototype.accelerate = function (){
  this.speed = +20;
  this.charge = chargeTO;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
};


*/