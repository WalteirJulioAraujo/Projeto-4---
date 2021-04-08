// Testando o numero de cartas

// let numerocartas = prompt("qual o numero de cartas?");
let numerocartas = 6

let testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);

while(testecartas){
    numerocartas = prompt("qual o numero de cartas?");
    testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);
}

// Criando array com as imagens

const imagens = ['Imagens/bobrossparrot.gif','Imagens/explodyparrot.gif','Imagens/fiestaparrot.gif','Imagens/metalparrot.gif','Imagens/revertitparrot.gif','Imagens/tripletsparrot.gif','Imagens/unicornparrot.gif']
// Adicionando as cartas com imagens unicas duas a duas

let qtdecartas = document.querySelector(".cartas");
let carta = document.querySelector(".cartas .carta img");

for(let i = 0; i < numerocartas; i++){
    if(i<2){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[0]} class="gifs esconder"></div>`;
    }else if(i<4){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[1]} class="gifs esconder"></div>`;
    }else if(i<6){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[2]} class="gifs esconder"></div>`;
    }else if(i<8){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[3]} class="gifs esconder"></div>`;
    }else if(i<10){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[4]} class="gifs esconder"></div>`;
    }else if(i<12){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[5]} class="gifs esconder"></div>`;
    }else if(i<14){
        qtdecartas.innerHTML +=`<div class="carta" onclick="virarcarta(this)"><img src="Imagens/front.png" class="costa-carta"><img src=${imagens[6]} class="gifs esconder"></div>`;
    }
}

function virarcarta(elementoClicado){
    console.log(elementoClicado);
    const papagaio = elementoClicado.querySelector(".costa-carta");
    const gif = elementoClicado.querySelector(".gifs");

    papagaio.classList.toggle("esconder");
    gif.classList.toggle("esconder");

}