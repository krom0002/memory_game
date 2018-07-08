


// var allCards = document.querySelectorAll('.card');

// allCards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         card.classList.add('open', 'show');
//     });
// });

// select start button element
let start_button = document.querySelector(".start_button");
// add click event to start button
start_button.addEventListener("click", start_game);

// starts game on start button click
// shuffles deck and starts timmer
function start_game() {
    shuffle(card_array);
    // start timmer
}