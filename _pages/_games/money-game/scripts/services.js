function addCard(title_CONTENT, emoji_CONTENT, text1_CONTENT, text2_CONTENT, text3_CONTENT, text4_CONTENT, color1, color2, color3, color4, function_NAME) {
    const grid = document.getElementById('grid');


    if (window.screen.width > 768) {

        const card = document.createElement("div");
        card.id = "card";
        card.style.cssText = `
            position: relative;
            background-color: black;
            border: 1px solid white;
            border-radius: 6px;
            width: 100%;
            padding: 10px;
            display: grid;
            gap: 10px;
            justify-content: start;
            cursor: pointer;
        `;


        card.onclick = function () {
            buttonSound();
            if (typeof window[function_NAME] === 'function') {
                window[function_NAME]();
            } else {
                console.log(`Function ${function_NAME} does not exist.`);
            }
        }
        grid.appendChild(card);

        const title = document.createElement("div");
        title.style.cssText = `
            color: white;
            text-align: left;
            grid-column: span 2;
            padding: 5px;
        `;
        title.textContent = title_CONTENT;
        card.appendChild(title);

        const image = document.createElement("div");
        image.textContent = emoji_CONTENT;
        image.style.cssText = `
            border: 1px solid white;
            border-radius: 6px;
            font-size: 100px;
            height: 150px;
            width: 150px;
        `;
        card.appendChild(image);

        const textContainer = document.createElement("div");
        textContainer.style.cssText = `
            color: white;
            text-align: left;
            display: flex;
            font-size: 10px;
            flex-direction: column;
        `;
        card.appendChild(textContainer);

        const text = document.createElement("div");
        text.style.cssText = `
            padding: 5px;
            height: 30px;
        `;
        if (color1 !== undefined) {
            text.style.color = color1;
        }
        text.textContent = text1_CONTENT;
        textContainer.appendChild(text);

        const text2 = document.createElement("div");
        text2.style.cssText = `
            padding: 5px;
            height: 30px;
        `;
        if (color2 !== undefined) {
            text2.style.color = color2;
        }
        text2.textContent = text2_CONTENT;
        textContainer.appendChild(text2);

        const text3 = document.createElement("div");
        text3.style.cssText = `
            padding: 5px;
            height: 30px;
        `;
        if (color3 !== undefined) {
            text3.style.color = color3;
        }
        text3.textContent = text3_CONTENT;
        textContainer.appendChild(text3);

        const text4 = document.createElement("div");
        text4.style.cssText = `
            padding: 5px;
            height: 30px;
        `;
        if (color4 !== undefined) {
            text4.style.color = color4;
        }
        text4.textContent = text4_CONTENT;
        textContainer.appendChild(text4);
    } else if (window.screen.width < 768) {
        const card = document.createElement("div");
        card.id = "card";
        card.textContent = emoji_CONTENT;
        card.style.cssText = `
            font-size: 100px;
            background-color: black;
            border: 1px solid white;
            border-radius: 6px;
            width: auto;
            margin: 20px;
            cursor: pointer;
        `;
        card.onclick = function () {
            buttonSound();
            if (typeof window[function_NAME] === 'function') {
                window[function_NAME]();
            } else {
                console.log(`Function ${function_NAME} does not exist.`);
            }
        }
        grid.appendChild(card);
    }
}