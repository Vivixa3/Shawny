const storedData = localStorage.getItem('storedData');

let data = {
    stored_money: null,
    stored_totalPropertiesValue: null,
    stored_boughtProperties: null,
    stored_moneyPerTap: null,
    stored_moneyMachinePrice: null,
    stored_year: null,
    stored_monthIndex: null,
    stored_cryptoAccount: null,
    stored_interest: null,
    stored_interest_rate: null,
};

// Function to set stored data
function setStoredData() {
    if (money !== 0 && game_started) {
        data = {
            stored_money: money,
            stored_totalPropertiesValue: total_property_value,
            stored_boughtProperties: bought_properties,
            stored_moneyPerTap: money_per_tap,
            stored_moneyMachinePrice: money_machine_price,
            stored_year: year,
            stored_monthIndex: month_index,
            stored_cryptoAccount: cryptoAccountOpened,
            stored_interest: interest,
            stored_interest_rate: interest_rate,
        };

        localStorage.setItem('storedData', JSON.stringify(data));
        updateStats();
    }
}

// Function to get stored data
function getStoredData() {
    if (storedData) {
        console.log(JSON.parse(storedData));

        money = JSON.parse(storedData).stored_money;
        total_property_value = JSON.parse(storedData).stored_totalPropertiesValue;
        bought_properties = JSON.parse(storedData).stored_boughtProperties;
        money_per_tap = JSON.parse(storedData).stored_moneyPerTap;
        money_machine_price =  JSON.parse(storedData).stored_moneyMachinePrice;
        year =  JSON.parse(storedData).stored_year;
        month_index =   JSON.parse(storedData).stored_monthIndex;
        cryptoAccountOpened = JSON.parse(storedData).stored_cryptoAccount;
        interest = JSON.parse(storedData).stored_interest;
        interest_rate = JSON.parse(storedData).stored_interest_rate;
        
        updateLoadedData();

        doNotification('Welcome back', undefined, undefined);
        addAction(`Loaded progress from last save: ${shortenMoneyDisplay(JSON.parse(storedData).stored_money)}, ${JSON.parse(storedData).stored_boughtProperties.length} properties and a salary of ${shortenMoneyDisplay(JSON.parse(storedData).stored_moneyPerTap)} per tap.`, 'orange');
    } else {
        console.log("No stored data");
    }
}

function updateLoadedData() {
    updateManagePropertyWindow();
    doMoneyMachineButton();
    updateCounter();
    updateCrypto();
    updateSalary();
    updateProfile();
}

function clearStoredData() {
    money = 0;
    total_property_value = 0;
    bought_properties = [];
    money_per_tap = 0;
    money_machine_price = 0;
    year = 0;
    month_index = 0;
    cryptoAccountOpened = false;
    interest = 0.02;
    interest_rate = 1.9;
    localStorage.removeItem('storedData');
    location.reload();
}
