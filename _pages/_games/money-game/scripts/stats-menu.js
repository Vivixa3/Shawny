
function updateStats() {
  const time = document.getElementById("time-of-year");
  const age = document.getElementById("age");

  time.textContent = `Current month: ${month[month_index]}`;
  age.textContent = `You have existed for: ${year} year(s) and ${
    month_index - 1
  } months.`;
}

function updateNetWorth() {
  let net_worth = document.getElementById("net-worth");

  total_net_worth = money + total_property_value;

  net_worth.style.color = "Green";
  net_worth.textContent = `${doMoneyNotation(total_net_worth)}`;
}

function updateFinancialReport() {
  let last_month_profit = document.getElementById("last-month-profit");

  if (monthly_profit > 0) {
    last_month_profit.style.color = "green";
  } else if (monthly_profit < 0) {
    last_month_profit.style.color = "red";
  }

  last_month_profit.textContent = `${doMoneyNotation(monthly_profit)}`;
}

function updateSalary() {
  const salary = document.getElementById("salary");
  salary.style.color = "green";
  salary.textContent = `${shortenMoneyDisplay(money_per_tap)} per tap`;
}

function updateProfile() {
  let total_properties = document.getElementById("total-properties");
  total_properties.textContent = `🏡 Total Properties: (${
    bought_properties.length
  }) Total value: ${shortenMoneyDisplay(total_property_value)}`;
}

function setServices() {
  addCard(
    "School/Degree",
    "🎓",
    "Level: High School",
    "Cost to enroll: None",
    "Time to finish: 5 years",
    "Promised salary: 11$/taps",
    "rgb(0, 255, 0)",
    undefined,
    undefined,
    undefined,
    "commingSoon"
  );
  addCard(
    "Start a business",
    "💼",
    "Business types:",
    "Scamming agency: $2 to $50k per tap",
    "Retail Store: $90k to $300k per month",
    "Car Shop: $50k to $550k per months",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 0)",
    "commingSoon"
  );
  addCard(
    "Buy a property",
    "🏠",
    "You want to buy a house, or a planet",
    "Properties available for all budget",
    "See you on buyahouse.app",
    undefined,
    undefined,
    undefined,
    "rgb(0, 255, 0)",
    undefined,
    "openPropertyMenu"
  );
  addCard(
    "Investments",
    "📈",
    "Maximum gain: 70%",
    "Maximum loss: -40%",
    undefined,
    undefined,
    "rgb(0, 255, 0)",
    "rgb(255, 0, 0)",
    undefined,
    undefined,
    "viewCryptoGains"
  );
  addCard(
    "Job",
    "⚒️",
    "Paychecks depends on your salary",
    "Increases the money made per taps",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "getJob"
  );
}
