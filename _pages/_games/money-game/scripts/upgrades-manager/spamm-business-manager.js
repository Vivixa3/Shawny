let spammUpgradePrice = 1000;

set_spammUpgradePrice(500, 5000);


function set_spammUpgradePrice(min, max) {
    spammUpgradePrice = Math.random() * (max - min) + min;
    document.getElementById('spammUpgradeButton').innerHTML = `🧑‍💻Start a spamm business: $${spammUpgradePrice.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}


let holdingDown = false;
let spammUpgrade = false;



function isHoldingDown() {
    if (holdingDown && spammUpgrade) {
        taps_per_seconds = 0;
        tapScreen();
    }
}

window.addEventListener('mousemove', isHoldingDown);


window.addEventListener('mousedown', () => {
    holdingDown = true;
});


window.addEventListener('mouseup', () => {
    holdingDown = false;
});



function buySpammUpgrade() {
    if (money >= spammUpgradePrice) {
        money -= spammUpgradePrice;
        spammUpgrade = true;
        document.getElementById('spammUpgradeButton').disabled = true;
        addAction(`Started spamm business. The cost was $${spammUpgradePrice.toFixed(0)}`);
        doNotification(`You started a spamm business`, 'white', 'yellow');
        set_spammUpgradePrice(500, 5000);
    } else {
        createPopupWindow("Alert", "You don't have enough money to buy this upgrade", "Ok");
    }
}


