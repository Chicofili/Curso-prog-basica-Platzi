//esta funcion inicia el script
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    }
}

function aleatorio(Min,Max){
    return Math.floor(Math.random() * (Max - Min + 1) + Min)
}

//este addeventlistener ejecutara la funcion iniciar juego solo cualdo cargue el html
window.addEventListener('load', iniciarJuego)