
class escena01 extends Pantalla {
    draw() {
        fill(154, 205, 50);
        rect(0, 0, width, height);
        fill(0);
        text('1', width/2, height/2);
        image(e1capa2, 0, 0, width, height);
        image(e1capa1, 0, 0, width, height);
    }
}
