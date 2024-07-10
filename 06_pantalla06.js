class Pantalla06 extends Pantalla {
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
        this.textoGlobal = ['El valor se apodera de ti y agarras el cuchillo escondido en tu cajón, te diriges hacia la puerta a esperar para acabar con este tormento. Estás dispuesto a cualquier cosa para salir a salvo.','Fuiste a esconderte, te sientes indefenso y sacas una estaca de madera para protegerte de lo que llegue a entrar, el valor se apodera de ti, estás dispuesto a cualquier cosa para salir a salvo.'];
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
        if (eleccionJ1 == 1) {
            this.textoEnPantalla1 = (this.texto1[0] + '    (...)');
        } else {
            this.textoEnPantalla1 = (this.texto1[1] + '    (...)');
        }
        fill(255);
        text(this.textoEnPantalla1, 30, 330, 340);
    }

    mostrarTexto2() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        if (eleccionJ2 == 1) {
            this.textoEnPantalla2 = (this.texto2[0] + '    (...)');
        } else {
            this.textoEnPantalla2 = (this.texto2[1] + '    (...)');
        }
        fill(255);
        text(this.textoEnPantalla2, 630, 330, 340);
    }
}