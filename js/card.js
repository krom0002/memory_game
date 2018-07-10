// array for flipped cards
let flipped = [];

// matched card conditional
let matched_card = false;

// // from mike whatts video open and show card on click
function flip_card() {
card_array.forEach(function(card) {
    card.addEventListener('click', function(e) {
        show_card(card);
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