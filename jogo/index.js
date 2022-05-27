const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas)
const startGame = document.querySelector('#startGame')
const Menu = document.querySelector('#Menu')
const score = document.querySelector('#score')

startGame.addEventListener('click', () => {
    iniciar();
    Menu.style.display = 'none'
})