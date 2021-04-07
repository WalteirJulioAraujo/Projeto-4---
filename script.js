let numerocartas = prompt("qual o numero de cartas?");

let testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);

while(testecartas){
    numerocartas = prompt("qual o numero de cartas?");
    testecartas = (numerocartas < 4) || (numerocartas > 14) || (numerocartas%2==1);
}

let qtdecartas = document.querySelector(".cartas");

for(let i = 0; i < numerocartas; i++){
    qtdecartas.innerHTML += '<div class="carta"></div>'
}


