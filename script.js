console.log('I am working');


let hourDigitOne = document.getElementById('hour-one');
let hourDigitTwo = document.getElementById('hour-two');

let hourIncBtn = document.getElementById('hourInc')
let hourDecBtn = document.getElementById('hourDec')


let hOne = hourDigitOne.innerText;
let hTwo = hourDigitTwo.innerText;
hourIncBtn.addEventListener('click', hourIncFunc)
hourDecBtn.addEventListener('click', hourDecFunc)

function hourIncFunc() {
    hTwo++;

    if (hTwo == 10) {
        hOne++;
        hTwo = 0;
    }
    if (hOne == 2 && hTwo == 4) {
        hOne = 0;
        hTwo = 0;
    }
    hourDigitTwo.innerText = hTwo
    hourDigitOne.innerText = hOne;

    hourBtnPosition();
}
function hourDecFunc() {
    if (hOne == 0 && hTwo == 0) {
        hOne = 2;
        hTwo = 4;
    }
    hTwo--;

    if (hTwo == -1) {
        hOne--;
        hTwo = 9
    }
    hourDigitTwo.innerText = hTwo
    hourDigitOne.innerText = hOne;

    hourBtnPosition();

}

function hourBtnPosition() {

    if (hTwo == 1) {
        hourDigitTwo.style.marginLeft = '28px'
    }
    else {
        hourDigitTwo.style.marginLeft = '-3px'
    }

    if (hOne == 1) {
        hourDigitOne.style.marginLeft = '17px'
    }
    else {
        hourDigitOne.style.marginLeft = '-14px'
    }
}


let minuteDigitOne = document.getElementById('minute-one')
let minuteDigitTwo = document.getElementById('minute-two')

let mOne = minuteDigitOne.innerText
let mTwo = minuteDigitTwo.innerText

let minuteIncBtn = document.getElementById('minuteInc')
let minuteDecBtn = document.getElementById('minuteDec')

minuteIncBtn.addEventListener('click', minuteIncFunction);
minuteDecBtn.addEventListener('click', minuteDecFunction)

function minuteIncFunction() {
    mTwo++;

    if (mTwo == 10) {
        mOne++;
        mTwo = 0;
    }
    if (mOne == 6 && mTwo == 0) {
        mOne = 0;
        mTwo = 0;
    }
    minuteDigitTwo.innerText = mTwo
    minuteDigitOne.innerText = mOne;

    minuteBtnPossition();
}
function minuteDecFunction() {
    if (mOne == 0 && mTwo == 0) {
        mOne = 6;
        mTwo = 0;
    }
    mTwo--;

    if (mTwo == -1) {
        mOne--;
        mTwo = 9
    }
    minuteDigitTwo.innerText = mTwo
    minuteDigitOne.innerText = mOne;

    minuteBtnPossition();
}

function minuteBtnPossition() {
    if (mTwo == 1) {
        minuteDigitTwo.style.marginLeft = '28px'
    }
    else {
        minuteDigitTwo.style.marginLeft = '-3px'
    }

    if (mOne == 1) {
        minuteDigitOne.style.marginLeft = '33px'
    }
    else {
        minuteDigitOne.style.marginLeft = '2px'
    }
}
const songs = [
    { image: 'audio1.jpg', audio: 'audio1.mp3', name: 'cockerel' },
    { image: 'audio2.jpg', audio: 'audio2.mp3', name: 'classic clock' },
    { image: 'audio3.jpg', audio: 'audio3.mp3', name: 'electronic' },
    { image: 'audio4.jpg', audio: 'audio4.mp3', name: 'guitar' },
    { image: 'audio5.jpg', audio: 'audio5.mp3', name: 'military' },
    { image: 'audio6.jpg', audio: 'audio6.mp3', name: 'allien' }
];
let playSoundElement = document.getElementById('playSound').firstChild;

let soundNameElement = document.getElementById('soundName');
let soundImageElement = document.getElementById('soundImage').firstChild;

let previousSoundElement = document.getElementById('previousSound');
let nextSoundElement = document.getElementById('nextSound');

let counter = 0;
let audio;
let playSoundCount = 0;

setSong();
function setSong() {
    soundNameElement.innerText = songs[counter].name;
    soundImageElement.src = '../image/' + songs[counter].image;
    audio = new Audio('audio/' + songs[counter].audio);
    playSoundCount = 0;
    playSoundElement.src = '../image/' + 'pause.png'
}

function playSound() {
    if (playSoundCount == 0) {
        audio.play();
        audio.loop = true;
        playSoundCount++

        playSoundElement.src = '../image/' + 'play.png'
    }
    else {
        audio.pause();
        audio.currentTime = 0;
        playSoundCount = 0;

        playSoundElement.src = '../image/' + 'pause.png'
    }
}

nextSoundElement.addEventListener("click", function () {
    audio.pause();
    counter++;

    if (counter == songs.length) {
        counter = 0;
    }
    setSong();
});

previousSoundElement.addEventListener("click", function () {
    audio.pause();
    console.log(counter);
    if (counter == 0) {
        counter = songs.length;
    }
    counter--;
    console.log(counter);
    setSong();
});
