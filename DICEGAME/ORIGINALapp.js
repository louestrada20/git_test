/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var scores, roundScore, activePlayer, gamePlaying;  // Declared variables in the global scope to use them in other functions. 


init();



// console.log(dice);

// works similar to selecting something with CSS
// .querySelector()
// document.querySelector('#current-' + activePlayer).textContent = dice;
// dynamic querySelector('#current-' + the number of the index im the array)
// this code will select the html ID either current-0 or current-1 (and it would go on if there were more items in the array)
//.textContent can only set plain text (not HTML), it will literally display <em> and not as HTML
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// HTML inside javascript to use or manipulate needs to be a string WRONG <em> CORRECT '<em>'
// document.querySelector('#current-' + activePlayer).textContent = dice; // this is a SETTER
// BECAUSE IT SETS A VALUE


// var x = document.querySelector('#score-0').textContent; // this is a GETTER
// BECAUSE IT GETS A VALUE

// console.log(x);

//use queryselector to also change CSS of an element
// document.querySelector('.dice').style.display = 'none';
// THIS IS USING JAVASCRIPT TO MANIPULATE/CHANGE CSS
// style.display = 'none'; none HAS TO be a string. CSS has to be a string like HTML

// function btn() {
    // Do something here
// }
// btn();

// CALLBACK FUNCTION
//document.querySelector('.btn-roll').addEventListener('click', btn);
// callback function = function not called by us but instead by another function.
// callback function = function that we pass into another function as an argument.
// the other function (event listener method) will call that function for us.
// ANONYMOUS FUNCTION
// Anonymous function = function that has no name, so it cannot be re-used.
/** 
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/



// getElementById is a bit faster than querySelector



document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
            // 1. Random number
    var dice = Math.floor(Math.random() * 6)+ 1;

    // 2. Display
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice; // same thing as writing roundScore = roundScore + dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else { 
        //Next player
      nextPlayer();
    }
    }
});





document.querySelector('.btn-hold').addEventListener('click', function() {
   if(gamePlaying) {
// Add current score to global score
scores[activePlayer] += roundScore;
    
    
// Update the user interface
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// Check if player won the game
if (scores[activePlayer] >= 20) {
   document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   gamePlaying = false;
} 
else {
 //Next player
 nextPlayer();
}


   }
   
    

 
});




function nextPlayer() {

  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
      // remove and add classes with javascript

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

     // toggle - add class if not there, or remove it if it has it
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display = 'none';




};


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0]; 
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');


    document.querySelector('.player-0-panel').classList.add('active');

};

// a state variable tells us the condition of a system.
// use a state variable when we need to remember the state of something.
