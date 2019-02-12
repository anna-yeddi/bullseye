let display = document.querySelector('#display'),
    bullseye = document.querySelector('#rainbow'),
    body = document.querySelector('body'),
    drink = 0;

init();

function init() {
    bullseye.addEventListener('click', shootPromise);
    start();
}
function shootPromise() {
    shoot()
        .then(win)
        .catch(loose)
        .then(reset)
}

function start() {
    body.removeEventListener('click', init);
    display.style.display = 'none';
    body.classList.add('ready');
    console.log('init launched');
}

function shoot() {
    bullseye.removeEventListener('click', shootPromise);
    display.style.display = 'flex';
    display.textContent = 'The arrow is on its way...';
    body.classList.remove('ready');
    body.classList.add('wait');
    console.log('shoot fired');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            Math.random() > .5 ? resolve() : reject();
            body.classList.remove('wait');
        }, 3000);
    });

    return promise;
}

function win() {
    display.textContent = 'You hit the target!..';
    console.log('Lucky you!');
    setTimeout(() => {
        display.textContent = 'You won';
        drink = Math.random() * 1000 % 2;
        (drink >= 1) ? buyBeer() : giveMoney();
        console.log('win timeout');
    }, 1500);
}

function buyBeer() {
    display.textContent = `${display.textContent} (and got an ice cream)`;
    console.log('beer');
}

function giveMoney() {
    display.textContent = `${display.textContent} (and got some cash)`;
    console.log('money');
}

function loose() {
    display.textContent = 'Sorry, you missed the target!';
    console.error('missed =((');
    setTimeout(() => {
        display.textContent = 'You lost... Try again?';
        console.log('loose timeout');
    }, 1500);
}

function reset() {
    drink = '';
    body.classList.remove('ready');
    console.log('reset initiated');
    setTimeout(() => {
        display.textContent = 'Click to give it another shot';
        body.addEventListener('click', init);
        console.log('reset/timeout created!');
    }, 1500);
    console.log('reset finished');
}


// Copyright Date Script
let copyDates = document.querySelector('span#copyDate'),
    pubStr = document.querySelector('span#pubDate'),
    pubNum = parseInt(pubStr.textContent);

if (new Date().getFullYear()>pubNum) {
    let currDate = new Date().getFullYear();
    copyDates.textContent = `-${currDate}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');