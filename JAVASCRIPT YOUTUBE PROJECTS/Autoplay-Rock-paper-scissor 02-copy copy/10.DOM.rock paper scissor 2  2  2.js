let score = JSON.parse(localStorage.getItem('score')) || {
   wins: 0,
   losses: 0,
   ties: 0
 };

 let isAutoPlaying = false;
let intervalId;

 updateScoreElement();

 /*
 if (!score) {
   score = {
     wins: 0,
     losses: 0,
     ties: 0
   };
 }
 */

 function borderChange(){


   if (result === 'You win.'){
     document.querySelector('.js-result').classList.add('result-win');
   }
   else if (result === 'You lose.'){
     document.querySelector('.js-result').classList.add('result-lose');
   }
   else if(result === 'You Tie.'){
     document.querySelector('.js-result').classList.add('result-tie'); 
   }

 }




 function autoPlay(){
    if (!isAutoPlaying){
      intervalId = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
      },1000);
      isAutoPlaying = true;
    
    }else {
      clearInterval(intervalId);
      isAutoPlaying = false;

    }
 };

 function playGame(playerMove) {
   const computerMove = pickComputerMove();

   let result = '';

   if (playerMove === 'scissors') {
     if (computerMove === 'rock') {
       result = 'You lose.';
     } else if (computerMove === 'paper') {
       result = 'You win.';
       document.querySelector('.js-result').classList.add('result-win');
     } else if (computerMove === 'scissors') {
       result = 'Tie.';
     }

   } else if (playerMove === 'paper') {
     if (computerMove === 'rock') {
       result = 'You win.';
       
     } else if (computerMove === 'paper') {
       result = 'You Tie.';
     } else if (computerMove === 'scissors') {
       result = 'You lose.';
     }
     
   } else if (playerMove === 'rock') {
     if (computerMove === 'rock') {
       result = 'You Tie.';
     } else if (computerMove === 'paper') {
       result = 'You lose.';
     } else if (computerMove === 'scissors') {
       result = 'You win.';
     }
   }

   if (result === 'You win.') {
     score.wins += 1;
   } else if (result === 'You lose.') {
     score.losses += 1;
   } else if (result === 'You Tie.') {
     score.ties += 1;
   }



   



   if (result === 'You win.'){
     document.querySelector('.js-result').classList.remove('result-lose');
     document.querySelector('.js-result').classList.remove('result-tie');
     document.querySelector('.js-result').classList.add('result-win');
   }
   else if (result === 'You lose.'){
     document.querySelector('.js-result').classList.remove('result-tie'); 
     document.querySelector('.js-result').classList.remove('result-win');
     document.querySelector('.js-result').classList.add('result-lose');
   }
   else if(result === 'You Tie.'){
     document.querySelector('.js-result').classList.remove('result-lose');
     document.querySelector('.js-result').classList.remove('result-win');
     document.querySelector('.js-result').classList.add('result-tie'); 
   }





  







   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `    You
 <img class="game-button-img"src="./rock-paper-scissors photos/${playerMove}-emoji.png" alt="">
 <img class="game-button-img" src="./rock-paper-scissors photos/${computerMove}-emoji.png" alt="">
 Computer`;

 return result;
 }

 function updateScoreElement() {
   numPlayed = score.wins + score.losses + score.ties;


   document.querySelector('.score-win').innerHTML = `Wins: ${score.wins}.`;
   document.querySelector('.score-loss').innerHTML = ` Losses: ${score.losses}.`;
   document.querySelector('.score-tie').innerHTML = `Ties: ${score.ties}.`;
   document.querySelector('.score-numgame').innerHTML = ` Games Played:   ${numPlayed} ; `;

     
 }

 function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
     computerMove = 'rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = 'paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = 'scissors';
   }

   return computerMove;
 }