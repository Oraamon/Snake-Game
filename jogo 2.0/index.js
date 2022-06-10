const canvas = document.querySelector('canvas')
canvas.width = innerWidth;
canvas.height = innerHeight;





console.log(localStorage.getItem('scores'))
var scores = {
    name:['Player1','Player2','Player3','Player4','Player5'],
    pontuacao:[0,0,0,0,0]
}
console.log(scores)
if(localStorage.getItem('scores') != null){
    scores = JSON.parse(localStorage.getItem('scores'))
    
}
const startGame = document.querySelector('#startGame')
const Menu = document.querySelector('#Menu')
const score = document.querySelector('#score')
const pointsEl = document.querySelector('#pointsEl')
const myAudio = new Audio('som_ponto.wav');
const myAudiomorte = new Audio('explosion.wav');
const myAudioBackground = new Audio('background_music.mp3');
const Menu2 = document.querySelector('#Menu2')
const pointsEl2 = document.querySelector('#pointsEl2')
const pointsEl3 = document.querySelector('#pointsEl3')
const restartGame = document.querySelector('#restartGame')
const BttScoreboard = document.querySelector('#Bttscoreboard')
const Scoreboard = document.querySelector('#scoreboard')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')
const score3 = document.querySelector('#score3')
const score4 = document.querySelector('#score4')
const score5 = document.querySelector('#score5')
const points1 = document.querySelector('#points1')
const points2 = document.querySelector('#points2')
const points3 = document.querySelector('#points3')
const points4 = document.querySelector('#points4')
const points5 = document.querySelector('#points5')

score1.innerHTML = `${scores.name[0]} Points`
score2.innerHTML = `${scores.name[1]} Points`
score3.innerHTML = `${scores.name[2]} Points`
score4.innerHTML = `${scores.name[3]} Points`
score5.innerHTML = `${scores.name[4]} Points`

myAudiomorte.volume=0.1
myAudio.volume = 0.5
Menu2.style.display = 'none'
Scoreboard.style.display = 'none'

function verificaScore(){
    if(scores.pontuacao[0]<magia){
        scores.pontuacao[4] =  scores.pontuacao[3]
        scores.pontuacao[3] =  scores.pontuacao[2]
        scores.pontuacao[2] =  scores.pontuacao[1]
        scores.pontuacao[1] =  scores.pontuacao[0]

        scores.name[4] =  scores.name[3]
        scores.name[3] =  scores.name[2]
        scores.name[2] =  scores.name[1]
        scores.name[1] =  scores.name[0]
        
        scores.pontuacao[0] = magia
        scores.name[0] = prompt("Nome")
       
    }
    else if(scores.pontuacao[1] < magia){
        scores.pontuacao[4] =  scores.pontuacao[3]
        scores.pontuacao[3] =  scores.pontuacao[2]
        scores.pontuacao[2] =  scores.pontuacao[1]
        scores.name[4] =  scores.name[3]
        scores.name[3] =  scores.name[2]
        scores.name[2] =  scores.name[1]
        scores.pontuacao[1] = magia
        scores.name[1] = prompt("Nome")
    }
    else if(scores.pontuacao[2] < magia){
        scores.pontuacao[4] =  scores.pontuacao[3]
        scores.pontuacao[3] =  scores.pontuacao[2]
        scores.name[4] =  scores.name[3]
        scores.name[3] =  scores.name[2]
        scores.pontuacao[2] = magia
        scores.name[2] = prompt("Nome")
    }
    else if(scores.pontuacao[3] < magia){
        scores.pontuacao[4] =  scores.pontuacao[3]
        scores.name[4] =  scores.name[3]
        scores.pontuacao[3] = magia
        scores.name[3] = prompt("Nome")
    }
    else if(scores.pontuacao[4] < magia){
        scores.pontuacao[4] = magia
        scores.name[4] = prompt("Nome")
    }
    localStorage.setItem('scores', JSON.stringify(scores));
}



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



restartGame.addEventListener('click', () => {
    iniciar();
    Scoreboard.style.display = 'none'
    
    if (typeof myAudioBackground.loop == 'boolean')
{
    myAudioBackground.loop = true;
}
myAudioBackground.play()
myAudioBackground.volume=1
})



BttScoreboard.addEventListener('click', () => {
    verificaScore()

points1.innerHTML = scores.pontuacao[0]
points2.innerHTML = scores.pontuacao[1]
points3.innerHTML = scores.pontuacao[2]
points4.innerHTML = scores.pontuacao[3]
points5.innerHTML = scores.pontuacao[4]
score1.innerHTML = `${scores.name[0]} Points`
score2.innerHTML = `${scores.name[1]} Points`
score3.innerHTML = `${scores.name[2]} Points`
score4.innerHTML = `${scores.name[3]} Points`
score5.innerHTML = `${scores.name[4]} Points`

    Menu2.style.display = 'none'
    Scoreboard.style.display = 'flex'
    pointsEl3.innerHTML = magia;
    if (typeof myAudioBackground.loop == 'boolean')
{
    myAudioBackground.loop = true;
}
myAudioBackground.play()
myAudioBackground.volume=0.05
})