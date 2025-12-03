let Kick = document.getElementById("Kick");
Kick.addEventListener("click", playKick);

let Crash = document.getElementById("Crash");
Crash.addEventListener("click", playCrash);

let Snare = document.getElementById("Snare");
Snare.addEventListener("click", playSnare);

let HighTom = document.getElementById("HighTom");
HighTom.addEventListener("click", playHighTom);

let MediumTom = document.getElementById("MediumTom");
MediumTom.addEventListener("click", playMediumTom);

let FloorTom = document.getElementById("FloorTom");
FloorTom.addEventListener("click", playFloorTom);

let Bass = document.getElementById("Bass");
Bass.addEventListener("click", playBass);

function playKick() {
    let Kick = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/kick-bass.mp3');
    Kick.play()

}

function playCrash() {
    let Crash = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/crash.mp3');
    Crash.play()

}

function playSnare() {
    let Snare = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/snare.mp3');
    Snare.play()

}

function playHighTom() {
    let HighTom = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/tom-1.mp3');
   HighTom.play()

}

function playMediumTom() {
    let MediumTom = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/tom-2.mp3');
   MediumTom.play()

}

function playFloorTom() {
    let FloorTom = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/tom-3.mp3');
   FloorTom.play()

}

function playBass() {
    let Bass = new Audio('/Users/zwonakamafuna/Documents/intro-to-programming-web/web-day-4/Student Files/sounds/808.mp3');
   Bass.play()

}