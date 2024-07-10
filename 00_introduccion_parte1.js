class PantallaIntro1 extends Pantalla {
    estado() {
        clear();
        pantalla_inicio == false;
        modulo = 1;
        this.dialogo1 = 0;
        this.dialogo2 = 0;
        this.foto1=imgIntro;
        this.foto2=imgIntro;
        userTurno1=false;
        userTurno2=false;
    }
    constructor() {
        super();
        this.foto1;
        this.foto2;
        this.dialogo1;
        this.dialogo2;
        this.textoGlobal = ['Bienvenide', 'A partir de ahora necesito que conectemos el uno con el otro', 'Esto no es un juego, estas a punto de embarcar en un reflejo de lo esta por venir, tu futuro...', 'Sere tu guía, tú tomarás las decisiones y marcarás el rumbo de tu destino.', 'Escucha con atención y siente con intensidad cada paso que des, tu vida podría depender de ello.'];
        this.texto1 = this.textoGlobal;
        this.texto2 = this.textoGlobal;
        this.textoEnPantalla1;
        this.textoEnPantalla2;
        this.mostrarTexto = true;
    }
    draw() {
        clear();
        fill(10);
        rect(0,0,400,480);
        rect(600,0,400,480);
        fill(255);
        image(this.foto1,0,0);
        image(this.foto2,600,0);
        fill(0);
        rect(0, 300, 400, 180);
        rect(600, 300, 400, 180);
        this.mostrarTexto1();
        this.mostrarTexto2();
        this.mostrarEstado1();
        this.mostrarEstado2();
    }

    mostrarTexto1() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla1 = (this.texto1[this.dialogo1] + '    (...)');
        fill(255);
        text(this.textoEnPantalla1, 30, 330, 340);
    }

    mostrarTexto2() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla2 = (this.texto2[this.dialogo2] + '    (...)');
        fill(255);
        text(this.textoEnPantalla2, 630, 330, 340);
    }

}