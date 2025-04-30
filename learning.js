let playerOneTime = 89 
let playerTwoTime= 98

// function gets the raCE TIME 
//if statements run the conditions 
//let fastesttime stores the variable 
//variable can be extrapolated

function getFastestTime(){

    if (playerOneTime < playerTwoTime){
        return playerOneTime
        console.log("player 1 wins")
    }else if (playerTwoTime < playerOneTime){
        return playerTwoTime
        console.log("player 2 wins")
    }else{
        return playerOneTime
        console.log("yall both won")
    }
}
let fastestRaceTime = getFastestTime()
console.log(getFastestTime())



//math.random() features
// getting random card 
//casino and computer games
//cyber security

let randomNumber = Math.random * 6 //now its 0 - 5.99999
let flooredNumber = Math.floor
let ceilingNumber = Math.ceil
let maxNumber = Math.max
let minNumber = Math.min
let roundNumber = Math.round


let thisNumber = Math.floor (Math.random() * 6)
// num starts from 0 to 6 aka whole numbers(above)

function rollDice(){
// adding a plus 1 makes the start number 1
let dice = Math.floor (Math.random() * 6) + 1
return dice
}

