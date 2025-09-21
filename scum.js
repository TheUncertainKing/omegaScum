//variables


const trump = ["skulls","moons","spoons","stars","spades","hearts","clubs"]

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
const nine = [32, 33, 34, 35, 71, 72, 73, 75]
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
    selectedValue: 0,
    lastValue: 0,
    lastNumber: 0, 
    lastSuit: 0,
    deselect: -1,
    value: [],
    devalue: -1,
    ammount: 0,
    multiple: 0,
    hasMuppet: false,
    get name() {
        return cardNumber[this.selectedNumber] + cardSuit[this.selectedSuit]
    }
}

let selectedCards = []


//Other Variables

const handEl = document.getElementById("hand-el")
const discardEl = document.getElementById("discard-el")

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
   let drawnCardID = deck[randomCard]
   cardImg.onclick = cardClicked
   

    if (muppet.includes(drawnCardID)) {
        cardImg.classList.add("muppet")
     } 
     //Numbers
      else if (two.includes(drawnCardID)) {
        cardImg.classList.add("two")
     } else if (ace.includes(drawnCardID)) {
        cardImg.classList.add("ace")
     } else if (king.includes(drawnCardID)) {
        cardImg.classList.add("king")
     } else if (queen.includes(drawnCardID)) {
        cardImg.classList.add("queen")      
     } else if (jack.includes(drawnCardID)) {
        cardImg.classList.add("jack")
     } else if (ten.includes(drawnCardID)) {
        cardImg.classList.add("ten")
     } else if (nine.includes(drawnCardID)) {
        cardImg.classList.add("nine")
     } else if (eight.includes(drawnCardID)) {
        cardImg.classList.add("eight")
     } else if (seven.includes(drawnCardID)) {
        cardImg.classList.add("seven")
     } else if (six.includes(drawnCardID)) {
        cardImg.classList.add("six")
     } else if (five.includes(drawnCardID)) {
        cardImg.classList.add("five")
     } else if (four.includes(drawnCardID)) {
        cardImg.classList.add("four")
     } else if (three.includes(drawnCardID)) {
        cardImg.classList.add("three")
     }
     //Suits
     if (skulls.includes(drawnCardID)){
        cardImg.classList.add("skulls")
     } else if (moons.includes(drawnCardID)){
        cardImg.classList.add("moons")
     } else if (spoons.includes(drawnCardID)){
        cardImg.classList.add("spoons")
     } else if (stars.includes(drawnCardID)){
        cardImg.classList.add("stars")
     } else if (spades.includes(drawnCardID)){
        cardImg.classList.add("spades")
     } else if (hearts.includes(drawnCardID)){
        cardImg.classList.add("hearts")
     } else if (diamonds.includes(drawnCardID)){
        cardImg.classList.add("diamonds")
     } else if (clubs.includes(drawnCardID)){
        cardImg.classList.add("clubs")
     }

   
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
        let passBtn = document.getElementById("passBtn")
        let scumTitle = document.getElementById("scumTitle-el")
        scumTitle.style.fontSize= "300%"
        drawBtn.style.visibility = 'visible'
        playCardBtn.style.visibility = 'visible'
        passBtn.style.visibility = 'visible'
    }



const royalFlush = {
    ammount: 0,
    countains: [muppet, ace, king, queen, jack],
    containsValue: [14, 12, 11, 10, 9],
    hand: []
}

 
let playHand = 0


//Flush Check



//Playing Game


function select() {
    document.getElementById(playHand).style.marginBottom = 20
    selectedCards.push(playHand)
    card.ammount ++
    
}

function deselect() {
    
    document.getElementById(playHand).style.marginBottom = 0
    selectedCards.splice(card.deselect, 1)
    card.value.splice(card.devalue, 1)
    card.ammount -= 1
    //RF
    if (ace.includes(playHand) || king.includes(playHand) || queen.includes(playHand) || jack.includes(playHand)) {
        royalFlush.ammount --
    }
    if (muppet.includes(playHand)) {
        royalFlush.ammount --
        card.hasMuppet = false
    }
    
}

function testButton() { 
    drawTest.textContent = deselect()
    
    
}

