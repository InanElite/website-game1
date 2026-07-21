console.log("JavaScript is working");
let coins = 0;

const coinDisplay = document.getElementById("coin-counter");
const button = document.getElementById("button0");

button.onclick = function(){

    coins++;

    coinDisplay.textContent = `🪙 Coins: ${coins}`;

}
