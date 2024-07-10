class PantallaInicio extends Pantalla {
    estado(){
        clear();
        pantalla_inicio=true;
    }
    draw() {
        fill(250, 235, 215);
        rect(300,0,400,480);
        fill(0);
        textAlign(CENTER);
        textSize(21);
        text("Presiona 'ENTER' para comenzar", width/2, height/2 + 80);
    }
}