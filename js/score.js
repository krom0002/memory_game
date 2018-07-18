let moves = 9;
let star = 3;
let star_List = document.querySelectorAll('.stars li');


function move_count() {
    moves++;
    const moves_Text = document.querySelector('.moves');
    moves_Text.innerHTML = "Moves : " + moves;
    hide_Star();
    console.log('star ' + star);
}


function hide_Star() {

    if (moves == 10) {
        star_List[2].style.display = 'none';
        star--;
    } else if (moves == 20) {
        star_List[1].style.display = 'none';
        star--;
    } else if (moves == 30) {
        star_List[0].style.display = 'none';
        star--;
    }
}

function game_Alert() {
    const modal = document.querySelector('.game_Alet');
    modal.classList.toggle('hide');
}

function game_Over() {

    if (match_count === 1) {
        game_Alert();
        alert_close_x();
        add_stats();
        console.log(star);
    }
}

// write stats to game alert
function add_stats() {

    const alert_Time = document.querySelector('.alert_Time');
    const stat_time = document.querySelector('.timer_1').innerHTML;
    let alert_Stars = document.querySelector('.alert_Stars');
    let alert_Moves = document.querySelector('.alert_Moves');
    
    alert_Time.innerHTML = `Time = ${stat_time}`;
    alert_Stars.innerHTML = `Stars = ${star}`;
    alert_Moves.innerHTML = `Moves = ${moves}`;
}

// sets click event on alert close button
function alert_close_x() {

    // select alert close button element
    let alert_close = document.querySelector(".alert_Close");

    // add click event to alert close button
    alert_close.addEventListener("click", close_alert);    
}

function close_alert() {
    console.log('alert click');
    game_Alert();
}