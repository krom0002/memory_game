
let clock_Off = true;
let time = 0;

function the_timer() {

    let myTime =document.querySelector('.timer_1');

    setInterval(function() {

        let { seconds, minutes } = convert_time();

        myTime.innerHTML = time++;

        format_time(seconds, myTime, minutes);
    }, 1000);
}

// converts time
function convert_time() {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return { seconds, minutes };
}

// formats time
function format_time(seconds, myTime, minutes) {
    if (seconds < 10) {
        myTime.innerHTML = `${minutes}:0${seconds}`;
    }
    else {
        myTime.innerHTML = `${minutes}:${seconds}`;
    }
}

// checks to see if clock is off then turns on
function is_clock_on() {

    if (clock_Off) {
        the_timer();
        clock_Off = false;
    }
    return clock_Off;
 }