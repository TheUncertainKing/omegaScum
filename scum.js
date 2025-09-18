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
   drawTest.textContent += " " + deck[randomCard]
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


//initial deal [working]
function dealer() {
    for (let c = 1; c < 14; c++) {
        drawCard()
        }
        startButton.remove()
    }



/*
var randomCard = Math.floor(Math.random() * deck.length)
    //drawTest.textContent += deck[randomCard] + " "
    let cardImg = document.createElement("img")
    cardImg.src = "assets/images/" + randomCard + ".png"
    cardImg.width = 120
    cardImg.id = randomCard
    cardImg.onclick = cardClicked
   document.getElementById("hand-el").appendChild(cardImg)
   deck.splice(randomCard, 1)
*/

//test code


//Groups

//Face Cards
const muppet = [64,65,66,67]
const jack = [56, 57, 58, 59, 60, 61, 62, 63]
const queen = [40, 41, 42, 43, 44, 45, 46,]
const king = [48, 49, 50, 51, 52, 53, 54, 55]
const ace = [0, 1, 2, 3, 104, 105, 106, 107]


//Numbers


//Suits


//Card Detection

let selectedNumber = 0

let selectedSuit = 0

var cardNumber = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Muppet"]

var cardSuit = ["Skulls", "Moons","Spoons", "Stars", "Spades", "Diamonds", "Hearts", "Clubs" + ""]

var cardName = cardNumber[selectedNumber] + " of " +  cardSuit[selectedSuit]



function testButton() { 
    selectedNumber = 10
    selectedSuit = 8
    console.log(cardName)
    drawTest.textContent = cardName
}



var playHand = 0

playedCards = ["Played Cards: "]



//Playing Game

let cardClicked = function() {
    playHand = (Number(this.id))
    console.log(Number(this.id))
    if (muppet.includes(playHand)) {
        drawTest.textContent = "Muppet"
     } else
     drawTest.textContent = this.id
}


   if (jack.includes(playHand[1])) {
        cardNumber = "Jack"
     }else if (queen.includes(playHand[1])) {
        cardNumber = "Queen"
     } else if (king.includes(playHand[1])) {
        drawTest.textContent = "King"
     }


     //Play Card
function playedHand() {
    playedCards.push(" " + cardName)


    drawTest.textContent = playedCards
    let cardPlayed = document.createElement("img")
   cardPlayed.src = "assets/images/" + playHand + ".png"
   cardPlayed.width = 120
   cardPlayed.id = playHand
   document.getElementById("discard-el").appendChild(cardPlayed)
   //remove card from hand
   document.getElementById("hand-el").removeChild(cardPlayed)
}



