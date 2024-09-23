console.log('let try something ermi');
function getComputerChoice(arr){
    // get random index from array
    const Random = Math.floor(Math.random() * arr.length);
    // get random item
    const randomItem =arr[Random];
    return randomItem;
}
const array =['rock','paper','scissor'];
const result = getComputerChoice(array);
console.log(result);

// getting input from user
const userInput = prompt(`write one of them , rock ,paper,scissor`,'');

function getHumanChoice(Input){
return userInput;
}
let showInput = getHumanChoice(userInput);
console.log(showInput);


