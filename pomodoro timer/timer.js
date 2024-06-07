const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval
let timeLeft = 1500;  // is equal to 25 miniutes

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2 , "0")}:${seconds.toString().padStart(2 ,"0")}`
//minutes change in string and with using padstart is showing how many digit should be exist and it doesnt exit so we apply zero in that place
    timerE1.innerHTML = formattedTime;

}


function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's Up!");
            timeLeft =1500; // back to 25 minutes after cclear interval.
        }
    }, 1000)
}
function stopTimer() {
    clearInterval(interval);
}
function resetTimer() {
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();
}

startE1.addEventListener("click", startTimer)
stopE1.addEventListener("click", stopTimer)
resetE1.addEventListener("click", resetTimer)