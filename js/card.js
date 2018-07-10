



// // from mike whatts video open and show card on click

function flip_card() {
card_array.forEach(function(card) {
    card.addEventListener('click', function(e) {
        card.classList.add('open', 'show');
    });
});
}





// select start button element
let start_button = document.querySelector(".start_button");

// add click event to start button
start_button.addEventListener("click", start_game);


// shuffles deck, writes to deck, and starts timmer
function start_game() {
    shuffle(card_array);
    
    write_deck();
    flip_card();
        
    // start timmer
}

// select reset button element
let reset_button = document.querySelector(".reset_button");

// add click event to reset button
reset_button.addEventListener("click", reset_game);


// shuffles deck, writes to deck, and starts timmer
function reset_game() {
    shuffle(card_array);
    write_deck();    
    // end timmer
    // give up modal
}

  
        