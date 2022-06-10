function ocultarMostrarImagen() {
    //display: none, block
    var valorDisplay = document.getElementById("idImagen").style.display;
    console.log(valorDisplay)
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
        console.log(valorDisplay)
        console.log('V')
    } else {
        valorDisplay = 'none';
        console.log(valorDisplay)
        console.log('F')
    }
    document.getElementById("idImagen").style.display = valorDisplay;
}

function enciende() {
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src = '../img/encendido.png';
}

function apaga() {
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src = '../img/apagado.png';
}

function encenderApagar() {
    //display: none, block
    var valorDisplay = document.getElementById("imgFoco").src;
    console.log(valorDisplay)
    if (valorDisplay.match('../img/encendido.png')) {
        valorDisplay = '../img/apagado.png';
        console.log(valorDisplay)
        console.log('V')
    } else {
        valorDisplay = '../img/encendido.png';
        console.log(valorDisplay)
        console.log('F')
    }
    document.getElementById("imgFoco").src = valorDisplay;
}

function cambiarTextos() {
    const elementos = document.getElementsByClassName("nuevo");
    /*elementos[0].innerHTML = "1er Texto Modificado";
    elementos[1].innerHTML = "2do Texto Modificado";
    elementos[2].innerHTML = "3er Texto Modificado";
*/

    for (let valor in elementos) {
        elementos[valor].innerHTML = "buenas bueeeeeeeeeeenas uwu"
    }
    /*
         for (i of elementos) {
            i.innerHTML="buenas bueeeeeeeeeeenas uwu"
         }*/

}

function cambiarTextosElementos() {
    const elementos = document.getElementsByTagName('h1');
    elementos[0].innerHTML = "A Txt";
    elementos[1].innerHTML = "B Txt";
    /*console.log(elementos[2]);*/
}

/*
Forma tradcional de acceso a un elemento especifico*/
function mOver1() {
    var elementos = document.getElementById('div1');
    elementos.innerHTML = "Nuevo texto";
    elementos.style.backgroundColor = "yellow";
}

function mOut1() {
    var elementos = document.getElementById('div1');
    elementos.innerHTML = "Texto para nuevos eventos";
    elementos.style.backgroundColor = "pink";
}


function mOver(elementos) {
    elementos.innerHTML = "Nuevo texto";
    elementos.style.backgroundColor = "yellow";
}

function mOut(elementos) {
    elementos.innerHTML = "Texto para nuevos eventos";
    elementos.style.backgroundColor = "pink";
}

function imprimirPersona() {

    //declaraciones de arreglos
    const colores = ["red", "yellow", "blue"];
    //desestructuracion de arreglos
    const [c1, c2, c3] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);

    const [p1, p2, p3] = ["red", "yellow", "blue"];
    console.log(p1)
    console.log(p2)
    console.log(p3)

    //declaracion de objeto
    const persona = { nombre: "Dallyana", apellido: "Vanegas", edad: "23" };
    console.log(persona);
    //desestructuracion de objetos
    const { nombre, apellido, edad } = persona;
    console.log(nombre)
    console.log(apellido)
    console.log(edad)

    const { nombre1, apellido1, edad1 } = { nombre1: "Milena", apellido1: "Jaramillo", edad1: "22"};
    console.log(nombre1)
    console.log(apellido1)
    console.log(edad1)

    //objetos compuestos
    const persona2 = { nombre1: "Milena", apellido1: "Jaramillo", edad1: "22", direccion: { calle: "La Mena", lote: "Lt641" } };
    console.log(persona2)
}