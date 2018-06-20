// main click event (or load event?)



// count clicks
    
   
var allCards = document.querySelectorAll('.card');

allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {
        card.classList.add('open', 'show');
    });
});

// listen for first click
    // start timer method

    // second click event
    // is a match
        // yes, stay flipped
        // keep stats
            // no, action color/shake
            // turn back over
        // reset two click count method
            // one click
            // two click
    //game coplete test (can only be 8 matches)
        // win message  (alert)
        // stat message
        // grade message
            //grade system 
                // -- 16 clicks to 26 (3 stars)
                // -- 26 clicks to 36 (2 stars)
                // -- 36 clicks to 46 (1 stars)
                // -- 46 clicks and up (no stars)
        // play agin message? (alert)
            //button resets
                // call shuffle formula
                // reset main click event


/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
