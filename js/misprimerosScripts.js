function ocultarMostrarImagen() {
    //display: none, block
    var valorDisplay = document.getElementById("idImagen").style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
        console.log('V')
    } else {
        valorDisplay = 'none';
        console.log('F')
    }
    document.getElementById("idImagen").className = valorDisplay;
}

function enciende(){
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src='../img/encendido.png';
}

function apaga(){
    var valorSRC = document.getElementById("imgFoco").src;
    document.getElementById("imgFoco").src='../img/apagado.png';
}