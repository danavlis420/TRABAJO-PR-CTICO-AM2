class PantallaInicio extends Pantalla {
    estado(){
        pantalla_inicio=true;
    }
    draw() {
        fill('gray');
        rect(0, 0, width, height);
        fill(0);
        textAlign(CENTER);
        textSize(21);
        text("Presiona 'ENTER' para comenzar", width/2, height/2 + 80);
    }
}