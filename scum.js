//variables

const handEl = document.getElementById("hand-el")
const discardEl = document.getElementById("discard-el")

let player = {
    name: "User",
    isKing: false,
    isScum: false
}

let drawTest = document.getElementById("draw-test")

var deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]

var staticDeck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]





//draw card [working]
function drawCard() {
    if (deck.length <= 0) {
        drawTest.textContent += "Empty"
    } else {
   var randomCard = Math.floor(Math.random() * deck.length)
   //drawTest.textContent += " " + deck[randomCard]
   let cardImg = document.createElement("img")
   cardImg.src = "assets/images/" + deck[randomCard] + ".png"
   cardImg.width = 120
   cardImg.id = deck[randomCard]
   cardImg.onclick = cardClicked
   document.getElementById("hand-el").appendChild(cardImg)
   deck.splice(randomCard, 1)
    }
}


const startButton = document.getElementById("strtbtn")


//Start Game
function dealer() {
    for (let c = 1; c < 14; c++) {
        drawCard()
        }
        startButton.remove() 
        let drawBtn = document.getElementById("drawBtn")
        let playCardBtn = document.getElementById("playCardBtn")
        let scumTitle = document.getElementById("scumTitle-el")
        scumTitle.style.fontSize= "300%"
        drawBtn.style.visibility = 'visible'
        playCardBtn.style.visibility = 'visible'
    }






//Groups

//Face Cards
const muppet = [64,65,66,67]
const jack = [56, 57, 58, 59, 60, 61, 62, 63]
const queen = [40, 41, 42, 43, 44, 45, 46,]
const king = [48, 49, 50, 51, 52, 53, 54, 55]
const ace = [0, 1, 2, 3, 104, 105, 106, 107]

//Numbers
const two = [4, 5, 6, 7, 100, 101, 102, 103]
const three = [8, 9, 10, 11, 96, 97, 98, 99]
const four = [12, 13, 14, 15, 92, 93, 94, 95]
const five = [16, 17, 18, 19, 88, 89, 90, 91]
const six = [20, 21, 22, 23, 84, 85, 86, 87]
const seven = [24, 25, 26, 27, 80, 81, 82, 83]
const eight = [28, 29, 30, 31, 76, 77, 78, 79]
const nine = [32, 33, 34, 35, 71, 72, 72, 75]
const ten = [36, 37, 38, 39, 68, 69, 70, 71]

//Suits
const skulls = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 47, 55, 63]
const moons = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 44, 52, 60]
const spoons = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 46, 54, 62]
const stars = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 45, 53, 61]
const spades = [68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 40, 48, 56]
const hearts = [69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 41, 49, 57]
const diamonds = [70, 74, 78, 81, 86, 90, 94, 98, 102, 106, 42, 50, 58]
const clubs = [71, 75, 79, 82, 87, 91, 95, 99, 103, 107, 43, 51, 59]

//Card Detection



var cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Muppet"]

var cardSuit = [" of Skulls", " of Moons"," of Spoons", " of Stars", " of Spades", " of Hearts", " of Diamonds", " of Clubs", ""]

const card = {
    selectedNumber: 0,
    selectedSuit: 0,
    lastValue: 0,
    lastNumber:0, 
    lastSuit:0,
    value: 0,
    get name() {
        return cardNumber[this.selectedNumber] + cardSuit[this.selectedSuit]
    }
}




function testButton() { 
    selectedNumber = 10
    selectedSuit = 8
    console.log(cardName)
    drawTest.textContent = cardName
}



var playHand = 0


//Flush Check

royalFlush = 0


//Playing Game

//Play Card
let cardClicked = function() {
    playHand = (Number(this.id))
    console.log(Number(this.id))
    if (muppet.includes(playHand)) {
        card.selectedNumber = 13
        card.selectedSuit = 8
        card.value = 14
     } 
     //Numbers
      else if (two.includes(playHand)) {
        card.value = 13
        
        card.selectedNumber = 1
        
     } else if (ace.includes(playHand)) {
        card.value = 12
        
        card.selectedNumber = 0
              
     } else if (king.includes(playHand)) {
        card.value = 11

        card.selectedNumber = 12
        
     } else if (queen.includes(playHand)) {
        card.value = 10
        
        card.selectedNumber = 11
        
     } else if (jack.includes(playHand)) {
        card.value = 9

        card.selectedNumber = 10
        
     } else if (ten.includes(playHand)) {
        card.value = 8

        card.selectedNumber = 9
        
     } else if (nine.includes(playHand)) {
        card.value = 7
        
        card.selectedNumber = 8
        
     } else if (eight.includes(playHand)) {
        card.value = 6

        card.selectedNumber = 7
        
     } else if (seven.includes(playHand)) {
        card.value = 5

        card.selectedNumber = 6
        
     } else if (six.includes(playHand)) {
        card.value = 4

        card.selectedNumber = 5
        
     } else if (five.includes(playHand)) {
        card.value = 3

        card.selectedNumber = 4
        
     } else if (four.includes(playHand)) {
        card.value = 2

        card.selectedNumber = 3
        
     } else if (three.includes(playHand)) {
        card.value = 1

        card.selectedNumber = 2        
     }
     //Suits
     if (skulls.includes(playHand)){
        card.selectedSuit = 0
     } else if (moons.includes(playHand)){
        card.selectedSuit = 1
     } else if (spoons.includes(playHand)){
        card.selectedSuit = 2
     } else if (stars.includes(playHand)){
        card.selectedSuit = 3
     } else if (spades.includes(playHand)){
        card.selectedSuit = 4
     } else if (hearts.includes(playHand)){
        card.selectedSuit = 5
     } else if (diamonds.includes(playHand)){
        card.selectedSuit = 6
     } else if (clubs.includes(playHand)){
        card.selectedSuit = 7
     }
     //Display Card
     drawTest.textContent = card.name
     if (royalFlush == 4){
        //royal flush code
     }
}
  

     //Play Card
     playedCards = ["Played Cards: "]


    function playedHand() {
    royalFlush = 0
    //Is Card better
    if (card.value > card.lastValue) {
        card.lastValue = card.value
        playedCards.push(" " +card.name)
        //drawTest.textContent = playedCards
        let cardPlayed = document.createElement("img")
        cardPlayed.src = "assets/images/" + playHand + ".png"
        cardPlayed.width = 120
        cardPlayed.id = playHand
        //Moves Card to Discard
        let removeCard = document.getElementById(playHand)
        removeCard.remove()
        document.getElementById("discard-el").appendChild(cardPlayed)
    }
}



