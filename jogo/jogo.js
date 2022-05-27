var tela;
var ctx;

var cabeca;
var maca;
var bola;

var pontos;
var maca_x;
var maca_y;
var magia;

var paraEsquerda = false;
var paraDireita = true;
var paraCima = false;
var paraBaixo = false;
var noJogo = true;    

const TAMANHO_PONTO = 40;
const ALEATORIO_MAXIMOx = (innerWidth/TAMANHO_PONTO);
const ALEATORIO_MAXIMOy = (innerHeight/TAMANHO_PONTO);
const ATRASO = 140;
const C_ALTURA = innerHeight;
const C_LARGURA = innerWidth;    

const TECLA_ESQUERDA = 37;
const TECLA_DIREITA = 39;
const TECLA_ACIMA = 38;
const TECLA_ABAIXO = 40;

var x = [];
var y = [];

onkeydown = verificarTecla; 



function iniciar() {
    tela = document.getElementById("tela");
    ctx = tela.getContext("2d");

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, C_LARGURA, C_ALTURA);

    carregarImagens();
    criarCobra();
    localizarMaca();
    setTimeout("cicloDeJogo()", ATRASO);
}    

function carregarImagens() {
    cabeca = new Image();
    cabeca.src = "cabeca.png";    
    
    bola = new Image();
    bola.src = "ponto.png"; 
    
    maca = new Image();
    maca.src = "maca.png"; 
}

function criarCobra() {
    pontos = 3;
	magia = 0;
    for (var z = 0; z < pontos; z++) {
        x[z] = 40 - z * TAMANHO_PONTO;
        y[z] = 40;
    }
}

function localizarMaca() {
    var r = Math.floor(Math.random() * ALEATORIO_MAXIMOx);
    maca_x = r * TAMANHO_PONTO;

    r = Math.floor(Math.random() * ALEATORIO_MAXIMOy);
    maca_y = r * TAMANHO_PONTO;
}    

function cicloDeJogo() {
    if (noJogo) {
        verificarMaca();
        verificarColisao();
        mover();
        fazerDesenho();
        setTimeout("cicloDeJogo()", ATRASO);
    }
}

function verificarMaca() {
    console.log(x[0],maca_x) 
    if ((x[0] == maca_x) && (y[0] == maca_y)) {
        pontos++;
        magia += 100;
        localizarMaca();
        score.innerHTML = magia;
    }
}    

function verificarColisao() {
    for (var z = pontos; z > 0; z--) {
        if ((z > 4) && (x[0] == x[z]) && (y[0] == y[z])) {
            noJogo = false;
        }
    }

    if (y[0] >= C_ALTURA) {
        noJogo = false;
    }

    if (y[0] < 0) {
       noJogo = false;
    }

    if (x[0] >= C_LARGURA) {
      noJogo = false;
    }

    if (x[0] < 0) {
      noJogo = false;
    }
}

function mover() {
    for (var z = pontos; z > 0; z--) {
        x[z] = x[z-1];
        y[z] = y[z-1];
    }

    if (paraEsquerda) {
        x[0] -= TAMANHO_PONTO;
    }

    if (paraDireita) {
        x[0] += TAMANHO_PONTO;
    }

    if (paraCima) {
        y[0] -= TAMANHO_PONTO;
    }

    if (paraBaixo) {
        y[0] += TAMANHO_PONTO;
    }
}    

function fazerDesenho() {
    ctx.clearRect(0, 0, C_LARGURA, C_ALTURA);
	ctx.fillRect(0, 0, C_LARGURA, C_ALTURA);
	
    if (noJogo) {
        ctx.drawImage(maca, maca_x, maca_y);
		
        for (var z = 0; z < pontos; z++) {
            if (z == 0) {
                ctx.drawImage(cabeca, x[z], y[z]);
            } else {
                ctx.drawImage(bola, x[z], y[z]);
            }
        }    
    } else {
        fimDeJogo();
    }        
}

function fimDeJogo() {
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle"; 
    ctx.textAlign = "center"; 
    ctx.font = "normal bold 18px serif";
    ctx.fillText("Fim de Jogo", C_LARGURA/2, C_ALTURA/2);
}

function verificarTecla(e) {
    var tecla = e.keyCode;

    if ((tecla == TECLA_ESQUERDA) && (!paraDireita)) {
        paraEsquerda = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_DIREITA) && (!paraEsquerda)) {
        paraDireita = true;
        paraCima = false;
        paraBaixo = false;
    }

    if ((tecla == TECLA_ACIMA) && (!paraBaixo)) {
        paraCima = true;
        paraDireita = false;
        paraEsquerda = false;
    }

    if ((tecla == TECLA_ABAIXO) && (!paraCima)) {
        paraBaixo = true;
        paraDireita = false;
        paraEsquerda = false;
    }       
    
}
