let moves = 7;
let star = 3;
let star_List = document.querySelectorAll('.stars li');


function move_count() {
    moves++;
    const moves_Text = document.querySelector('.moves');
    moves_Text.innerHTML = "Moves : " + moves;
    check_Score();
}


function check_Score() {

    if (moves === 10 || moves ===20
    ) {
        hide_Star();
    }
}


function hide_Star() {

    for (star of star_List) {
        if (star.style.display !== 'none') {
            star.style.display = 'none';
            star--;
            break;
        }
    }
}

function game_Alert() {
    const modal = document.querySelector('.game_Alet');
    modal.classList.toggle('hide');
}

function game_Over() {

    if (match_count === 1) {
        game_Alert();
    }
}






//  game_Alert();
//  game_Alert();