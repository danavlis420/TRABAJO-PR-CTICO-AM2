class PantallaIntro extends Pantalla {
    estado() {
        modulo = 1;
        this.dialogo = 0;
        this.foto=imgIntro;
    }
    constructor() {
        super();
        this.foto;
        this.dialogo;
        this.texto = ['Esta es la charla de introduccion, primer párrafo...', 'de introduccion', 'ahora las preguntas'];
        this.textoEnPantalla;
        this.mostrarTexto = true;
    }
    draw() {
        background(10);
        fill(255);
        image(this.foto,0,0);
        fill(0);
        rect(0, 300, width, 180);
        this.pasarTexto();
    }

    pasarTexto() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla = (this.texto[this.dialogo] + '    (espacio)')
        fill(255);
        text(this.textoEnPantalla, 30, 330, 340);
    }

    continuar() {
        if (this.dialogo < this.texto.length - 1) {
            this.dialogo++;
        } else {
            this.siguiente();
        }
    }
}