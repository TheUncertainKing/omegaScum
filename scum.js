let deck = [0]

//adds cards to deck
for (let c = 1; c < 108; c++){
    deck.push = c
    console.log(c)
}

function drawCard() {
   let randomCard = Math.floor(Math.random() * deck.length)
   console.log(randomCard)
}

drawCard()
 //deck.splice(deck.indexOf(1), 1)

 