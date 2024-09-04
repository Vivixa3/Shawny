
function doTaxes() {
    const tax_rate = Math.random(25 - 10) + 10;
    const tax_amount = money * (tax_rate / 100);

    if (money > 20000) {
        money -= tax_amount;
        monthly_profit -= tax_amount;
        addAction(`You payed $${shortenMoneyDisplay(tax_amount)} in taxes (${tax_rate.toFixed(0)}%)`);
        doNotification(`This year, you paid ${shortenMoneyDisplay(tax_amount)} in taxes.`, 'white', 'purple')
    }
}

function doInterest() {
    money += interest;
    monthly_profit += interest;
    addAction(`Interest: ${shortenMoneyDisplay(interest)}`, 'purple');
    doNotification(`Interest: ${shortenMoneyDisplay(interest)}`, 'white', 'green');
    interest *= interest_rate;
    if (interest_rate > 1.1) {
        interest_rate *= Math.exp(-0.02);
   } else {
    interest_rate = 1.1;
   }
}
