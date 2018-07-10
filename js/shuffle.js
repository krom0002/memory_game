

// select all card elements
let card_list = document.querySelectorAll('.deck li');

// converts node list to array
let card_array = [].slice.call(card_list);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, 
                       temporaryValue, 
                       randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// select the deck element
let deck = document.querySelector('.deck');

function write_deck() {    

    let card = document.createElement('i');

    for (card of card_array) {
        
        deck.appendChild(card);
    }
    
}