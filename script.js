let coins = 0;

const coinDisplay = document.getElementById("coins");
const button = document.getElementById("button");

button.onclick = function(){

    coins++;

    coinDisplay.textContent = coins;

}
