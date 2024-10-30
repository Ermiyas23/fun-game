function getComputerChoice(array){
    // get random index from array
    const Random = Math.floor(Math.random() * array.length);
    // get random item
    const randomItem =array[Random];
    return randomItem;
}

const array =['rock','paper','scissor'];

const userInput = document.querySelector('div');

function callback(event) {
  let target = event.target.id; // Get the ID directly

  switch (target) {
    case 'roc':
      return document.querySelector('#roc').value;
    case 'pap':
      return document.querySelector('#pap').value;
    case 'sci':
      return document.querySelector('#sci').value;
    default:
      return null; // Handle cases where no matching ID is found
  } 
}

userInput.addEventListener('click', (event) => {
  const selectedValue = callback(event);
  if (selectedValue !== null) {
    playGame(selectedValue); // call playGame with selected value
  } else {
    console.log("No matching button clicked");
  }
});

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return 0; // No score change
    }
  
    const winningConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper',
    };
  
    if (winningConditions[computerChoice] === humanChoice) {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      return computerScore += 1; // Computer scores
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      return humanScore += 1; // Human scores
    }
  }

function playGame(humanChoice){
    const computerSelection  = getComputerChoice(array);
    document.querySelector('#human-score').textContent = playRound(computerSelection,humanChoice);
    document.querySelector('#computer-score').textContent = playRound(computerScore,humanChoice);
    const winnerText = winner(humanScore,computerScore);
    document.getElementById('winner').textContent = winnerText;
}  

// create a function that show the winner
function winner(humanScore,computerScore){
if(humanScore > computerScore){
return "You Win!";
}else if(computerScore > humanScore ){
return "Computer Wins!";
}else{
  return "It's a tie!";
}
}

playGame();


