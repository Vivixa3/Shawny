var AudioSCARE = document.getElementById('audioSCARE');
var AudioPLAY = document.getElementById('audioPLAY');
var AudioClickToPlay = document.getElementById('ClickToPlay')
var Story = "January 29th, 1984. It was a cold morning, a morning like any other day of the season. This was until I noticed something peculiar in the snow outside my window. It was 5:23AM and the sky was getting brighter and brighter and I noticed movement under the snow, seemingly deliberate, at which point i was concerned that it was too late. I am desperate and hope that whoever finds this knows the grave danger you are putting yourself in by trying to end the bloodshed that occasionnaly happens in this rich oil region. Your truly in fear, Officer Havier.";
var LengthText = Story.length;
var AddedText = "";
var Count = 0;

var SansNOISE = document.getElementById('audioSans');
SansNOISE.volume = 0.4;

var DisabledButton = false;

AudioClickToPlay.play();
AudioClickToPlay.playbackRate = 2;

// Function to generate a random position outside the screen
function getRandomOutsidePosition(maxOffset) {
    return Math.floor(Math.random() * maxOffset) - maxOffset + 'px';
}

// Function to generate a random position inside the screen
function getRandomInsidePosition(max, offset = 0) {
    return Math.floor(Math.random() * max) + offset + 'px';
}

// Function to animate the snow element
function animateSnow(snow) {
    // Start outside the top-left corner
    const startTop = getRandomOutsidePosition(-550);  // Start slightly above the screen
    const startLeft = getRandomOutsidePosition(250);  // Start slightly left of the screen

    // End outside the bottom-right corner
    const endTop = parseInt(getRandomInsidePosition(window.innerHeight, window.innerHeight + (Math.random()*80)+100)) + 'px';  // End below the screen
    const endLeft = parseInt(getRandomInsidePosition(window.innerWidth, window.innerWidth + (Math.random()*80)+100)) + 'px';  // End to the right of the screen

    // Random animation duration between 3s and 7s
    const duration = (Math.random() * 5 + 30).toFixed(2) + 's';

    // Apply unique keyframe animation
    const animationName = `moveSnow${Math.random().toString(36).substring(2, 15)}`;

    // Set the animation using the unique keyframe
    snow.style.animation = `${animationName} ${duration} linear forwards`;
    snow.id = "Snow";

    // Define the keyframes with unique names
    const keyframes = `
        @keyframes ${animationName} {
            from {
                top: ${startTop};
                left: ${startLeft};
            }
            to {
                top: ${endTop};
                left: ${endLeft};
            }
        }
    `;

    // Append the keyframes to the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Remove the snowflake and keyframe after the animation is complete
    snow.addEventListener('animationend', () => {
        snow.remove();
        styleSheet.remove(); // Remove the keyframe style as well
    });
}

// Function to create and animate snow elements
function createSnowElement() {
    const SnowX = document.createElement("div");
    SnowX.className = "snowflake";  // Use a class for consistent styling
    SnowX.style.position = "absolute";  // Ensure it is positioned absolutely
    document.body.appendChild(SnowX);  // Append directly to the body
    animateSnow(SnowX);
}

// Recursive function to create snow with delay
function Snow() {
    if (DisabledButton === false) {
        createSnowElement();
        setTimeout(Snow, 170);  // Recursively call Snow() after 170ms
    }
    else if (DisabledButton === true) {
        for (i = 0; i > document.getElementsByClassName('snowflake').length;i++) {
            if (document.getElementsByClassName('snowflake')[i] != null) {
                document.getElementsByClassName('snowflake')[i].remove();
            }
        }  
    }
}

// Function to clear all snowflakes
function clearSnowflakes() {
    const snowflakes = document.querySelectorAll('.snowflake');
    snowflakes.forEach(snowflake => {
        snowflake.remove();
    });
}

// Listen for visibility change event to clear snowflakes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearSnowflakes();
    }
});

// Initial call to start snow animation
Snow();



