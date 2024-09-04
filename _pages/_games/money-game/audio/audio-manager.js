


const game_soundtrack = [
    {
        name: 'main_menu_soundtrack',
        link: '/_pages/_games/money-game/audio/audio-files/Goddess Of The Sea - Jimena Contreras.mp3'
    },
    {
        name: 'soundtrack_1',
        link: '/_pages/_games/money-game/audio/audio-files/Gully Dreams - Hanu Dixit.mp3'
    },
    {
        name: 'soundtrack_2',
        link: '/_pages/_games/money-game/audio/audio-files/Desert Drive - Everet Almond.mp3'
    },
    {
        name: 'soundtrack_3',
        link: '/_pages/_games/money-game/audio/audio-files/Indian Cinemascope - Hanu Dixit.mp3'
    },
    {
        name: 'soundtrack_4',
        link: '/_pages/_games/money-game/audio/audio-files/Burlesque - National Sweetheart.mp3'
    },
    {
        name: 'soundtrack_5',
        link: '/_pages/_games/money-game/audio/audio-files/Highway Nocturne - National Sweetheart.mp3'
    },
    {
        name: 'soundtrack_6',
        link: '/_pages/_games/money-game/audio/audio-files/Mirage melody - Patrick Patrikios.mp3'
    }
];


const game_soundeffects = [
    {
        name: 'money_sound',
        link: '/_pages/_games/money-game/audio/audio-files/money-pickup.mp3'
    },
    {
        name: 'button_sound',
        link: '/_pages/_games/money-game/audio/audio-files/button-click.mp3'
    }
];


const start_menu_music = document.createElement('audio');
start_menu_music.src = game_soundtrack[0].link;
start_menu_music.loop = true;
start_menu_music.autoplay = true;


let money_soundeffect = game_soundeffects[0].link;
let money_sound = document.createElement('audio');
money_sound.src = money_soundeffect;

let button_soundeffect = game_soundeffects[1].link;
let button_sound = document.createElement('audio');
button_sound.src = button_soundeffect;


function soundtrackShuffling() {

    var track_number = Math.floor(Math.random() * (game_soundtrack.length - 1) + 1);

    var track = game_soundtrack[track_number].link;

    const song_playing = document.createElement('audio');
    song_playing.src = track;

    song_playing.addEventListener('ended', () => {
        soundtrackShuffling();
    });

    song_playing.play();

}


function moneySound() {
    money_sound.currentTime = 0;
    money_sound.play();
}

function buttonSound() {
    money_sound.muted = true;
    button_sound.currentTime = 0;
    button_sound.play();
}

button_sound.addEventListener('ended', () => {
    money_sound.muted = false;
});
