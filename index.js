//blackJack game
let cards = [] 
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard(){

   let randomCard = Math.floor(Math.random() * 13) + 1 // 1 to 13
   
   if (randomCard === 1){
    return  11
   }else if (randomCard > 10){
	return 10
   }else{
	return randomCard
   }
   

}

function startGame(){

	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	isAlive = true
	let sum = firstCard + secondCard
	let cards = [firstCard, secondCard]
    renderGame()

}
function renderGame(){
 
  sumEl.textContent ="sum: " + sum
  for (let i = 0;  i <  cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
  }
    
if (sum < 21){
  message = ("Do you want to draw a card ?")
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

    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

}