function Begin() {

    if (DisabledButton === false) {
    DisabledButton = true;
    var IntroButton = document.getElementsByClassName("RemoveThis0");
    var IntroIMG = document.getElementById("BlurryIntroBG");
    var IntroTitle = document.getElementById("TitleIntro");



    if (IntroButton.length > 0) {
    IntroButton[0].remove();         // Removes BUTTON
    }

    if (IntroIMG != null) {
    IntroIMG.remove();              // Removes IMAGE
    }
  
    if (IntroTitle != null) {
    IntroTitle.remove();           // Removes TITLE
    }



    AudioClickToPlay.pause(); // check if 'remove();' makes any significant performance gains
    AudioPLAY.play();
    AudioPLAY.loop = true;

function delay(i, Content, DelayIT, CountDelay) {
    setTimeout(function () {
        document.getElementById('displayText').innerText = Content;
        SansNOISE.currentTime = 0;
        SansNOISE.play();
    }, CountDelay + DelayIT);
}

function noise(DelayIT, CountDelay) {
    setTimeout(function () {
        SansNOISE.currentTime = 0;
        SansNOISE.pause();
    }, CountDelay + DelayIT + 250);
}

var CountDelay = 0;
var Slowcomma = false;
var Slowpoint = false;
while (LengthText > Count) {
    var DelayIT = 70;

    if (Slowcomma) {
        DelayIT = 800;
        Slowcomma = false;
    }

    if (Slowpoint) {
        DelayIT = 1400;
        Slowpoint = false;
    }

    var currentChar = Story.charAt(Count); // Get the current character
    AddedText += currentChar; // Append the current character to AddedText
    console.log(AddedText)
    var NewText = AddedText;
    if (currentChar === ".") {
        console.log("POINT .");
        Slowpoint = true;
    } else if (currentChar === ",") {
        console.log("COMMA ,");
        Slowcomma = true;
    }

    CountDelay += DelayIT;
    Count += 1;
    delay(AddedText.length, NewText, DelayIT, CountDelay);
    noise(DelayIT, CountDelay);
}

// Create and add the scare image to the DOM
var Scare = document.createElement('img');
Scare.id = "scared";
Scare.src = "https://media.tenor.com/Q-ljDUwq8-QAAAAi/fnaf-foxy.gif";

// Append the image to the body or a specific container
setTimeout(function () {
    document.body.appendChild(Scare); // Append the scare image to the body
    AudioPLAY.pause();
    AudioPLAY.currentTime = 0;
    AudioSCARE.currentTime = 0.25;
    AudioSCARE.play();
}, CountDelay + 900);


var ix = 1;
var Fade = 0;
// Remove the image after a short delay
setTimeout(function () {
    Scare.remove();
    var thunder = document.getElementById('audioThunder');
    var rain = document.getElementById('audioRain')
    thunder.play();
    rain.play();
    for (ix = 1; ix >= -0.1; ix -= 0.05) {
        (function (ix, Fade) {
            setTimeout(function () {
                document.getElementById('displayText').style.opacity = ix;
                document.getElementById('displayText').style.color = '#817d7d';
                console.log(ix);
            }, Fade);
        })(ix, Fade);

        Fade += 200; // Increment the delay for each step in the fade-out
    }
}, CountDelay + 1550);


setTimeout(function () {
    // Create the 'CHAPTER 1' element
    var chaptext = document.createElement('code');
    var NewText1 = "";
    var int = 0;
    var chapterContent = "CHAPTER-1"; // The text you want to display
    chaptext.id = "chapter";
    // Append the chaptext element to the body (or another container)
    document.body.appendChild(chaptext);
    console.log("O/-/O")
    var DelayIT = 60;

    function appendChapterText() {
        if (int < chapterContent.length) {
            chaptext.innerText += chapterContent.charAt(int);
            console.log(chapterContent.charAt(int), "Brah", int, chapterContent.length);
            SansNOISE.currentTime = 0;
            SansNOISE.play();
            noise(0, 0);
            int++;
            setTimeout(appendChapterText, DelayIT); // Recursively call to append the next character
        }
    }

    appendChapterText(); // Start appending text
}, CountDelay + 1550 + Fade + 4500);



}
}
