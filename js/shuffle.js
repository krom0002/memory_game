// select the deck element
let deck = document.querySelector('.deck');

// slect the icon element
let card = document.createElement('i');

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

// writes new shuffeled cards to deck
function write_deck() {

    for (card of card_array) {

        deck.appendChild(card);
    }
}