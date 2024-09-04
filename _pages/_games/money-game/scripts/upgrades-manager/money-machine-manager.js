
const money_machine_button = document.getElementById('moneyMachineButton');

function doMoneyMachineButton() {
    
    if (money_machine_price > 15000000) {
        money_machine_button.innerText = 'No more upgrades available.';
        money_machine_button.disabled = true;
    } else {
        money_machine_button.textContent = `💸 Buy Money Machine (${doMoneyNotation(money_machine_price)})`;
    }
}

function buyMoneyMachine() {

    if (money >= money_machine_price) {

        const moneyMachinePercentage = Math.random() * (100 - 25) + 25;
        
        money -= money_machine_price;
        money_per_tap += money_per_tap * moneyMachinePercentage / 100;
        money_machine_price = money_machine_price * 1.6;
        
        addAction(`You bought a money machine for ${shortenMoneyDisplay(money_machine_price)}, you will now make ${shortenMoneyDisplay(money_per_tap)} per taps`);
        doNotification(`You bought a money machine, you will now make ${shortenMoneyDisplay(money_per_tap)} per taps`);
        
        updateSalary();
        doMoneyMachineButton();
        updateCounter();

    } else if (money < money_machine_price) {
        createPopupWindow("Alert", "You don't have enough money to buy this upgrade", "Ok");
    }
}

doMoneyMachineButton();