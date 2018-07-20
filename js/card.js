const card_list = document.querySelectorAll('.card');
let card_array = [].slice.call(card_list);
let flipped = [];
let click = 0;
matched_card = false;
match_count = 0;

// set click event on card
function set_click() {

    for (card of card_array) {
        card.addEventListener("click", card_check, false);
    }
}

// ensures only two cards can be clicked in a move
function card_check(event) {

    if (click == 0 || click == 1) {

        card_click(event);

        if(click == 2 && !matched_card == true) {

            for (card of card_array) {

            card.removeEventListener("click", card_click, false);
            }
        }
    }
}

// main card click event actions
function card_click(event) {

    let card_select = event.target;

    click++;
    add_flip_Card(card_select);
    show_card(card_select);

    if (flipped.length == 2) {
        match(card_select);
        move_count();
    }
}

// set timeout on card move
function timeout() {

    setTimeout(() => {
        show_card(flipped[0]);
        show_card(flipped[1]);
        flipped = [];
        click = 0;
    }, 1500);
}

// adds flipped cards to an array
function add_flip_Card(card_select) {

     flipped.push(card_select);
}

// flips card
function show_card(card_select) {

    card_select.classList.toggle('open');
    card_select.classList.toggle('show');
}

// checks for matched
function match() {

    if (flipped[0].firstElementChild.className
        ===
        flipped[1].firstElementChild.className) {

        show_match();
        matched_card = true;
        game_Over();
        flipped = [];
        click = 0;

    } else {
        timeout();
        matched_card = false;
    }
}

// shows matched card
function show_match() {

    flipped[0].classList.toggle('match');
    flipped[1].classList.toggle('match');
    match_count++;
}