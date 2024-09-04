
// create audio elements
function audioImport(musicID, id, isLOOPED, isMUTED, canAUTOPLAY) {
    let audio = document.createElement('audio');
    audio.src = musicID;
    audio.id = id;

    audio.loop = isLOOPED;
    audio.muted = isMUTED;
    audio.autoplay = canAUTOPLAY;
}

// creates and then play an audio once
function audioPlay(audioSOURCE) {
    let audio = document.createElement('audio');
    audio.src = audioSOURCE;
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', () => {
        audio.remove();
    });
}

// show/hide html element(s)
function showhideTag(tagName, displayStyle = 'block') {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = displayStyle;
    }
}

function reload() {
    location.reload();
}

function consoleLog(mess) {
    console.log(mess);
}


// Type writer effect
function typewriter(textToWrite) {
    let text = "";
    let index = 0;
    const normalSpeed = 100; // Normal speed of typing
    const commaPause = 500; // Pause duration after a comma
    if (textToWrite !== undefined) {
        text = textToWrite;
    }

    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        let delay = text.charAt(index) === ',' ? commaPause : normalSpeed; // Pause if character is a comma
        index++;
        setTimeout(typewriter, delay);
    }
}

// Show screamer
function showscreamer(src, time) {
    const screamer = document.createElement('img');
    screamer.src = src;
    screamer.style.cssText = `
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        zIndex: 10;
    `;
    document.body.appendChild(screamer);
    setTimeout(() => {
        screamer.remove();
    }, time);
}