console.log('let try something ermi');
function getComputerChoice(array){
    // get random index from array
    const Random = Math.floor(Math.random() * array.length);
    // get random item
    const randomItem =array[Random];
    return randomItem;
}
const array =['rock','paper','scissor'];
const result = getComputerChoice(array);
// console.log(result);

// getting input from user
const userInput = prompt(`write one of them , rock ,paper,scissor`);

function getHumanChoice(Input){
return userInput;
}
let showInput = getHumanChoice(userInput);
// console.log(showInput);

// count human and computer score 
let humanScore = 0;
let computerScore = 0;

// cerate single round 
function playRound(computerChoice,humanChoice){
    //....play
    if (computerChoice === 'rock'){
        if (humanChoice == 'paper'){
            console.log(`your choice is ${humanChoice} and you win`);
           return humanScore +=1;

        }else if (humanChoice == 'scissor'){
            console.log(`your choice is ${humanChoice} and you loss`);
           return computerScore += 1;
        }
        else {console.log('try again')}
    }
    else if (computerChoice === 'paper'){
        if (humanChoice == 'rock'){
            console.log(`your choice is ${humanChoice} and you win`);
           return humanScore +=1;
        }else if (humanChoice == 'scissor'){
            console.log(`your choice is ${humanChoice} and you loss`);
           return computerScore +=1;
        }else{console.log('try again')}
 
    }
    else if (computerChoice === 'scissor'){
        if (humanChoice == 'paper'){
            console.log(`your choice is ${humanChoice} and you loss`);
          return  humanScore +=1;
        }else if (humanChoice == 'rock'){
            console.log(`your choice is ${humanChoice} and you win`);
           return computerScore +=1;
        }else {console.log('try again')}
    }

}

// create function to play five times

    function playGame(){
        const computerSelection  = getComputerChoice(array);
        const humanSelection  = getHumanChoice(userInput);
        playRound(computerSelection,humanSelection);
        
    
    }  
for(let i =1; i <= 5; i++){
    playGame();

}
// create a function that show the winner
let winnerScore = playRound();
function winner(winnerScore){
if (humanScore > computerScore){
    console.log(`the winner is human score`)
}else if (humanScore < computerScore){
    console.log(`the winner is computer score`)
}else {
    console.log(`try again`)
}
}

winner();


