const street_names = [
  "Broadway",
  "Fifth Avenue",
  "Park Avenue",
  "Madison Avenue",
  "Lexington Avenue",
  "Wall Street",
  "Canal Street",
  "Bowery",
  "Houston Street",
  "Bleecker Street",
  "Mulberry Street",
  "Delancey Street",
  "Orchard Street",
  "Allen Street",
  "Eldridge Street",
  "Ludlow Street",
  "Rivington Street",
  "St. Marks Place",
  "Avenue A",
  "Avenue B",
  "Avenue C",
  "Avenue D",
  "1st Avenue",
  "2nd Avenue",
  "3rd Avenue",
  "4th Avenue",
  "5th Avenue",
  "6th Avenue",
  "7th Avenue",
  "8th Avenue",
  "9th Avenue",
  "10th Avenue",
  "11th Avenue",
  "12th Avenue",
  "Central Park West",
  "Columbus Circle",
  "West End Avenue",
  "Riverside Drive",
  "Amsterdam Avenue",
  "Broadway",
  "Ninth Avenue",
  "Tenth Avenue",
  "Eleventh Avenue",
  "Twelfth Avenue",
  "Lenox Avenue",
  "Frederick Douglass Boulevard",
  "Morningside Drive",
  "St. Nicholas Avenue",
  "Edgecombe Avenue",
  "Adam Clayton Powell Jr. Boulevard",
];


function randomAdress() {
  const streetIndex = Math.floor(Math.random() * (49 - 0) + 0);
  const addressNumber = Math.floor(Math.random() * (99999 - 100) + 100);

  return(`${addressNumber}, ${street_names[streetIndex]}`);
}

const manage_property_window = document.getElementById(
  "manage-property-window"
);

const property_list = document.getElementById("property-window-content");

function closeManagePropertyWindow() {
  manage_property_window.style.display = "none";
}

function openManagePropertyWindow() {
  manage_property_window.style.display = "block";
}

function updateManagePropertyWindow() {
  property_list.innerHTML = "";

  for (let i = 0; i < bought_properties.length; i++) {
    const property = bought_properties[i];
    const propertyName = property.name;
    const propertyValue = property.price;
    const propertyAdress = randomAdress();

    const propertyElement = document.createElement("div");
    propertyElement.id = "property-element";
    propertyElement.style.cssText = `
      width: 100%;
      height: 50px;
      overflow: hidden;
      right: 0;
      top: 0;

    `;

    const houseTypeContainer = document.createElement("div");
    houseTypeContainer.id = "house-type-container";
    houseTypeContainer.style.cssText = `
      paddingLeft: 15px;
      textAlign: left;    
    `;
    houseTypeContainer.textContent = `${propertyName} on ${propertyAdress}`;

    const houseControlButtons = document.createElement("div");
    houseControlButtons.id = "house-control-buttons";

    const sellPropertyButton = document.createElement("button");
    sellPropertyButton.id = "sell-house-button";

    sellPropertyButton.onclick = function () {
      doNotification(
        `You sold your ${propertyName} for $${shortenMoneyDisplay(
          propertyValue
        )}`
      );
      money += propertyValue;
      total_net_worth += propertyValue;
      bought_properties.splice(0, 1);
      total_property_value -= propertyValue;
      updateProfile();
      propertyElement.remove();
    };

    sellPropertyButton.innerText = `Sell for $${shortenMoneyDisplay(
      propertyValue
    )}`;

    property_list.append(propertyElement);
    propertyElement.append(houseTypeContainer);
    propertyElement.append(houseControlButtons);
    houseControlButtons.append(sellPropertyButton);
  }
}

const draggTrigger = document.getElementById("dragg");
const draggableDiv = document.getElementById("manage-property-window");
let isDragging = false;
let startX, startY, initialX, initialY;

draggTrigger.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  initialX = draggableDiv.offsetLeft;
  initialY = draggableDiv.offsetTop;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const newX = initialX + event.clientX - startX;
    const newY = initialY + event.clientY - startY;
    draggableDiv.style.top = `${newY}px`;
    draggableDiv.style.left = `${newX}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
