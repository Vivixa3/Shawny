const starrySkyOverlay = document.querySelector(".starry-sky-overlay");
const playText = document.getElementById("playText");
const menuMusic = document.getElementById("mainmenumusic");

const numberOfStars = 200;



for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3;
    const topPosition = Math.random() * window.innerHeight;
    const leftPosition = Math.random() * window.innerWidth;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = topPosition + 'px';
    star.style.left = leftPosition + 'px';

    starrySkyOverlay.appendChild(star);
}

document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the spacebar
    if (event.code === 'Space') {
        starrySkyOverlay.remove();
        playText.remove();
        menuMusic.play();
        menuMusic.muted = false;
        console.log('Spacebar was pressed!');
    }
});

document.addEventListener('click', function (event) {
    starrySkyOverlay.remove();
    playText.remove();
    menuMusic.play();
    menuMusic.muted = false;
    console.log('Screen clicked!', event, 'You got your first clue 123.');
});

const background = document.querySelector('.background');
const numberOfCircles = 10;
const bouncingCircles = [];

function createBouncingCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.top = `${Math.random() * 100}vh`;
    circle.style.left = `${Math.random() * 100}vw`;

    const speedX = (Math.random() * 2 - 1) * 2;
    const speedY = (Math.random() * 2 - 1) * 2;

    bouncingCircles.push({
        element: circle,
        speedX,
        speedY
    });

    background.appendChild(circle);
}


function animateCircles() {
    bouncingCircles.forEach(circleData => {
        const { element, speedX, speedY } = circleData;
        const rect = element.getBoundingClientRect();
        let newX = rect.left + speedX;
        let newY = rect.top + speedY;

        if (newX <= 0 || newX + rect.width >= window.innerWidth) {
            circleData.speedX = -speedX;
        }
        if (newY <= 0 || newY + rect.height >= window.innerHeight) {
            circleData.speedY = -speedY;
        }

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    });

    requestAnimationFrame(animateCircles);
}




for (let i = 0; i < numberOfCircles; i++) {
    createBouncingCircle();
}

animateCircles();