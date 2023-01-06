let secuenciaMaquina = []
let secuenciaJugador = []
let nivel = 1

function retornarCuadroCliqueado(){
    let $cuadros = document.querySelectorAll(`#cuadro`)
    $cuadros.forEach(function(cuadro){
        cuadro.onclick = function(e){
            secuenciaJugador.push(e.target)
            definirResultadoRonda()
        }
    });
}

function turnoJugador(){
    let retrasoJugador = secuenciaMaquina.length * 1000
    setTimeout(retornarCuadroCliqueado(),retrasoJugador)
}

function comenzarJuego(){
    actualizarEstado("toque comenzar para jugar")
    actualizarNivel()
    bloquearInputUsuario()
    añadirCuadroSecuenciaMaquina()
    resaltarCUadroSecuenciaMaquina()
    turnoJugador()
}

document.querySelector("#comenzar").onclick = comenzarJuego