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
console.log(result);

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
            humanScore ++;

        }else if (humanChoice == 'scissor'){
            console.log(`your choice is ${humanChoice} and you loss`);
            computerScore ++;
        }
        else {console.log('try again')}
    }
    else if (computerChoice === 'paper'){
        if (humanChoice == 'rock'){
            console.log(`your choice is ${humanChoice} and you win`);
            humanScore ++;
        }else if (humanChoice == 'scissor'){
            console.log(`your choice is ${humanChoice} and you loss`);
            computerScore ++;
        }else{console.log('try again')}
 
    }
    else if (computerChoice === 'scissor'){
        if (humanChoice == 'paper'){
            console.log(`your choice is ${humanChoice} and you loss`);
            humanScore ++;
        }else if (humanChoice == 'rock'){
            console.log(`your choice is ${humanChoice} and you win`);
            computerScore ++;
        }else {console.log('try again')}
    }

}

const computerSelection  = getComputerChoice(array);
const humanSelection  = getHumanChoice(userInput);

playRound(computerSelection,humanSelection);
