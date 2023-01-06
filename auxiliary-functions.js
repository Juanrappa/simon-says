function crearUnNumeroRandom(){
    return Math.floor(Math.random()* 4)
}

function añadirCuadroSecuenciaMaquina(){
    const $cuadros = document.querySelectorAll("#cuadro")
    secuenciaMaquina.push($cuadros[crearUnNumeroRandom()])
}

function resaltarCUadroSecuenciaMaquina(){
    secuenciaMaquina.forEach(function($cuadro, index) {
        const retraso = (index + 1) * 1000;
        setTimeout(function() {
          resaltar($cuadro);
        }, retraso);
      });
}
function resaltar($cuadro) {
    $cuadro.style.opacity = 1;
    setTimeout(function() {
      $cuadro.style.opacity = 0.5;
    }, 500);
    setTimeout(function(){
        $cuadro.style.opacity = 1
    },1000);
}

function bloquearInputUsuario(){
    const $cuadros = document.querySelectorAll(`#cuadro`)
    $cuadros.forEach(function(cuadro){
        cuadro.onclick = function(e){

        } 
    })
}

function definirResultadoRonda(){
    if(secuenciaJugador.length === secuenciaMaquina.length ){
        if(secuenciaJugador[secuenciaJugador.length - 1] === secuenciaMaquina[secuenciaJugador.length - 1]){
            nivel++
            secuenciaJugador = []
            comenzarJuego()
        }
        
        
    }
    if(secuenciaJugador[secuenciaJugador.length - 1] !== secuenciaMaquina[secuenciaJugador.length - 1]){
        perder()
    }
}

function perder(){
    actualizarEstado("perdiste,toque comenzar para jugar")
    secuenciaJugador = []
    secuenciaMaquina = []
    nivel = 1
}

function actualizarNivel(){
    const divNivel = document.querySelector("#nivel")
    divNivel.textContent = `nivel ${nivel}`
}

function actualizarEstado(estado){
    let Estado = document.querySelector("#estado")
    if(estado === "toque comenzar para jugar"){
        Estado.textContent = estado
        Estado.className = "alert alert-success"
    }
    if(estado === "perdiste,toque comenzar para jugar"){
        Estado.textContent = estado
        Estado.className = "alert alert-danger"
    }
}