const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas)
const startGame = document.querySelector('#startGame')
const Menu = document.querySelector('#Menu')
const score = document.querySelector('#score')
const pointsEl = document.querySelector('#pointsEl')
const myAudio = new Audio('som_ponto.mp3');
const myAudioBackground = new Audio('background_music.mp3');

startGame.addEventListener('click', () => {
    iniciar();
    Menu.style.display = 'none'
    
    if (typeof myAudioBackground.loop == 'boolean')
{
    myAudioBackground.loop = true;
}
myAudioBackground.play()
myAudioBackground.volume=0.05
})