// Testando o numero de cartas

// let numerocartas = prompt("qual o numero de cartas?");
let numerocartas = 6

let testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);

while(testecartas){
    numerocartas = prompt("qual o numero de cartas?");
    testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);
}

// Criando array com as imagens

const imagens = ['Imagens/bobrossparrot.gif','Imagens/explodyparrot.gif','Imagens/fiestaparrot.gif','Imagens/metalparrot.gif','Imagens/revertitparrot.gif','Imagens/tripletsparrot.gif','Imagens/unicornparrot.gif'];
// const todascartas2 = [`<div class="carta carta1" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[0]} class="gifs esconder"></div>`,`<div class="carta carta2" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[1]} class="gifs esconder"></div>`,`<div class="carta carta3" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[2]} class="gifs esconder"></div>`,`<div class="carta carta4" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[3]} class="gifs esconder"></div>`,`<div class="carta carta5" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[4]} class="gifs esconder"></div>`,`<div class="carta carta6" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[5]} class="gifs esconder"></div>`,`<div class="carta carta7" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[6]} class="gifs esconder"></div>`];

let todascartas=[];
for(let i = 0; i < 7; i++){
    todascartas.push(`<div class="carta carta${i}" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[i]} class="gifs esconder"></div>`)
}
// Adicionando as cartas com imagens unicas duas a duas

let qtdecartas = document.querySelector(".cartas");
let carta = document.querySelector(".cartas .carta img");

for(let i = 0; i < numerocartas; i++){
    if(i<2){
        qtdecartas.innerHTML +=`${todascartas[0]}`;
    }else if(i<4){
        qtdecartas.innerHTML +=`${todascartas[1]}`;
    }else if(i<6){
        qtdecartas.innerHTML +=`${todascartas[2]}`;
    }else if(i<8){
        qtdecartas.innerHTML +=`${todascartas[3]}`;
    }else if(i<10){
        qtdecartas.innerHTML +=`${todascartas[4]}`;
    }else if(i<12){
        qtdecartas.innerHTML +=`${todascartas[5]}`;
    }else if(i<14){
        qtdecartas.innerHTML +=`${todascartas[6]}`;
    }
}

let ultimacarta = null;
let contadorpares = 0; 
const paresvitoria = numerocartas / 2 ;

function virarcarta(elementoClicado){
    console.log(elementoClicado);
    const papagaio = elementoClicado.querySelector(".costa-carta");
    const gif = elementoClicado.querySelector(".gifs");

    console.log(elementoClicado.classList.value);
    if(ultimacarta === null){
        ultimacarta = elementoClicado;
        ultimacarta.querySelector(".costa-carta").classList.add("esconder");
        ultimacarta.querySelector(".gifs").classList.remove("esconder");

    }else{
        elementoClicado.querySelector(".costa-carta").classList.add("esconder");
        elementoClicado.querySelector(".gifs").classList.remove("esconder");

        if(ultimacarta.classList.value === elementoClicado.classList.value){
            console.log("igual");
            contadorpares++;
        } else {
            ultimacarta.querySelector(".costa-carta").classList.remove("esconder");
            ultimacarta.querySelector(".gifs").classList.add("esconder");
            elementoClicado.querySelector(".costa-carta").classList.remove("esconder");
            elementoClicado.querySelector(".gifs").classList.add("esconder");
        }
        ultimacarta = null;
    }

    vencer();
}

function vencer(){
    if(contadorpares === paresvitoria){
        alert("Voce venceu");
    }
}


// Embaralhamento
imagens.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
todascartas.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
