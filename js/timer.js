
let clock_Off = true;
let time = 0;
let myTime = document.querySelector('.timer_1');

// the main timer
// help from cranfords walk through
function the_timer() {

    let time_handle = setInterval(function() {

        if(win === 0) {

        let { seconds, minutes } = convert_time();

        myTime.innerHTML = time++;

        format_time(seconds, myTime, minutes);
    } else {

        clearInterval(time_handle);
        time_handle = 0;
    }
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