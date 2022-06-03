 /*  https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes  */
const pantalla = document.querySelector("#figura"); 
let pincel = pantalla.getContext("2d"); 

pincel.fillRect(0, 0, 150, 200);
pincel.fillStyle ="lightgrey";

function dibujarAhorcado(a,b,c,d){
    pincel.beginPath();
    pincel.lineWidth = 7;
    pincel.strokeStyle ='green';
    pincel.moveTo(a,b);
    pincel.lineTo(c,d);
    pincel.stroke();
    
}

function inicioCanvas(){
    pincel.clearRect(0, 0, 150, 200);
    dibujarAhorcado(5,190,65,190);  //BASE
    dibujarAhorcado(30,190,30,17);  //POSTE
    dibujarAhorcado(30,20,75,20); //POSTE SUP1
    dibujarAhorcado(75,17,75,50); //SOGA
}

inicioCanvas();

