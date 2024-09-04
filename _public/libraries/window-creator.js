let can_click = true;

function createPopupWindow(window_ALERT, window_CONTENT, window_BUTTON_CANCEL, window_BUTTON_CONFIRM, function_NAME) {
    can_click = false;

    const window_background = document.createElement('div');
    window_background.style.cssText = `
        position: absolute;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        width: 100%;
        height: 100%;
    `;
    document.body.appendChild(window_background);


    const popup_window = document.createElement('div');
    popup_window.style.cssText = `
        padding: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 200px;
        background-color: black;
        border: 1px solid white;
        border-radius: 6px;
        color: white;
        text-align: center;
        cursor: move;
    `;
    window_background.appendChild(popup_window);

    const window_title = document.createElement('div');
    window_title.style.cssText = `
        width: 100%;
        height: auto;
        color: red;
        text-align: center;
    `;
    window_title.textContent = window_ALERT;
    popup_window.appendChild(window_title);

    const window_content = document.createElement('div');
    window_content.style.cssText = `
        width: 100%;
        height: 50%;
        margin-top: 20px;
    `;
    window_content.textContent = window_CONTENT;
    popup_window.appendChild(window_content);

    const button_container = document.createElement('div');
    button_container.style.cssText = `
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: -15px;
        left: 0;
        width: 100%;
        height: auto;
        margin-top: 20px;
    `;
    popup_window.appendChild(button_container);

    if (window_BUTTON_CANCEL !== undefined) {
        const cancel_button = document.createElement('button');
        cancel_button.style.cssText = `
            background-color: black;
            width: 80px;
            margin: 2px;
        `;
        cancel_button.textContent = window_BUTTON_CANCEL;
        cancel_button.onclick = function () {
            window_background.remove();
            can_click = true;
        };
        button_container.appendChild(cancel_button);
    }

    const confirm_button = document.createElement('button');
    confirm_button.style = `
        background-color: black;
        width: 80px;
        margin: 2px;
    `;
    confirm_button.textContent = window_BUTTON_CONFIRM;


    if (window_BUTTON_CONFIRM !== undefined) {

        if (typeof window[function_NAME] === 'function') {
            confirm_button.onclick = function () {
                can_click = true;
                window[function_NAME]();
            }
        } else {
            console.log(`Function ${function_NAME} does not exist.`);
        }
        button_container.appendChild(confirm_button);
    }

    let isDragging = false;
    let startX, startY, initialX, initialY;

    popup_window.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        initialX = popup_window.offsetLeft;
        initialY = popup_window.offsetTop;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const newX = initialX + event.clientX - startX;
            const newY = initialY + event.clientY - startY;
            popup_window.style.top = `${newY}px`;
            popup_window.style.left = `${newX}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}