const card_list = document.querySelectorAll('.card');
let card_array = [].slice.call(card_list);
let flipped = [];
let click = 0;
matched_card = false;

function set_click() {

    for (card of card_array) {
        card.addEventListener("click", card_click, false);
    }
}


function card_click(event) {

    let card_select = event.target;

    if (click < 2 && card_select.classList.contains('card')) {
        show_card(card_select);
        flipped.push(card_select);

        if (flipped.length == 2) {
            match(card_select);
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

function show_card(card_select) {

    card_select.classList.toggle('open');
    card_select.classList.toggle('show');
}

function show_match() {

    flipped[0].classList.toggle('match');
    flipped[1].classList.toggle('match');
}

function match() {

    if (flipped[0].firstElementChild.className
        ===
        flipped[1].firstElementChild.className) {

        show_match();
        matched_card = true;
        flipped = [];
    } else {
        timeout();
    }
}