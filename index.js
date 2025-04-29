//blackJack game
let firstCard = 11 
let secondCard = 6 
let sum = firstCard + secondCard 
let cards = [firstCard, secondCard] 
let hasBlackJack = false 
let isAlive = true 
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){ 
  renderGame()
}
function renderGame(){
 
  cardsEl.textContent ="cards: " + cards[0] + " " + cards[1] 
  sumEl.textContent ="sum: " + sum
if (sum < 21){
  message = ("Do you want to draw a card")
}else if (sum === 21){
  message = ("You've got Blackjack")
  hasBlackJack = true
}else if (sum > 21){
  message = ("you lost, Try again?")
  isAlive = false
}
messageEl.textContent = message

}

function newCard(){
  let card = 7
  sum += card
  renderGame()
  cards.push(card)
}
