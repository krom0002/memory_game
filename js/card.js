// array for flipped cards
let flipped = [];

// matched card conditional
let matched_card = false;

// // from mike whatts video open and show card on click
function flip_card() {
card_array.forEach(function(card) {
    card.addEventListener('click', function(e) {
        
        full_move(card);
        add_flipped(card);
        
        console.log(add_flipped)
    });
});
}

// shows card by toggling open and show class
function show_card(card) {

    card.classList.toggle('open');
    card.classList.toggle('show');
}

// adds flipped card to flipped array
function add_flipped(card) {

    flipped.push(card);
    
}

// clears deck of matched cards -- used with rest button
function clear_deck() {    

    for (card of card_array) {
        
        card.classList.toggle('match', !!matched_card);
    }    
}

function match() {

    if (flipped[0].card.i 
        === 
        flipped[1].card.i
    ) {

        flipped[0].classList.toggle('match');
        flipped[1].classList.toggle('match');
        
        flipped = [];
    } 
}


function full_move(card) {

    if (flipped.length <= 2) {
        show_card(card);
        match(card);
    
        timeout();
    }
} 

function timeout() {

    setTimeout(() => {

        show_card(flipped[0]);
        show_card(flipped[1]);
        flipped = [];
    }, 2000);
}