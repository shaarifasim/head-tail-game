var user1;
var user2;
var head = 0;
var tail = 0;

// user1 = Math.floor(Math.random() * (1 + 1));
resetGame();



function headOrTail() {

    // Random color pick between 0 and max i.e. 0 and 1
    var max = 1;
    var diceValue = Math.floor(Math.random() * (max + 1));
    console.log(diceValue);
    if (diceValue === 0) {
        head++;
    }
    else {
        tail++;
    }
    score();
}

function score() {
    
    
    if (user1 === 0) {
        document.getElementById("user1score").innerText = "Score: " + head;
    }
    else {
        document.getElementById("user1score").innerText = "Score: " + tail;
    }

    if (user2 === 0) {
        document.getElementById("user2score").innerText = "Score: " + head;
    }
    else {
        document.getElementById("user2score").innerText = "Score: " + tail;
    }
}

function resetGame() {
    head = 0;
    tail = 0;
    document.getElementById("user1score").innerText = "Score:";
    document.getElementById("user2score").innerText = "Score:";
    user1 = Math.floor(Math.random() * (1 + 1));
    if (user1 === 0) {
        console.log("user1 -> Head");
        document.getElementById("user1").innerText = "User 1 - Head"
        user2 = 1;
        document.getElementById("user2").innerText = "User 2 - Tail"
    }
    else {
        document.getElementById("user1").innerText = "User1 - Tail"
        user2 = 0;
        document.getElementById("user2").innerText = "User2 - Head"
        console.log("user1 -> Tail");
    }
}
var startingMintes = 1;
var time = startingMintes * 60;
var countDown = document.getElementById("Timer");

var settime = setInterval(updateCountDown, 1000)
function updateCountDown() {
    var minutes = Math.floor(time / 60)
    let second = time % 60;
    second = second < 1 ? '0' + second : second;
    countDown.innerText = `${minutes} : ${second}`;
    time--;
    // if (minutes === 0 && second == 00) {
    //     clearInterval(settime);
    //     if (score1 > score2) {
    //         document.getElementById("winner").innerText = "Congrats 🏆" + Player1Name + " WON MATCH";
    //     }
    //     else if (score2 > score1) {
    //         document.getElementById("winner").innerText = "Congrats 🏆" + Player2Name + " WON MATCH";
    //     }
    //     else{
    //        document.getElementById("winner").innerText = "MATCH TIED 😨"
    //     }
    // }
}
