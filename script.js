
//let numerocartas = prompt("qual o numero de cartas?");
numerocartas=10;
let testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);

while(testecartas){
    numerocartas = prompt("qual o numero de cartas?");
    testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);
}

let tempo = 0;
let idtime = 0;
let temporizador = document.querySelector(".temporizador");
function timer(){
    tempo++;
    temporizador.innerHTML = tempo;
}
//idtime=setInterval(timer,1000);

const imagens = ['Imagens/bobrossparrot.gif','Imagens/explodyparrot.gif','Imagens/fiestaparrot.gif','Imagens/metalparrot.gif','Imagens/revertitparrot.gif','Imagens/tripletsparrot.gif','Imagens/unicornparrot.gif'];
imagens.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

let metadecartas1=[];
let metadecartas2=[];
for(let i = 0; i < (numerocartas/2); i++){
    metadecartas1.push(`<div class="carta carta${i}" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[i]} class="gifs esconder"></div>`);
    metadecartas2.push(`<div class="carta carta${i}" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[i]} class="gifs esconder"></div>`);
}

let totaldecartas = metadecartas1.concat(metadecartas2);

totaldecartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

let qtdecartas = document.querySelector(".cartas");
for(let i = 0; i < numerocartas; i++){
    qtdecartas.innerHTML += `${totaldecartas[i]}`;
}

let ultimacarta = null;
let contadorpares = 0; 
const paresvitoria = numerocartas / 2 ;
let jogadas = 0;

function virarcarta(elementoClicado){
    elementoClicado.classList.add("rotacionar");
    if(ultimacarta === null){
        ultimacarta = elementoClicado;
        ultimacarta.querySelector(".costa-carta").classList.add("esconder");
        ultimacarta.querySelector(".gifs").classList.remove("esconder");
        jogadas++;

    }else{

        jogadas++;

        elementoClicado.querySelector(".costa-carta").classList.add("esconder");
        elementoClicado.querySelector(".gifs").classList.remove("esconder");

        if(ultimacarta.classList.value === elementoClicado.classList.value){
            contadorpares++;
            ultimacarta.removeAttribute("onclick");
            elementoClicado.removeAttribute("onclick");
        } else {
            setTimeout(Desvira,1000,elementoClicado,ultimacarta);
        }
        ultimacarta = null;
    }

    setTimeout(vencer,200);
}

function vencer(){
    if(contadorpares === paresvitoria){
        alert(`Você venceu com ${jogadas} jogadas e em ${tempo} segundos!`);
        clearInterval(idtime);
    }
}

function Desvira(elementoClicado,ultimacarta){
    ultimacarta.querySelector(".costa-carta").classList.remove("esconder");
    ultimacarta.querySelector(".gifs").classList.add("esconder");
    elementoClicado.querySelector(".costa-carta").classList.remove("esconder");
    elementoClicado.querySelector(".gifs").classList.add("esconder");

    elementoClicado.classList.remove("rotacionar");
    ultimacarta.classList.remove("rotacionar");
}

// Funcao que embaralha
function comparador() { 
	return Math.random() - 0.5; 
}
