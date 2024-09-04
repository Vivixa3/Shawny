
const minimum_crypto_percentage = -40;
const maximum_crypto_percentage = 75;

const gainsList = document.getElementById('crypto-gains-menu-list');
gainsList.innerHTML = '';



function openCryptoAccount() {
    if (!cryptoAccountOpened) {
        cryptoAccountOpened = true;
        doNotification('Crypto Market LTD: Congradulation, You just opened a Crypto Account', 'white', 'green');
        addAction('Opened a Crypto Account');
        let gain_announce_1 = document.createElement('div');
        gain_announce_1.classList.add('action');
        gain_announce_1.textContent = 'Message from Crypto Market Ltd: We are happy to have you on board.';
        gainsList.prepend(gain_announce_1);
        doCryptoButton();
    } else if (cryptoAccountOpened) {
        cryptoAccountOpened = false;
        doNotification('Crypto Market LTD: You just closed your crypto account', 'white', 'green');
        addAction('You successfuly closed your crypto account.');
        let gain_announce_2 = document.createElement('div');
        gain_announce_2.classList.add('action');
        gain_announce_2.textContent = 'Message from Crypto Market Ltd: We are sorry to see you leave.';
        gainsList.prepend(gain_announce_2);
        doCryptoButton();
    }
}

function doCryptoButton() {
    const cryptoButton = document.getElementById('cryptoAccountButton');
    if (cryptoAccountOpened) {
        cryptoButton.textContent = 'Close Crypto Account';
    } else {
        cryptoButton.textContent = '💹 Open Crypto Account (Free)';
        cryptoButton.disabled = false;
        cryptoButton.style.color = '';
    }
    if (money > 1000000) {
        cryptoAccountOpened = false;
        cryptoButton.disabled = true;
        cryptoButton.innerHTML = 'Crypto Account Closed';
        cryptoButton.style.color = 'red';
    }
    if (!cryptoButton.disabled && money > 1000000) {
        gainsList.prepend('Your crypto account has been closed by Crypto Market LTD. Reason: You are too rich');
        doNotification('Your Crypto Account was closed by Crypto Market LTD because you are too rich', 'red');
        addAction('Crypto Market LTD closed your crypto account');
    }
}

function updateCrypto() {
    if (game_started) {
        if (cryptoAccountOpened) {
            if (money > 0 && money < 100000000) {

                crypto_percentage = Math.random() * (maximum_crypto_percentage - minimum_crypto_percentage) + minimum_crypto_percentage;

                if (crypto_percentage > 1) {
                    let gain = `${shortenMoneyDisplay(money * (crypto_percentage / 100))} -- Crypto Gains: Increased by ${crypto_percentage.toFixed(0)}%`;
                    doNotification(`Crytpo ${shortenMoneyDisplay(money * (crypto_percentage / 100))}`, 'green', 'green');

                    monthly_profit += (money * crypto_percentage / 100);
                    money += (money * crypto_percentage / 100);

                    const increasing_gain = document.createElement('div');
                    increasing_gain.classList.add('action');
                    increasing_gain.style.color = 'Green';
                    increasing_gain.textContent = gain;
                    gainsList.prepend(increasing_gain);

                    updateCounter();
                    updateStats();
                } else if (crypto_percentage < -1) {
                    crypto_going_up_or_down = 'down';
                    let gain = `-${shortenMoneyDisplay(money * Math.abs(crypto_percentage / 100))} -- Crypto Gains: Decreased by ${crypto_percentage.toFixed(0)}%`;
                    doNotification(`Crytpo -${shortenMoneyDisplay(money * Math.abs(crypto_percentage / 100))}`, 'red', 'green');

                    monthly_profit += (money * crypto_percentage / 100);
                    money += (money * crypto_percentage / 100);

                    const decreasing_gain = document.createElement('div');
                    decreasing_gain.classList.add('action');
                    decreasing_gain.style.color = 'Red';
                    decreasing_gain.textContent = gain;
                    gainsList.prepend(decreasing_gain);

                    updateCounter();
                    updateStats();
                } else if (crypto_percentage > -1 && crypto_percentage < 1) {
                    let gain = `Crypto Gains: Market Stagnating`;
                    doNotification('Crypto Stagnating', 'gray', 'green');

                    const stagnating_gain = document.createElement('div');
                    stagnating_gain.classList.add('action');
                    stagnating_gain.style.color = 'Grey';
                    stagnating_gain.textContent = gain;
                    gainsList.prepend(stagnating_gain);

                    updateCounter();
                    updateStats();
                }

            }
        }
    }
}





