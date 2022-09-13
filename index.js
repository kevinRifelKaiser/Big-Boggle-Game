import { dices } from "./assets/dices.js";

// Principal section
const gameSection = document.getElementById("game-section");

const newDices = dices;

// Shuffle array
function shuffle(arr) {
  var i,
      j,
      temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;    
};

// Roll dice function
function rollDice() {
  let randomNumber = Math.random() * 6;
  let result = Math.floor(randomNumber);
  return result;
}


// Shuffle and roll dices
function displayValue(dicesArr) {
  gameSection.innerHTML = [];
  
  const shuffledDices = shuffle(dicesArr);

  shuffledDices.map((element) => {
    let dice = rollDice();
    console.log(dice);
    return(
      gameSection.innerHTML += `<div><p>${element[dice]}</p></div>`
    );
  }); 
}

document.getElementById("mixButton").addEventListener('click', () => displayValue(newDices));



