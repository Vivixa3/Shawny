
// button audio

const button_sound = new Audio('/_pages/_games/money-game/audio/audio-files/button-click.mp3')
const buttons = document.getElementsByTagName('button');
const buttonArray = Array.prototype.slice.call(buttons);

buttonArray.forEach(function(button) {
    button.addEventListener('click', function() {
        button_sound.currentTime = 0;
        button_sound.play()
    });
});