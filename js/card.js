


// var allCards = document.querySelectorAll('.card');

card_array.forEach(function(card) {
    card.addEventListener('click', function(e) {
        card.classList.add('open', 'show');
    });
});

// select start button element
let start_button = document.querySelector(".start_button");
// add click event to start button
start_button.addEventListener("click", start_game);

// starts game on start button click
// shuffles deck and starts timmer
function start_game() {
    shuffle(card_array);
    console.log("yes");

    write_card();
    // start timmer
}

// let allCards = document.querySelectorAll('.card');
// // const card = document.querySelectorAll('.card');

// allCards.addEventListener("click", flip_card);

// function flip_card() {

//     allCards.classList.toggle('open');
//     allCards.classList.toggle('show'); 

// }