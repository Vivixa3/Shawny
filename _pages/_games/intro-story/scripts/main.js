mainmenumusic = document.getElementById('main-menu-music');

// Story Intro text, could be changed to any text using the same variable name later in the code
let Story = "January 29th, 1984. It was a cold morning, a morning like any other day of the season. This was until I noticed something peculiar in the snow outside my window. It was 5:23AM and the sky was getting brighter and brighter and I noticed movement under the snow, seemingly deliberate, at which point i was concerned that it was too late. I am desperate and hope that whoever finds this knows the grave danger you are putting yourself in by trying to end the bloodshed that occasionnaly happens in this rich oil region. Your truly in fear, Officer Havier.";

// Variables that manages the story states
let storyStates = ["Menu", "Story", "Screamer", "Chapter 1"];
let storyStateIndex = 0;
let currentStoryState = storyStates[storyStateIndex];

let gameStarted = false; // Flag to check if the game was started

function startGame() {
    doStoryStates("add");
}

// Variables for the id of the different elements of the story
const mainmenu = document.getElementById("main-menu");
const intro = document.getElementById("intro-disturbance");

window.addEventListener('load', () => {
    doStoryStates();
});

/* This function changes the state of each states of the story. 
It makes the playStory function to be call different actions depending on the state of the story. 
For example, if the story state is "Screamer", then the playStory function will automatically set the story to the screamer. 
It makes the testing shorter and more efficient. */
function doStoryStates(addRemove) {
    if (addRemove === "add") {
        if (storyStateIndex <= storyStates.length) {
            storyStateIndex += 1;
            currentStoryState = storyStates[storyStateIndex];
            playStory();
        }
    } else if (addRemove === "remove") {
        if (storyStateIndex <= storyStates.length) {
            storyStateIndex -= 1;
            currentStoryState = storyStates[storyStateIndex];
            playStory();
        }
    } else if (addRemove === undefined) {
        playStory();
    } else {
        console.error("There was an error with the Story Progress, refreshing the page could help");
    }
}

/* The playStory function manage what is shown to the screen. Depends 100% of the doStoryState function, and will give an error if its not called first */
function playStory() {
    if (storyStateIndex === 0) {

        console.log("Game Initialized");

        mainmenu.style.display = "block";
        intro.style.display = "none";
        
    } else if (currentStoryState === storyStates[1]) {
        console.log("Story Telling");

        intro.style.display = "block";
        mainmenu.style.display = "none";

        let text = Story;
        let index = 0;

        const normalSpeed = 75; // Normal speed of typing
        const commaPause = 500; // Pause duration after a comma

        function typewriter() {
            if (index < text.length) {
                audioPlay("/_pages/_games/intro-story/audio/typewritesound.mp3");
                document.getElementById("typewriter").innerHTML += text.charAt(index);
                let delay = text.charAt(index) === '.' || text.charAt(index) === ',' ? commaPause : normalSpeed;                index++;
                setTimeout(typewriter, delay);
            } else {
                doStoryStates("add");
            }
        }

        typewriter();

    } else if (storyStateIndex === 2) {

        console.log("Screamer");
        
        showscreamer("https://media.tenor.com/Q-ljDUwq8-QAAAAi/fnaf-foxy.gif", 1550);
        audioPlay("./audio/jumpscare.mp3");

    } else if (storyStateIndex === 3) {
        console.log("Coming soon...");
    } else {
        console.error("SOmething unexpected happened, please contact the devs to report the issue.");
    }
}

let SansNOISE = document.getElementById('audioSans');
SansNOISE.volume = 0.4;

function start() {

    doStoryStates("add")
    playStory();

    // setTimeout(function () {
    //     // Create the 'CHAPTER 1' element
    //     let chaptext = document.createElement('code');
    //     let NewText1 = "";
    //     let int = 0;
    //     let chapterContent = "CHAPTER-1"; // The text you want to display
    //     chaptext.id = "chapter";
    //     // Append the chaptext element to the body (or another container)
    //     document.body.appendChild(chaptext);
    //     console.log("O/-/O")
    //     let DelayIT = 60;

    //     function appendChapterText() {
    //         if (int < chapterContent.length) {
    //             chaptext.innerText += chapterContent.charAt(int);
    //             console.log(chapterContent.charAt(int), "Brah", int, chapterContent.length);
    //             SansNOISE.currentTime = 0;
    //             SansNOISE.play();
    //             noise(0, 0);
    //             int++;
    //             setTimeout(appendChapterText, DelayIT); // Recursively call to append the next character
    //         }
    //     }

    //     appendChapterText(); // Start appending text
    // }, CountDelay + 1550 + Fade + 4500);
}
