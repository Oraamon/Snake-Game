const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas)
const startGame = document.querySelector('#startGame')
const Menu = document.querySelector('#Menu')
startGame.addEventListener('click', () => {
    iniciar();
    Menu.style.display = 'none'
})