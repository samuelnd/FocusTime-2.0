
export default function Timer({
    minutesDisplay, 
    secondsDisplay
}) {
    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent);

    function updateMinutes(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes;
        seconds = seconds === undefined ? 0: seconds;

        minutesDisplay.textContent = (String(newMinutes).padStart(2, 0));
        secondsDisplay.textContent = (String(seconds).padStart(2, 0));

        
    }

    function updateDisplay(newMinutes){
        minutes = newMinutes
        minutesDisplay.textContent = (String(minutes).padStart(2, 0));
    }

    function countdown() {
        timerTimeOut = setTimeout(function(){

        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);
        let isFinished = minutes <= 0 && seconds <= 0;

        updateMinutes(minutes, 0);

        if(isFinished) {
             updateMinutes();

            return
        }

        if(seconds <= 0) {
            seconds = 60;
            --minutes;
        }

        updateMinutes(minutes, String(seconds - 1));
        countdown();
    }, 1000);
    }

    function reset() {
        clearTimeout(timerTimeOut);
    }

    return {
        updateMinutes,
        updateDisplay,
        countdown,
        reset
    }
}