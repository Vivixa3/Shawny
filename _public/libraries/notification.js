const notification_container = document.createElement('div');
notification_container.style.zIndex = 50;
notification_container.style.position = 'absolute';
notification_container.style.bottom = '15px';
notification_container.style.right = '15px';
notification_container.style.width = '300px';
notification_container.style.height = 'auto';
notification_container.style.backgroundColor = 'none';
notification_container.style.pointerEvents = 'none';
document.body.appendChild(notification_container);


function doNotification(text_to_write, color, border_color) {
    const notification = document.createElement('div');
    notification.style.width = '300px';
    notification.style.height = 'auto';
    notification.style.minHeight = '50px';
    notification.style.right = '0';
    notification.style.bottom = '0';
    notification.style.marginTop = '5px';
    notification.style.background = 'rgba(24, 24, 24, 0.5)';

    if (border_color === undefined) {
        notification.style.borderLeft = '4px solid white';
    } else {
        notification.style.borderLeft = `4px solid ${border_color}`
    }

    notification.style.padding = '4px';

    notification.style.display = 'flex';
    notification.style.justifyContent = 'center';
    notification.style.alignItems = 'center';

    if (color === undefined) {
        notification.style.color = 'white';
    } else {
        notification.style.color = color;
    }

    notification.textContent = text_to_write;

    notification.style.zIndex = '100';
    notification.style.transition = 'opacity 0.5s';

    notification_container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification_container.removeChild(notification);
        }, 500); // wait for the fade out transition to finish
    }, 5000);
}