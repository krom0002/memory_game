const card_list = document.querySelectorAll('.card');
let card_array = [].slice.call(card_list);
let flipped = [];
let click = 0;
matched_card = false;
match_count = 0;

// set click event on card
function set_click() {

    for (card of card_array) {
        card.addEventListener("click", card_click, false);
    }
}

// main card click event actions
function card_click(event) {

    let card_select = event.target;

    // tried to get it to not allow more than two click in a move??
    // not producing the way intended??
    if (click <= 2 && !card_select.classList.contains('match')) {

        show_card(card_select);
        add_flip_Card(card_select);
        console.log(click);

        if (flipped.length == 2) {
            match(card_select);
            console.log(click);
            move_count();
        }
    }
}

// set timeout on card move
function timeout() {

        setTimeout(() => {
            show_card(flipped[0]);
            show_card(flipped[1]);
            flipped = [];
        }, 1500);
}

// adds flipped cards to an array
function add_flip_Card(card_select) {

    if(click <= 2) {

    flipped.push(card_select);
    click++;
    }
}

// flips card
function show_card(card_select) {

    card_select.classList.toggle('open');
    card_select.classList.toggle('show');
}

// shows matched card
function show_match() {

    flipped[0].classList.toggle('match');
    flipped[1].classList.toggle('match');
    match_count++;
    console.log('match' + match_count);
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
    } else {
        timeout();
    }
    click = 0;
}