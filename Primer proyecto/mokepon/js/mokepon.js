let ataqueJugador 
let ataqueEnemigo

//esta funcion inicia el script
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonFuego.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById
    botonFuego.addEventListener('click', ataqueTierra)('boton-tierra')
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatihueya = document.getElementById('ratihueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatihueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratihueya'
    } else {
        alert('Elige a tu mascota!')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
}

function aleatorio(Min,Max){
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

//este addeventlistener ejecutara la funcion iniciar juego solo cualdo cargue el html
window.addEventListener('load', iniciarJuego)