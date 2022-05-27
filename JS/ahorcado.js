const palabras = ["casa", "arbol",  "pelota", "gato", "auto"]; // PALABRAS DE BASE

let palabra = "";  //PALABRA OBJETIVO
let adivinado = []; 
let errores = 0;
let maxErrores = 6;
let estadoPalabra = null;

function palabraAleatoria(){
    palabra = palabras[Math.floor(Math.random()*palabras.length)]; //FUNCION SELECC. ALEATORIA DE PALABRA
}

//FUNCION P/ GENERAR BOTONES QUE INCLUYE FUNCION CUANDO SELECCIONO LETRA
function generarBotones() {
    let teclas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').map(letra =>
      ` 
        <button
          class="btn btn-lg btn-primary m-2" 
          id='` + letra + `'
          onClick="seleccLetra('` + letra + `')"
        >
          ` + letra + `
        </button>
      `).join("");
  
    document.getElementById("teclado").innerHTML = teclas;
}

// Operador ternario || condicion ? true : false ||
//SI LA LETRA ELEGIDA NO SE ENCUENTRA ENTRE LAS YA ADIVINADAS
function seleccLetra(letraElegida){
    adivinado.indexOf(letraElegida) === -1 ? adivinado.push(letraElegida) : null;
    document.getElementById(letraElegida).setAttribute("disabled", true);
    
    //SI LA LETRA ELEGIDA SE ENCUENTRA EN LA PALABRA OBJETIVO
    if (palabra.indexOf(letraElegida) >= 0){
        palabraXAdivinar();
        chequearSiGane();
    } else if (palabra.indexOf(letraElegida) === -1){
        errores++;
        actualizarErrores();
        chequearSiPerdi();
        actualizarCanvas();
    }
}

function actualizarCanvas(){
    if( errores === 1){
        pincel.beginPath();  //CABEZA
        pincel.arc(100,115,15,90,Math.PI*2,true);
        pincel.strokeStyle ='green';
        pincel.stroke();
    }else if( errores === 2){
        dibujarAhorcado(100,130,100,190); //TORSO
    }else if( errores === 3){
        dibujarAhorcado(100,190,75,230); //PIERNAIZ 
    }else if( errores === 4){
        dibujarAhorcado(100,190,125,230); //PIERNADE
    }else if( errores === 5){
        dibujarAhorcado(100,140,75,180); //BRAZOIZ
    }else if( errores === 6){
        dibujarAhorcado(100,140,125,180); //BRAZODE
    }
}

// FUNCION PARA CONVERTIR LA PALABRA OBJETIVO EN GUIONES Y AGREGAR LETRAS CORRECTAS
function palabraXAdivinar(){
    estadoPalabra = palabra.split("").map(letra => (adivinado.indexOf(letra) >= 0 ? letra : " _ ")).join('');
    
    document.getElementById("palabraXAdivinar").innerHTML = estadoPalabra;
}

function chequearSiGane(){
    if (estadoPalabra === palabra){
        document.getElementById('teclado').innerHTML = "Ganaste!";
        //AGREGAR
        // BORRAR ELEMENTOS Y DEJAR SOLO UN <H1> 'You Won!!!'
    }
}

function actualizarErrores(){
    document.getElementById("errores").innerHTML = errores;
}

document.getElementById("maxErrores").innerHTML = maxErrores;

function chequearSiPerdi(){
    if ( errores === maxErrores){
        document.getElementById('palabraXAdivinar').innerHTML = "La palabra era: " + palabra;
        document.getElementById('teclado').innerHTML = "Perdiste!";
    }
}

function reiniciar() {
    errores = 0;
    adivinado = [];
    //document.getElementById('hangmanPic').src = './images/0.jpg';
    
    palabraAleatoria();
    generarBotones();
    palabraXAdivinar();
    inicioCanvas();
}

palabraAleatoria();
generarBotones();
palabraXAdivinar();


