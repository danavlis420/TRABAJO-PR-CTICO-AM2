class Pantalla05 extends Pantalla {
    estado() {
        clear();
        pantalla_inicio == false;
        modulo = 1;
        this.dialogo1 = 0;
        this.dialogo2 = 0;
        this.foto1 = imgLector5;
        this.foto2 = imgLector5;
        userTurno1 = false;
        userTurno2 = false;
        userListos = false;
        this.mostrarO1=false;
        this.mostrarO2=false;
        this.marcadoJ1=false;
        this.marcadoJ2=false;
    }
    constructor() {
        super();
        this.foto1;
        this.foto2;
        this.dialogo1;
        this.dialogo2;
        this.textoGlobal = ['*PUM* ¿¡qué fue eso!? Disculpa... el ruido me asusto hasta mi','Creo que tu tambien lo pudiste escuchar. El ruido hizo que tu miedo aumente, noto tu piel de gallina y ahora tus latidos son mas fuertes','Sientes peligro. Cada crujido de la casa te hace saltar','Lo sientes cada vez más cerca ¿Qué quieres hacer?'];
        this.texto1 = this.textoGlobal;
        this.texto2 = this.textoGlobal;
        this.textoEnPantalla1;
        this.textoEnPantalla2;
        this.mostrarTexto = true;
        //PREGUNTAS
        this.opcionesJ1=['Me armaré e iré hacia la puerta a enfrentar lo que venga, es claro!','Ire a esconderme debajo del mueble al lado de la puerta'];
        this.opcionesJ2=['Me armaré e iré hacia la puerta a enfrentar lo que venga, es claro!','Ire a esconderme debajo del mueble al lado de la puerta'];
        this.opCant1=this.opcionesJ1.length;
        this.opCant2=this.opcionesJ2.length;
        this.marcadoJ1;
        this.marcadoJ2;
    }
    draw() {
        clear();
        fill(10);
        rect(0, 0, 400, 480);
        rect(600, 0, 400, 480);
        fill(255);
        image(this.foto1, 0, 0);
        image(this.foto2, 600, 0);
        fill(0);
        rect(0, 300, 400, 180);
        rect(600, 300, 400, 180);
        this.mostrarTexto1();
        this.mostrarTexto2();
        if (this.dialogo1==this.texto1.length-1){
            pregunta_pendiente1=true;
            this.eligeJ1();
            this.mostrarOpciones1();
        } else{
            pregunta_pendiente1=false;
        }
        if (this.dialogo2==this.texto2.length-1){
            pregunta_pendiente2=true;
            this.eligeJ2();
            this.mostrarOpciones2();
        } else{
            pregunta_pendiente2=false;
        }
        if (pregunta_pendiente1 || pregunta_pendiente2){
            if (this.marcadoJ1 == true && this.marcadoJ2 == true){
                userListos = true;
            } else{
                userListos=false;
            }
        }
        this.mostrarEstado1();
        this.mostrarEstado2();
    }

}