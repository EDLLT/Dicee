var heading = document.querySelector("h1");

var firstPlayerDiceImage = document.querySelector("#dice1-img")
var secondPlayerDiceImage = document.querySelector("#dice2-img")


function random(range) {
  return Math.floor(Math.random() * range) + 1
}

function shuffleDice(diceImg) {
  var newNumber = random(6);
  diceImg.setAttribute("src", "images\\dice"+ newNumber + ".png")

  return newNumber;
}

function displayWinner(newHeadingText) {
  heading.textContent = newHeadingText;
}

firstDiceNumber = shuffleDice(firstPlayerDiceImage)
secondDiceNumber = shuffleDice(secondPlayerDiceImage)

if (firstDiceNumber > secondDiceNumber) {
  displayWinner("🚩 Player 1 wins! ")
} else if (secondDiceNumber > firstDiceNumber) {
  displayWinner("Player 2 wins! 🚩")
} else if (secondDiceNumber === firstDiceNumber) {
  displayWinner("Draw!")
} else {
  displayWinner("WTF")
}
