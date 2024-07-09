
class final extends Pantalla {
    draw() {
        fill('gray');
        rect(0, 0, width, height);
        fill(0);
        textAlign(CENTER)
        text('FINAL', width/2, height/2);
        text('Esc para volver al inicio', width/2, height/2 + 60);
    }
}
