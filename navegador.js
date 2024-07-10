
class Navegador {
    constructor() {
        this.pantallas = [];
        this.pantallaActual = null;
        this.indicePantalla = 0;
    }

    agregarPantalla(p) {
        this.pantallas.push(p);
        if (!this.pantallaActual) { this.pantallaActual = p; }
    }

    proximaPantalla() {
        const i = (this.indicePantalla + 1) % this.pantallas.length;
        this.pantallaActual = this.pantallas[i];
        this.indicePantalla = i;
    }

    previaPantalla() {
        let i = (this.indicePantalla - 1);
        if (i < 0) { i = this.pantallas.length - 1; }
        this.pantallaActual = this.pantallas[i];
        this.indicePantalla = i;
    }

    elegirPantalla(i) {
        if (this.pantallas.length == 0) {
            print('Error, no hay escenas en la lista de escenas');
            return
        }

        if (i >= this.pantallas.length || i < 0) {
            print(`Error, la escena ${i} no existe`);
            return
        }

        this.pantallaActual = this.pantallas[i];
        this.indicePantalla = i;
    }
}

class Pantalla {
    constructor() {
    }

    draw() {

    }

    mouseClicked() {

    }

    keyPressed() {

    }

    estado() {

    }

    siguiente() {
        if (pantalla_inicio == false) {
            this.dialogo1 = 0;
            this.dialogo2 = 0;
            userTurno1 = false;
            userTurno2 = false;
            navegador.proximaPantalla();
            navegador.pantallaActual.estado();
        }
    }

    mostrarTexto1() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla1 = (this.texto1[this.dialogo1] + '    (...)');
        fill(255);
        text(this.textoEnPantalla1, 30, 330, 340);
    }

    mostrarOpciones1() {
        for (let i = this.opCant1; i >= 0; i--) {
            fill(255);
            textAlign(LEFT);
            textSize(18);
            text(this.opcionesJ1[i], 30, 430 - (i * 40), 340);
        }
    }

    mostrarOpciones2() {
        for (let i = this.opCant2; i >= 0; i--) {
            fill(255);
            textAlign(LEFT);
            textSize(18);
            text(this.opcionesJ2[i], 630, 430 - (i * 40), 340);
        }
    }

    mostrarTexto2() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla2 = (this.texto2[this.dialogo2] + '    (...)');
        fill(255);
        text(this.textoEnPantalla2, 630, 330, 340);
    }

    cambiar1() {
        this.marcadoJ1 = false;
        this.eligeJ1();
    }

    cambiar2() {
        this.marcadoJ2 = false;
        this.eligeJ2();
    }


    eligeJ1() {
        if (respuesta1 != null) {
            if (this.marcadoJ1 == true) {
                fill(130, 200, 150);
            } else if (this.marcadoJ1 == false) {
                fill(100, 100, 120);
            }
            rect(20, 365 + (30 * respuesta1), 360, 25);
        }
    }

    eligeJ2() {
        if (respuesta2 != null) {
            if (this.marcadoJ2 == true) {
                fill(130, 200, 150);
            } else if (this.marcadoJ2 == false) {
                fill(100, 100, 120);
            }
            rect(620, 365 + (30 * respuesta2), 360, 25);
        }
    }

    continuar1() {
        if (!pregunta_pendiente1) {
            if (this.dialogo1 < this.texto1.length - 1) {
                this.dialogo1++;
            } else if (userTurno2) {
                userTurno1 = false;
                this.siguiente();
            } else {
                userTurno1 = true;
            }
        } else if (!userListos && !this.marcadoJ1 && respuesta1 != null) {
            this.marcadoJ1 = true;
        } else if (userListos) {
            userTurno1 = false;
            userTurno2 = false;
            pregunta_pendiente1 = false;
            pregunta_pendiente2 = false;
            this.siguiente();
        }
    }

    continuar2() {
        if (!pregunta_pendiente2) {
            if (this.dialogo2 < this.texto2.length - 1) {
                this.dialogo2++;
            } else if (userTurno1) {
                userTurno2 = false;
                this.siguiente();
            } else {
                userTurno2 = true;
            }
        } else if (!userListos && !this.marcadoJ2 && respuesta2 != null) {
            this.marcadoJ2 = true;
        } else if (userListos) {
            userTurno1 = false;
            userTurno2 = false;
            pregunta_pendiente1 = false;
            pregunta_pendiente2 = false;
            this.siguiente();
        }
    }

    volver1() {
        if (this.marcadoJ1 == true) {
            userTurno1 = false;
            respuesta1 = null;
            this.marcadoJ1 == false;
            this.eligeJ1();
        } else {
            if (this.dialogo1 > 0) {
                this.dialogo1--;
                userTurno1 = false;
                respuesta1 = null;
                this.marcadoJ1 = false;
            }
        }
    }

    volver2() {
        if (this.marcadoJ2 == true) {
            userTurno2 = false;
            respuesta2 = null;
            this.marcadoJ2 == false;
            this.eligeJ1();
        } else {
            if (this.dialogo2 > 0) {
                this.dialogo2--;
                userTurno2 = false;
                respuesta2 = null;
                this.marcadoJ2 = false;
            }
        }
    }

    mostrarEstado1() {
        textAlign(LEFT);
        textSize(18);
        if (!pregunta_pendiente1) {
        if (this.dialogo1 < this.texto1.length){
            fill(200);
            rect(0, 480, 230, 20);
            fill(0);
            text('Presiona para continuar', 10, 495);
        } else if (this.dialogo1 == this.texto1.length){
            fill(200);
            rect(0, 480, 230, 20);
            fill(0);
            text('Esperando...', 10, 495);
        }
        } else
            if (pregunta_pendiente1 && !this.marcadoJ1) {
                fill(200);
                rect(0, 480, 230, 20);
                fill(0);
                text('Elige una opción', 10, 495);
            } else
                if (this.marcadoJ1 && !userListos) {
                    fill(200);
                    rect(0, 480, 230, 20);
                    fill(0);
                    text('Esperando...', 10, 495);
                } else
                    if (this.marcadoJ1 && userListos) {
                        fill(200);
                        rect(0, 480, 230, 620);
                        fill(0);
                        text('Presiona para continuar', 10, 495);
                    }
    }

    mostrarEstado2() {
        textAlign(LEFT);
        textSize(18);
        if (!pregunta_pendiente2 && (this.dialogo2 < this.texto2.length)) {
            fill(200);
            rect(600, 480, 230, 20);
            fill(0);
            text('Presiona para continuar', 610, 495);
        } else
            if (pregunta_pendiente2 && !this.marcadoJ2) {
                fill(200);
                rect(600, 480, 230, 20);
                fill(0);
                text('Elige una opción', 610, 495);
            } else
                if (this.marcadoJ2 && !userListos) {
                    fill(200);
                    rect(600, 480, 230, 20);
                    fill(0);
                    text('Esperando...', 610, 495);
                } else
                    if (this.marcadoJ2 && userListos) {
                        fill(200);
                        rect(600, 480, 230, 620);
                        fill(0);
                        text('Presiona para continuar', 610, 495);
                    }
    }
}
