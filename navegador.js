
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
        // ...
    }

    estado() {

    }

    siguiente() {
        if (pantalla_inicio == false) {
            navegador.proximaPantalla();
            navegador.pantallaActual.estado();
        }
    }

    draw() {
        // ...
    }

    mouseClicked() {
        // ...
    }

    keyPressed() {
        // ...
    }

    pasarTexto() {

    }

    pasarOpciones() {

    }

    elegirOpcion() {

    }

    continuar() {

    }
}
