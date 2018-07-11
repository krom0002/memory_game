
// select all card elements
let card_list = document.querySelectorAll('.deck li');

// converts node list to array
let card_array = [].slice.call(card_list);

// select the deck element
let deck = document.querySelector('.deck');

// slect the icon element
let card = document.createElement('i');


function start_click() {
// select start button element
let start_button = document.querySelector(".start_button");

// add click event to start button
start_button.addEventListener("click", start_game);
}

start_click();

// shuffles deck, writes to deck, and starts timmer
function start_game() {

    shuffle(card_array);    
    write_deck();
    flip_card();
            
    // start timmer
}

function reset_click() {
    // select reset button element
    let reset_button = document.querySelector(".reset_button");
    
    // add click event to reset button
    reset_button.addEventListener("click", reset_game);
    }
    
    reset_click();

// shuffles deck, writes to deck, stops timmer, and launches give up modal
function reset_game() {

    clear_deck();
    write_deck();
    shuffle(card_array);   
    
    // end timmer
    // give up modal
}







// main click event (or load event?)



// count clicks
    
   


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
