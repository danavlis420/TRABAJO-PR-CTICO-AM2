class PantallaInicio extends Pantalla {
    draw() {
        fill('gray');
        rect(0, 0, width, height);
        fill(0);
        textAlign(CENTER);
        textSize(56);
        text('INICIO', width/2, height/2);
    }
}