
class Pantalla03 extends Pantalla {
    draw() {
        fill('gray');
        rect(0, 0, width, height);
        fill(0);
        textAlign(CENTER);
        textSize(21);
        text("Presiona 'ESC' para volver al comienzo", width/2, height/2 + 80);
    }
}
