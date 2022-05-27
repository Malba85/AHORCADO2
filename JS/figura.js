 /*  https://developer.mozilla.org/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes  */
const pantalla = document.querySelector("#figura"); 
let pincel = pantalla.getContext("2d"); 

pincel.fillRect(0, 0, 200, 300);
pincel.fillStyle ="lightgrey";

function dibujarAhorcado(a,b,c,d){
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.strokeStyle ='green';
    pincel.moveTo(a,b);
    pincel.lineTo(c,d);
    pincel.stroke();
    
}

function inicioCanvas(){
    pincel.clearRect(0, 0, 200, 300);
    dibujarAhorcado(20,250,100,250);  //BASE
    dibujarAhorcado(60,250,60,60);  //POSTE
    dibujarAhorcado(55,60,100,60); //POSTE SUP1
    dibujarAhorcado(100,55,100,100); //SOGA
}

inicioCanvas();



