/*
1.- Traer o referenciar todos los elementos del HTML y los vamos a guardar en veriables para poder utilizarlos después
*/

let numeroContador = document.getElementById("numeroContador"); 
let butonIncremento = document.getElementById("buttonIncrementar");
let buttonDecrementar = document.getElementById("buttonDecrementar");
let buttonReset = document.querySelector("#buttonReset");
let memeRandom = document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial
var valorContador = 0;
var parrafo = document.getElementById("parrafo");
var parrafo2 = document.getElementById("parrafo2");

//Logica de negocio (funciones)
function incrementar()
{
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if(valorContador===10)
    {mostrarImagen();}
}


function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;
}

function resetear(){
    valorContador=0;
    numeroContador.innerHTML = valorContador;
}

//Función para mostrar la imagen

//La intención de esta función es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria(index)

function mostrarImagen()
{
    var coleccionImagenes = ["meme1.jpg", "meme2.jpg", "meme3.jpg"];

    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);

    // Obtener la URL o dirección de la imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que dejé vacío en el HTML
    memeRandom.src = urlAleatoria;
    //Cambio la propiedad de visualización (display) a un block
    memeRandom.style.display = "block";

}


/*
Eventos (acción y reacción)

Los eventos son una forma mucho más fácil de modificar o alterar el contenido de un elemento. Los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS

*/

function cambiarColor(color)
{
    parrafo.style.color = color;
}


/*Evento con EventListener

Permite escuchar el evento indicado (primero parametro) y en el caso de que ocurra (escuche), se ejcuta la funcion asociada (segundo parametro)


Sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/
const buttonCambiarColor = document.getElementById("buttonCambiarColor");

buttonCambiarColor.addEventListener("click", 

function(){
    parrafo2.style.color="red";
});


const buttonIncrementar = document.getElementById("buttonIncrementar");

buttonIncrementar.addEventListener("click",incrementar);

/*

Elementos para crear y agregar elementos

1 Se crean
2 Se agregan

Para crear elementos createElement()
elementoPadre.createElement("tipoDeElemento");

*/


const div = document.createElement("div");

//Para insertarlo appendChild();
document.body.appendChild(div);



//Código para agregar una imagen a mi documento

const appendImg = document.createElement("img");
appendImg.src="./meme3.jpg";
appendImg.alt="imagen sorpresa";
document.body.appendChild(appendImg);
