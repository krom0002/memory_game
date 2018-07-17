const card_list = document.querySelectorAll('.card');
let card_array = [].slice.call(card_list);
let flipped = [];
let click = 0;
matched_card = false;
match_count = 0;

function set_click() {

    for (card of card_array) {
        card.addEventListener("click", card_click, false);
    }
}

function card_click(event) {

    let card_select = event.target;

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

function timeout() {

        setTimeout(() => {
            show_card(flipped[0]);
            show_card(flipped[1]);
            flipped = [];
        }, 1500);
}

function add_flip_Card(card_select) {

    if(click <= 2) {

    flipped.push(card_select);
    click++;
    }
}

function show_card(card_select) {

    card_select.classList.toggle('open');
    card_select.classList.toggle('show');
}

function show_match() {

    flipped[0].classList.toggle('match');
    flipped[1].classList.toggle('match');
    match_count++;
    console.log('match' + match_count);
}

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