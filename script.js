let display = document.querySelector('.display'),
    bullseye = document.querySelectorAll('.arc');
    body = document.querySelector('body'),
    drink;

// bullseye.addEventListener('click', 
    shoot({}, 
        (mark) => {
            display.textContent = 'You hit the target!..';
            setTimeout(() => {
                win(mark, buyBeer, giveMoney);
            }, 1500);
        },
        (miss) => {
            display.textContent = miss;
            console.error(miss);
            setTimeout(() => {
                loose();
            }, 1500);
        }
    );
// );


function shoot(arrow, headshot, fail) {
    display.textContent = 'The narrow is on its way';
    body.style.cursor = 'progress';

    setTimeout(() => {
        Math.random() > .5 ? headshot({}) : fail('Sorry, you missed the target');
        body.style.cursor = 'default';
    }, 3000);
}

function win() {
    display.textContent = 'You won';
    drink = Math.random() * 1000 % 2;
    (drink >= 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    display.textContent = `${display.textContent} (and got free beer)`;
}

function giveMoney() {
    display.textContent = `${display.textContent} (and got some cash)`;
}

function loose() {
    display.textContent = 'You lost... Try again?';
}


// Copyright Date Script
let dates = document.querySelector('span#date');

if (new Date().getFullYear()>2019) {
    let dateCopyright = new Date().getFullYear();
    dates.textContent = `-${dateCopyright}`;
}

// Global site tag (gtag.js) - Google Analytics Script
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131142493-1');