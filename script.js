// Testando o numero de cartas

let numerocartas = prompt("qual o numero de cartas?");

let testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);

while(testecartas){
    numerocartas = prompt("qual o numero de cartas?");
    testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);
}

// Criando array com as imagens

const imagens = ['Imagens/bobrossparrot.gif','Imagens/explodyparrot.gif','Imagens/fiestaparrot.gif','Imagens/metalparrot.gif','Imagens/revertitparrot.gif','Imagens/tripletsparrot.gif','Imagens/unicornparrot.gif']

// Adicionando as cartas

let qtdecartas = document.querySelector(".cartas");
let carta = document.querySelector(".cartas .carta img");

for(let i = 0; i < numerocartas; i++){
    if(i<2){
    qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[0]}></div>`;
    }else if(i<4){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[1]}></div>`;
    }else if(i<6){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[2]}></div>`;
    }else if(i<8){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[3]}></div>`;
    }else if(i<10){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[4]}></div>`;
    }else if(i<12){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[5]}></div>`;
    }else if(i<14){
        qtdecartas.innerHTML +=`<div class="carta"><img src=${imagens[6]}></div>`;
    }
}
