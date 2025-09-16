//variables

const handEl = document.getElementById("hand-el")

   

let player = {
    name: "User",
    isKing: false,
    isScum: false
}

let drawTest = document.getElementById("draw-test")

var deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]






//draw card [working]
function drawCard() {
    if (deck.length <= 0) {
        drawTest.textContent += "Empty"
    } else {
   var randomCard = Math.floor(Math.random() * deck.length)
   drawTest.textContent += deck[randomCard] + " "
   deck.splice(randomCard, 1)
        //actual card
        let cardImg = document.createElement("img")
   cardImg.src = "assets/images/" + deck[randomCard] + ".png"
   cardImg.width = 150
   document.getElementById("hand-el").appendChild(cardImg)
    }
}


//initial deal [working]
function dealer() {
    if (deck.length <= 0) {
        drawTest.textContent += "Empty"
    } else {
    for (let c = 1; c < 14; c++) {
    var randomCard = Math.floor(Math.random() * deck.length)
    drawTest.textContent += deck[randomCard] + " "
    let cardImg = document.createElement("img")
    cardImg.src = "assets/images/" + deck[randomCard] + ".png"
    cardImg.width = 150
   document.getElementById("hand-el").appendChild(cardImg)
   deck.splice(randomCard, 1)
        }
    }
}

function cardData() {
    return randomCard
}





//test code


//Groups

//Muppets
const muppet = [64, 65, 66, 67]


