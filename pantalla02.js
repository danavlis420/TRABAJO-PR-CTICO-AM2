class Pantalla02 extends Pantalla {
    estado() {
        modulo = 2;
        this.dialogo = 0;
        this.foto=imgIntro;
        this.mostrarOpciones=false;
    }
    constructor() {
        super();
        this.foto;
        this.texto = ['Y acá hay mas texto...', 'antes de dejarte responder...', 'las preguntas...'];
        this.op1 = ['a', 'b', 'c'];
        this.op2 = ['1', '2', '3'];
        this.op3 = ['😀', '😐', '🙁'];
        this.opciones = [this.op1, this.op2, this.op3];
        this.opcion;
        this.dialogo = 0;
        this.textoEnPantalla;
        this.mostrarTexto = true;
        this.mostrarOpciones;
        this.opcion=this.opciones[this.dialogo];
    }
    draw() {
        background(10);
        fill(255);
        image(this.foto,0,0);
        fill(0);
        rect(0, 300, width, 180);
        this.pasarTexto();

    }

    checkPregunta(){
        if (this.dialogo=='2'){
            this.mostrarOpciones=true;
        } else {
            this.mostrarOpciones=false;
        }
        if (this.mostrarOpciones){
            this.opcion=this.opciones[this.dialogo];
            this.pasarOpciones();
        }
    }

    pasarTexto() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla = (this.texto[this.dialogo] + '    (espacio)');
        fill(255);
        text(this.textoEnPantalla, 30, 330, 340);
        this.checkPregunta();
    }

    pasarOpciones() {
        for (let i = 0; i <= this.opcion.length; i++) {
            fill(255);
            text(this.opcion[i], 20, 390 + (i*30));
        }
    }

    continuar() {
        if (this.dialogo < this.texto.length - 1) {
            this.dialogo++;
        } else {
            this.siguiente();
        }
    }
}