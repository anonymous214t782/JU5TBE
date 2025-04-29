//let count = 0
//console.log(count)
//control k + c for mass comment.
let myAge = 19
let dogratio = 7
let mydogAge = myAge * dogratio
console.log(mydogAge)
//code ran without let so...
stock_market = 50
stock_market +=  50
stock_market -=  75
stock_market +=  25
console.log(stock_market)
//the increment works in tandem with html onclick="increment"
function increment(){
  console.log('the button was clicked') 
}
increment()
function countdown(){
  console.log(5)
  console.log(4)
  console.log(3)
  console.log(2)
  console.log(1)
}

countdown()
//helps compress code that might be used later.

let lap1 = 40
let lap2 = 30
let lap3 = 30

function laptime(){
   console.log
   fulllap = (lap1 + lap2 + lap3)
   console.log(fulllap)
   //fulllap cannot be referenced outside this confinement
}
//console.log(fulllap) wont work since this is outside conf
laptime()

//always try the simplest way
let count = 0
let prev = "Prevous count: "

function incrementlap(){
 count += 1
 console.log(count)
}
incrementlap()
incrementlap()
incrementlap()

function save(){
  let countstr = prev + count + " - "
  //the prev should be html
  console.log(countstr)
  count = 0
}
save()
incrementlap()
save()
//console.log alt mdm for alternative to that lind of code

let name = "Linda"
let greeting = "Hi there"

function welcome() {
  console.log(greeting + ", " + name + "!")
}
welcome()

let myPoints = 3
function addPoints() {
  myPoints += 3
}

function subPoints() {
  myPoints -= 1
}
addPoints()
addPoints()
addPoints()
subPoints()
subPoints()
console.log(myPoints)

let num1 = 8
let num2 = 2
let calc = 0

function add() {
 let calc = num1 + num2
 console.log("sum: " + calc)
}
function sub() {
 let calc = num1 - num2
 console.log("sum: " + calc)
}
function divide() {
 let calc = num1 / num2
 console.log("sum: " + calc)
}

function multiply() { 
 let calc = num1 * num2
 console.log("sum: " + calc)
}
add()
sub()
divide()
multiply()