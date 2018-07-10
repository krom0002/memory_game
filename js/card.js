



// from mike whatts video open and show card on click
// card_array.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         card.classList.add('open', 'show');
//     });
// });



// select start button element
let start_button = document.querySelector(".start_button");

// add click event to start button
start_button.addEventListener("click", start_game);




// shuffles deck, writes to deck, and starts timmer
function start_game() {
    shuffle(card_array);
    console.log("yes");
    console.log(card_list);
    console.log(card_array);

    write_deck();
    // console.log(card_list);
    // console.log(card_array);
    // start timmer
}