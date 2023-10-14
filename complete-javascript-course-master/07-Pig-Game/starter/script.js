'use strict';


//selecting the elementes
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
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
let playing = true;
const init = function(){
    diceEl.classList.add('hidden');
    currentScore =0;
    scores[0] =0;
    scores[1] =0;
    playing=true;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.getElementById('score--0').textContent = currentScore;
    document.getElementById('score--1').textContent = currentScore;
    document.getElementById('current--0').textContent=currentScore;
    document.getElementById('current--1').textContent=currentScore;
};

init();

//Function to switch the player
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling Functionality
btnRoll.addEventListener('click', function(){
    if(playing){
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
        // Switch to the next player
        switchPlayer();
    }

    }
    
});



btnHold.addEventListener('click', function(){

    if(playing){
  //1. Add current Score to active player's score
   
  scores[activePlayer] +=currentScore;

  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
 
  //2. Check if the player's score is >=100
  //finish the Game
  if(scores[activePlayer] >= 20){
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else {
      //3. Switch to the next player
      switchPlayer();
  }
    }

    currentScore =0;
  

});


btnNew.addEventListener('click', function(){
    diceEl.classList.add('hidden');
    currentScore =0;
    scores[0] =0;
    scores[1] =0;
    playing=true;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    document.getElementById('score--0').textContent = currentScore;
    document.getElementById('score--1').textContent = currentScore;
    document.getElementById('current--0').textContent=currentScore;
    document.getElementById('current--1').textContent=currentScore;
    
})