//Play Card
let cardClicked = function() {
    playHand = (Number(this.id))
    console.log(Number(this.id))
    playValue = valueCheck()
    card.deselect = selectedCards.indexOf(playHand)
    //card.devalue = card.value.indexOf(playValue)

    if (selectedCards.includes(playHand)) {
    deselect()
    displayCard()
    } else if (card.ammount <= 0 || card.value[0] === playValue || playValue === 14) {
    select()
    
    if (muppet.includes(playHand)) {
        card.selectedNumber = 13
        card.selectedSuit = 8
        card.hasMuppet = true
        card.value.push(14)
        royalFlush.ammount ++
        
        
     } 
     //Numbers
      else if (two.includes(playHand)) {
        card.value.push(13)
        
        card.selectedNumber = 1
        
     } else if (ace.includes(playHand)) {
        card.value.push(12)
        royalFlush.ammount ++
        card.selectedNumber = 0

     } else if (king.includes(playHand)) {
        card.value.push(11)
        royalFlush.ammount ++
        card.selectedNumber = 12

     } else if (queen.includes(playHand)) {
        card.value.push(10)
        royalFlush.ammount ++
        card.selectedNumber = 11

        
        
     } else if (jack.includes(playHand)) {
        card.value.push(9)
        royalFlush.ammount ++
        card.selectedNumber = 10


     } else if (ten.includes(playHand)) {
        card.value.push(8)

        card.selectedNumber = 9

        
        
     } else if (nine.includes(playHand)) {
        card.value.push(7)
        
        card.selectedNumber = 8

        
        
     } else if (eight.includes(playHand)) {
        card.value.push(6)

        card.selectedNumber = 7

        
        
     } else if (seven.includes(playHand)) {
        card.value.push(5)

        card.selectedNumber = 6

        
        
     } else if (six.includes(playHand)) {
        card.value.push(4)

        card.selectedNumber = 5

        
        
     } else if (five.includes(playHand)) {
        card.value.push(3)

        card.selectedNumber = 4
        
     } else if (four.includes(playHand)) {
        card.value.push(2)

        card.selectedNumber = 3

        
        
     } else if (three.includes(playHand)) {
        card.value.push(1)

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
    
     displayCard()
     if (royalFlush.ammount == 4){
        if (card.hasMuppet = true) {
        card.value.push(15)
        royalFlush.ammount = 0
        card.hasMuppet = false
        for (let i = 0; i < 5; i ++) {
        royalFlush.countains.pop()
        } 
        } else 
            card.value.push(16) 
            royalFlush.ammount = 0
            for (let i = 0; i < 5; i ++) {
            royalFlush.countains.pop()
     }
    }
}

}


//Display Card
function displayCard() {
    valueCheck()
     drawTest.textContent = "Ammount: " + card.ammount + " " + "Multiple: " + card.multiple + " Value: " + card.value + " Flush: " + royalFlush.ammount + " Muppet: " + card.hasMuppet
}



     //Play Card
     playedCards = ["Played Cards: "]


    function playedHand() {

    //Is Card better

    //Multiples
    if (card.ammount >= 2 && card.value[0] > card.lastValue) {
        //checks what multiple it is
        if (card.multiple === 0 || card.multiple === card.ammount) {
        card.lastValue = card.value[0]
        card.multiple = card.ammount
        card.ammount = 0
        card.hasMuppet = false
        for (let i = 0; i < 10; i += 1) {
            playedCards.push(" " +card.name)     
            card.value.shift()
            //Moves Card
            let movingCard = selectedCards[0]
            selectedCards.shift()
            let cardPlayed = document.createElement("img")
            cardPlayed.src = "assets/images/" + movingCard + ".png"
            cardPlayed.width = 120
            let removeCard = document.getElementById(movingCard)
            cardPlayed.id = movingCard
            removeCard.remove()
            document.getElementById("discard-el").appendChild(cardPlayed)
            card.ammount = 0
            drawTest.textContent = playHand
            displayCard()
        }
        } //Singles
    } else if (card.value[0] > card.lastValue && card.multiple <= 1) {
        card.lastValue = card.value[0]
        card.multiple = card.ammount
        card.ammount = 0
        playedCards.push(" " +card.name)
        card.value.shift()
        //Grabs Card Info
        let movingCard = selectedCards[0]
        selectedCards.shift()
        let cardPlayed = document.createElement("img")
        cardPlayed.src = "assets/images/" + movingCard + ".png"
        cardPlayed.width = 120
        let removeCard = document.getElementById(movingCard)
        cardPlayed.id = movingCard
        removeCard.remove()
        document.getElementById("discard-el").appendChild(cardPlayed)
        drawTest.textContent = playHand
        card.hasMuppet = false
        } 
}
    
//Value Check
function valueCheck() {
    if (muppet.includes(playHand)) {
        card.selectedValue = 14
        return 14
     } else if (two.includes(playHand)) {
        card.selectedValue = 13
        return 13
     } else if (ace.includes(playHand)) {
        card.selectedValue = 12
        return 12
     } else if (king.includes(playHand)) {
        card.selectedValue = 11
        return 11
     } else if (queen.includes(playHand)) {
        card.selectedValue = 10    
        return 10 
     } else if (jack.includes(playHand)) {
        card.selectedValue = 9
        return 9
     } else if (ten.includes(playHand)) {
        card.selectedValue = 8
        return 8
     } else if (nine.includes(playHand)) {
        card.selectedValue = 7
        return 7
     } else if (eight.includes(playHand)) {
        card.selectedValue = 6
        return 6
     } else if (seven.includes(playHand)) {
        card.selectedValue = 5
        return 5
     } else if (six.includes(playHand)) {
        card.selectedValue = 4
        return 4
     } else if (five.includes(playHand)) {
        card.selectedValue = 3
        return 3
     } else if (four.includes(playHand)) {
        card.selectedValue = 2
        return 2
     } else if (three.includes(playHand)) {
        card.selectedValue = 1
        return 1
     }
    }

if (selectedCards.includes(this.id)){
selectedCards.splice
} else 
    selectedCards



//Multiplayer Support 



const player = {

}



//if (card.selectedValue === )


/*
    //Play Hand is selected cards ID
    playHand = (Number(this.id))
    console.log(Number(this.id))


    if (muppet.includes(drawnCardID)) {
        cardImg.classList.add("muppet")
     } 
     //Numbers
      else if (two.includes(drawnCardID)) {
        cardImg.classList.add("two")
     } else if (ace.includes(drawnCardID)) {
        cardImg.classList.add("ace")
     } else if (king.includes(drawnCardID)) {
        cardImg.classList.add("king")
     } else if (queen.includes(drawnCardID)) {
        cardImg.classList.add("queen")      
     } else if (jack.includes(drawnCardID)) {
        cardImg.classList.add("jack")
     } else if (ten.includes(drawnCardID)) {
        cardImg.classList.add("ten")
     } else if (nine.includes(drawnCardID)) {
        cardImg.classList.add("nine")
     } else if (eight.includes(drawnCardID)) {
        cardImg.classList.add("eight")
     } else if (seven.includes(drawnCardID)) {
        cardImg.classList.add("seven")
     } else if (six.includes(drawnCardID)) {
        cardImg.classList.add("six")
     } else if (five.includes(drawnCardID)) {
        cardImg.classList.add("five")
     } else if (four.includes(drawnCardID)) {
        cardImg.classList.add("four")
     } else if (three.includes(drawnCardID)) {
        cardImg.classList.add("three")
     }
     //Suits
     if (skulls.includes(drawnCardID)){
        cardImg.classList.add("skulls")
     } else if (moons.includes(drawnCardID)){
        cardImg.classList.add("moons")
     } else if (spoons.includes(drawnCardID)){
        cardImg.classList.add("spoons")
     } else if (stars.includes(drawnCardID)){
        cardImg.classList.add("stars")
     } else if (spades.includes(drawnCardID)){
        cardImg.classList.add("spades")
     } else if (hearts.includes(drawnCardID)){
        cardImg.classList.add("hearts")
     } else if (diamonds.includes(drawnCardID)){
        cardImg.classList.add("diamonds")
     } else if (clubs.includes(drawnCardID)){
        cardImg.classList.add("clubs")
     }
*/