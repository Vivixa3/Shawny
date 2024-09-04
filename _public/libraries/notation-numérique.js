
function doPercentage(value, fixRate) {
    return (value / 100).toFixed(fixRate) + '%';
}

function doMoneyNotation(value) {
    if (value < 10000000000000000) {
        return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
        return '∞';
    }
}

function shortenMoneyDisplay(amount) {
    if (amount >= 1000000000000000) {
        return (amount / 1000000000000000).toFixed(1) + 'Q';
    } else if (amount >= 1000000000000) {
        return (amount / 1000000000000).toFixed(1) + 'T';
    } else if (amount >= 1000000000) {
        return (amount / 1000000000).toFixed(1) + 'B';
    } else if (amount >= 1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(1) + 'k';
    } else if (amount <= -1000000000000000) {
        return (amount / 1000000000000000).toFixed(1) + 'Q';
    } else if (amount <= -1000000000000) {
        return (amount / 1000000000000).toFixed(1) + 'T';
    } else if (amount <= -1000000000) {
        return (amount / 1000000000).toFixed(1) + 'B';
    } else if (amount <= -1000000) {
        return (amount / 1000000).toFixed(1) + 'M';
    } else if (amount <= -1000) {
        return (amount / 1000).toFixed(1) + 'k';
    } else {
        return doMoneyNotation(amount);
    }
}