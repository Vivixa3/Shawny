const month = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

function yearManager() {
    if (month_index < 12) {
        month_index++;
    } else {
        month_index = 1;
        year++;
        addAction('A new year has just started.', 'orange');
        doNotification('A new year has started', 'white', 'orange');
        doInterest();
        doTaxes();
    }
}


setInterval(() => {
    if (game_started) {

        yearManager();
        doNotification('A new month has just started, you can see you latest financial report in your stats dashboard.', 'orange', 'orange');


        if (spammUpgrade) {
            addAction('Your spamm technique stopped working, the very smart tech people patched it.');
            document.getElementById('spammUpgradeButton').disabled = false;
            spammUpgrade = false;
        }

        getPaycheck();
        propertiesIncomeExpense();
        doPropertyFinances();
        updateCrypto();
        updateCounter();
        updateStats();
        updateFinancialReport();

        if (monthly_profit > 0) {
            doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'green', 'green');
        } else if (monthly_profit < 0) {
            doNotification(`Last month profit: ${shortenMoneyDisplay(monthly_profit)}`, 'red', 'green');
        }

        monthly_profit = 0;

        setStoredData();
    }

}, month_length);