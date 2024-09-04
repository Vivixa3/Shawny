
let money = 0;
let money_per_tap = 1;
let money_machine_price = 500;
let bought_properties = [];
let cryptoAccountOpened = false;

let year = 0;
let month_index = 1;
let monthly_profit = 0;
let total_net_worth = 0;
let taps_per_seconds = 0;
let autoclicker_ban = false;
let game_started = false;
let property_types = {};
let month_length = 30000;
let properties_finances;
let total_property_value = 0;
let profit = 0;
let cryptoGains = [];
let gain = "";
let crypto_percentage = 0;
let crypto_going_up_or_down;
let interest = 0.02;
let interest_rate = 1.9;

let is_pressing_spacebar = false;



function startGame() {
    game_started = true;

    start_menu_music.pause();

    soundtrackShuffling();
    getStoredData();
    doCryptoButton();
    doPropertyFinances();
    doPropertyTypes();
    doPropertyButton('Apartement');
    doPropertyButton('Condo');
    doPropertyButton('House');
    doPropertyButton('Castle');
    doPropertyButton('Mansion');
    doPropertyButton('Island');
    doPropertyButton('Planet');

    document.getElementById('menu').remove();
}




function commingSoon() {
    createPopupWindow("Coming Soon", "This feature is currently in development", "Ok", undefined, undefined);
}



document.addEventListener('click', tapScreen);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonSound();
    });
});


function tapScreen() {
    if (game_started && can_click) {
        money += money_per_tap;
        monthly_profit += money_per_tap;
        taps_per_seconds += 1;
        updateCounter();
        setStoredData();
        moneySound();
    }
}


function suicide() {
    createPopupWindow('Alert', 'Are you sure you want to commit suicide?', 'No', 'Yes', 'clearStoredData');
}

// Autoclicker ban
setInterval(() => {
    if (taps_per_seconds > 20 && !autoclicker_ban) {
        autoclicker_ban = true;
        createPopupWindow('Alert', 'It seems like you are using an autoclicker. Next time you use it, the page will reload. A solution would be to buy the spamm upgrade from the upgrade menu.', 'Ok', undefined, undefined);
    } else if (taps_per_seconds > 20 && autoclicker_ban == true) {
        createPopupWindow('Whomp Whomp', 'It seems like you have used an autoclicker once again. The page will now reload.', undefined, 'Ok', 'clearStoredData');
    }
    taps_per_seconds = 0;
}, 1000);



function addAction(actionText, textColor) {
    let actionElement = document.createElement('div');

    actionElement.classList.add('action');
    if (textColor) {
        actionElement.style.color = textColor;
    } else {
        actionElement.style.color = 'white';
    }
    actionElement.textContent = actionText;

    document.getElementById('actions').prepend(actionElement);
}



function updateCounter() {
    document.getElementById('counter').textContent = 'Money: ' + doMoneyNotation(money);

    if (money < -100000) {
        alert('You went bankrupt, the bank took all your assets.');

        money = 0;
        bought_properties = [];
        money_machine_price = 500;
        money_per_tap = 1;

        document.getElementById('actions').innerHTML = '';
        addAction('Fresh start');

        updateCounter();
    }

    updateNetWorth();
    if (game_started) {
        localStorage.setItem('money', parseFloat(money));
    }
}





document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeBrowser();
    }
});


setInterval(function () {
    let eventChance = Math.random() * 1;

    if (eventChance === 0.001) {

        money = 0;
        properties = [];

        addAction('You lost your memory, you don\'t remember anything, not even your bank account number.');

    } else if (eventChance === 0.005) {

        let stolenAmount = money * (Math.random() * (75 - 0) - 0) / 100;
        money -= stolenAmount

        addAction('Someone hacked into your bank and robbed ' + percentage + '% of your money ($' + stolenAmount.toFixed(2) + '), the bank couldn\'t do anything. Sorry!')

    } else if (eventChance <= 0.002) {

        if (confirm('You died of an unknown reason. Do you want to restart?')) {
            suicide();
        }

    }

}, Math.random() * 120000 + 30000);
