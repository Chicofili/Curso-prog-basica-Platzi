//esta funcion inicia el script
function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatihueya = document.getElementById('ratihueya')

    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodogue')
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo')
    } else if (inputRatihueya.checked) {
        alert('Seleccionaste a Ratihueya')
    } else {
        alert('Elige a tu mascota!')
    }
}

//este addeventlistener ejecutara la funcion iniciar juego solo cualdo cargue el html
window.addEventListener('load', iniciarJuego)