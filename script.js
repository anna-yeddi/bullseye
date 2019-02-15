let body = document.querySelector('body'),
    bullseye = document.querySelector('#rainbow'),
    display = document.querySelector('#display'),
    displayTxt = document.querySelector('#displayTxt');

init();

function init() {
    bullseye.removeEventListener('click', init);
    bullseye.addEventListener('click', shootPromise);
    display.classList.remove('visible', 'yellow');
    bullseye.classList.add('ready');
}

async function shootPromise() {
    shoot();
    try {
        await shootResult();
        try {
            await win();
            await buyBeer();
        }
        catch (reject) {
            await giveMoney();
        }
    }
    catch (reject) {
        await loose();
    }
    await reset();
}

function shoot() {
    bullseye.removeEventListener('click', shootPromise);
    bullseye.classList.remove('ready');
    body.classList.add('wait');
    display.classList.add('visible');
    display.classList.add('purple');
    displayTxt.textContent = 'The arrow is on its way...';
}

async function shootResult() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > .5 ? resolve() : reject();
            body.classList.remove('wait');
        }, 3000);
    });
}

async function win() {
    display.classList.remove('purple');
    display.classList.add('green');
    displayTxt.textContent = 'You hit the target!..';
    console.log('Win. Lucky you!');
    
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            display.classList.remove('green');
            display.classList.add('blue');
            displayTxt.textContent = 'You won';

            const drink = Math.random() * 1000 % 2;
            drink >=1 ? resolve() : reject();
        }, 1500);
    });
}

function buyBeer() {
    displayTxt.textContent += ' (and got an ice cream)';
}

function giveMoney() {
    displayTxt.textContent += ' (and got a cash prize)';
}

async function loose() {
    display.classList.remove('purple');
    display.classList.add('red');
    displayTxt.textContent = 'Sorry, you missed the target!';
    console.log('missed =((');

    await new Promise ((resolve, reject) => setTimeout(resolve, 2000));
    
    display.classList.remove('red');
    display.classList.add('orange');
    displayTxt.textContent = 'You lost, but there\'s always a second chance';
}

async function reset() {
    body.classList.remove('ready');

    await new Promise ((resolve, reject) => setTimeout(resolve, 2000));
    
    display.classList.remove('blue', 'orange');
    display.classList.add('yellow');
    displayTxt.textContent = 'Would you like to give it another shot?';
    bullseye.addEventListener('click', init);
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