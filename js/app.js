let button_click = 0;

// sets click event on the start button
function start_click() {
// select start button element
let start_button = document.querySelector(".start_button");

// add click event to start button
start_button.addEventListener("click", start_game);
}
start_click();

// shuffles deck, writes to deck, and starts timmer
function start_game() {

    if (button_click == 0) {
        button_click++;

        shuffle(card_array);
        write_deck();
        set_click();
        game_Over();
        the_timer();
    }
}

// sets click event on reset button
function reset_click() {
    // select reset button element
    let reset_button = document.querySelector(".reset_button");

    // add click event to reset button
    reset_button.addEventListener("click", reset_game);
}
reset_click();

// shuffles deck, writes to deck, stops timmer, and launches give up modal
function reset_game() {

    // clear_deck();
    // write_deck();
    // shuffle(card_array);
    location.reload();
}

