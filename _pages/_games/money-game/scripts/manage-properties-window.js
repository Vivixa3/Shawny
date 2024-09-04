const manage_property_window = document.getElementById('manage-property-window');

const property_list = document.getElementById('property-window-content');

function closeManagePropertyWindow() {
  manage_property_window.style.display = 'none';
}

function openManagePropertyWindow() {
  manage_property_window.style.display = 'block';
}

function updateManagePropertyWindow() {
  property_list.innerHTML = '';

  for (let i = 0; i < bought_properties.length; i++) {
    const property = bought_properties[i];
    const propertyName = property.name;
    const propertyValue = property.price;

    const propertyElement = document.createElement('div');
    propertyElement.id = 'property-element';
    propertyElement.style.width = '100%';
    propertyElement.style.height = '50px';
    propertyElement.style.right = '0';
    propertyElement.style.top = '0';

    const houseTypeContainer = document.createElement('div');
    houseTypeContainer.id = 'house-type-container';
    houseTypeContainer.style.paddingLeft = '15px';
    houseTypeContainer.style.textAlign = 'left';
    houseTypeContainer.innerText = propertyName;

    const houseControlButtons = document.createElement('div');
    houseControlButtons.id = 'house-control-buttons';

    const sellPropertyButton = document.createElement('button');
    sellPropertyButton.id = 'sell-house-button';

    sellPropertyButton.onclick = function() {
      doNotification(`You sold your ${propertyName} for $${shortenMoneyDisplay(propertyValue)}`);
      money += propertyValue;
      bought_properties.splice(0, 1);
      total_property_value -= propertyValue;
      updateProfile();
      propertyElement.remove();
    }

    sellPropertyButton.innerText = `Sell for $${shortenMoneyDisplay(propertyValue)}`;

    property_list.append(propertyElement);
    propertyElement.append(houseTypeContainer);
    propertyElement.append(houseControlButtons);
    houseControlButtons.append(sellPropertyButton);
  }
}


const draggTrigger = document.getElementById('dragg');
const draggableDiv = document.getElementById('manage-property-window');
let isDragging = false;
let startX, startY, initialX, initialY;

draggTrigger.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
  initialX = draggableDiv.offsetLeft;
  initialY = draggableDiv.offsetTop;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const newX = initialX + event.clientX - startX;
    const newY = initialY + event.clientY - startY;
    draggableDiv.style.top = `${newY}px`;
    draggableDiv.style.left = `${newX}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
