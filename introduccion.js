class PantallaIntro extends Pantalla {
    estado() {
        modulo = 1;
    }
    constructor() {
        super();
        this.dialogo = 0;
        this.texto = ['Esta es la charla', 'de introduccion', 'ahora las preguntas'];
        this.textoEnPantalla;
        this.mostrarTexto = true;
    }
    draw() {
        background(200, 75, 190);
        fill(0);
        rect(0, 300, width, 180);
        this.pasarTexto();
    }

    pasarTexto() {
        fill(255);
        textAlign(LEFT);
        textSize(21);
        this.textoEnPantalla = (this.texto[this.dialogo] + ' (espacio)')
        fill(255);
        text(this.textoEnPantalla, 30, 330);
    }

    continuar() {
        if (this.dialogo < this.texto.length - 1) {
            this.dialogo++;
        } else {
            this.siguiente();
        }
    }
}
// class PantallaIntro extends Pantalla {
//     estado() {
//         modulo = 1;
//     }
//     constructor() {
//         super();
//         this.texto = ['Esta es', 'la introduccion', 'ahora las preguntas'];
//         this.dialogo = 0;
//         this.textoEnPantalla;
//     }
//     draw() {
//         background(200, 75, 190);
//         fill(0);
//         rect(0, 300, width, 180);
//         this.pasarTexto();
//     }

//     pasarTexto() {
//         fill('gray');
//         rect(0, 0, width, height);
//         fill(0);
//         textAlign(CENTER);
//         textSize(21);
//         this.textoEnPantalla = this.texto[this.dialogo];
//         fill(255);
//         text(this.textoEnPantalla, 30, 330);
//     }

//     continuar(){
//         if (this.dialogo < this.texto.length-1){
//         this.dialogo++;
//         } else{
//         this.siguiente();
//         }
//     }
// }
