'use strict';


//selecting the elementes
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;


//Rolling Functionality
btnRoll.addEventListener('click', function(){
    //1. Generating dice functionality
    const dice = Math.trunc(Math.random() * 6) +1;
    console.log(dice);

    //Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check For rolled 1
    if(dice !==1){
        //add dice to current score
        currentScore +=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
    }else {
        // Sweitch to the next player
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }


});