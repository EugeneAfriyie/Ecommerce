  

let score = JSON.parse(localStorage.getItem('score')) || {
   
    Wins: 0,
    Losses: 0,
    Tie: 0
   
};




function gameUpdate(){

document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Tie} `;



};

gameUpdate();

 // if (!score){ 
 //   score ={
 //    Wins: 0,
 //    Losses: 0,
 //    Tie: 0
 //   }
 // };

 

function pickComputermove () {
 const randomnumber = Math.random();
console.log(randomnumber)
let computermove = '' ;


if (randomnumber >= 0 && randomnumber < 1 / 3)
{computermove=('Rock')

}
else if(randomnumber >= 1/3 && randomnumber < 2/3)
{computermove=('Paper')

}
else if(randomnumber > 2/3 && randomnumber <1)
{computermove=('Scissors')
  
}

return computermove;

}



 
function playGame(playerMove){
 
 const computermove = pickComputermove();

 let result='';

 if( computermove === 'Rock'){
    result = 'You win'
 }

 else if(computermove === 'Paper'){
    result = 'You lose'
 }
 else if(computermove ==='Scissors'){
    result = 'You tie'
 }


    if (playerMove === 'Rock'){

       if( computermove === 'Rock'){
       result = 'You tie'
    }

    else if(computermove === 'Paper'){
       result = 'You lose'
    }
    else if(computermove ==='Scissors'){
       result = 'You Win'
    }

 }

 else if (playerMove === 'Paper'){

    if( computermove === 'Rock'){
    result = 'You Win'
 }

 else if(computermove === 'Paper'){
    result = 'You tie'
 }
 else if(computermove ==='Scissors'){
    result = 'You lose'
 }
 }

 else if (playerMove === 'Scissors'){

       if( computermove === 'Rock'){
       result = 'You lose'
    }

    else if(computermove === 'Paper'){
       result = 'You Win'
    }
    else if(computermove ==='Scissors'){
       result = 'You tie'
    }
 }


 if (result === 'You Win'){
    score.Wins += 1;
 }
 else if(result === 'You lose'){
    score.Losses += 1;
 }
 else if(result === 'You tie'){
    score.Tie += 1;
 }
 
 

 localStorage.setItem( 'score', JSON.stringify(score));

 document.querySelector('.js-result').innerHTML = `Game Result: ${result} `;

 document.querySelector('.js-outcome').innerHTML =`  You 
<img class="move-icon" src="./rock-paper-scissors photos/${playerMove}-emoji.png" alt="rock-emoji">
<img class="move-icon" src="./rock-paper-scissors photos/${computermove}-emoji.png" alt="rock-emoji">
Computer `;

 
 gameUpdate();

    }

    