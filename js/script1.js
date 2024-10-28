
function getComputerChoice(array){
    // get random index from array
    const Random = Math.floor(Math.random() * array.length);
    // get random item
    const randomItem =array[Random];
    return randomItem;
}

const array =['rock','paper','scissor'];

    // const userInput = document.querySelector('div');
    // userInput.addEventListener('click',callback);

    // function callback(event){
    //     let target = event.target;

    //         let rock = document.querySelector('#roc').value;
    //         let paper = document.querySelector('#pap').value;
    //         let scissor = document.querySelector('#sci').value;
            
    //         let clickValue ;
        
           
    //             switch(target.id){
    //                 case 'roc':
    //                    clickValue = rock;
    //                     break;
    //                 case 'pap':
    //                     clickValue = paper;
    //                     break;
    //                 case 'sci':
    //                     clickValue = scissor;
    //                     break;
    //             }
    //         console.log(clickValue);
               
    // }
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
    // Use the selectedValue in another function here
    useClickValue(selectedValue);
  } else {
    console.log("No matching button clicked");
  }
});

function useClickValue(value) {
  console.log("Clicked value:", value);
  // Perform actions based on the clicked value
}


   




// // count human and computer score 
// let humanScore = 0;
// let computerScore = 0;

// // cerate single round 
// function playRound(computerChoice,humanChoice){
//     //....play
//     if (computerChoice === 'rock'){
//         if (humanChoice == 'paper'){
//             console.log(`your choice is ${humanChoice} and you win`);
//            return humanScore +=1;

//         }else if (humanChoice == 'scissor'){
//             console.log(`your choice is ${humanChoice} and you loss`);
//            return computerScore += 1;
//         }
//         else {console.log('try again')}
//     }
//     else if (computerChoice === 'paper'){
//         if (humanChoice == 'rock'){
//             console.log(`your choice is ${humanChoice} and you win`);
//            return humanScore +=1;
//         }else if (humanChoice == 'scissor'){
//             console.log(`your choice is ${humanChoice} and you loss`);
//            return computerScore +=1;
//         }else{console.log('try again')}
 
//     }
//     else if (computerChoice === 'scissor'){
//         if (humanChoice == 'paper'){
//             console.log(`your choice is ${humanChoice} and you loss`);
//           return  humanScore +=1;
//         }else if (humanChoice == 'rock'){
//             console.log(`your choice is ${humanChoice} and you win`);
//            return computerScore +=1;
//         }else {console.log('try again')}
//     }

// }


//     function playGame(){
//         const computerSelection  = getComputerChoice(array);
//         const humanSelection  = getHumanChoice();
//         playRound(computerSelection,humanSelection);
//     }  
//     playGame();
// // create a function that show the winner
// let winnerScore = playRound();
// function winner(winnerScore){
// if (humanScore > computerScore){
//     console.log(`the winner is human score`)
// }else if (humanScore < computerScore){
//     console.log(`the winner is computer score`)
// }else {
//     console.log(`try again`)
// }
// }

// winner();


