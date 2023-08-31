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
