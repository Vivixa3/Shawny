const browser = document.getElementById('browser');

// ^ Open/Close browser
function openBrowser() {
    browser.style.display = 'block';
    browser.classList.add('open');
    browser.style.scale = '1';
    browser.classList.remove('close');
}

function closeBrowser() {
    browser.classList.add('close');
    browser.classList.remove('open');
}

closeBrowser();

// ^ Stats tab
function viewStats() {
    showhideTag('stats')
    document.getElementById('stats-bttn').disabled = true;

    closeServices();
    closeInvestments();
    closeHousingMarket();
}

function closeStats() {
    showhideTag('stats', 'none');
    document.getElementById('stats-bttn').disabled = false;
}


// ^ Investments tab
function viewInvestments() {
    showhideTag('crypto');
    document.getElementById('crypto-bttn').disabled = true;
    closeStats();
    closeHousingMarket();
    closeServices();
}

function closeInvestments() {
    showhideTag('crypto', 'none');
    document.getElementById('crypto-bttn').disabled = false;
}


// ^ Housing market tab
function viewHousingMarket() {
    showhideTag('housingmarket', 'flex');
    document.getElementById('property-bttn').disabled = true;

    closeStats();
    closeInvestments();
    closeServices();
}

function closeHousingMarket() {
    showhideTag('housingmarket', 'none');
    document.getElementById('property-bttn').disabled = false;
}


// ^ Services tab
function viewServices() {
    showhideTag('services');
    document.getElementById('services-bttn').disabled = true;

    closeStats();
    closeInvestments();
    closeHousingMarket();
}

function closeServices() {
    showhideTag('services', 'none');
    document.getElementById('services-bttn').disabled = false;
}


closeHousingMarket();
closeInvestments();
closeServices();