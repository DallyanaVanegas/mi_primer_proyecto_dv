function ocultarMostrarImagen() {
    //display: none, block
    var valorDisplay = document.getElementById("idImagen").style.display;
    console.log(valorDisplay)
    if (valorDisplay== 'none') {
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

function enciende(){
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src='../img/encendido.png';
}

function apaga(){
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src='../img/apagado.png';
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