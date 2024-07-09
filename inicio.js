
class inicio extends Pantalla {
    draw() {
        image(fondoInicio, 0, 0, width, height);
        fill(240);
        stroke(70, 80);
        strokeWeight(5);
        textAlign(CENTER);
        textFont(fontTitulo);
        textSize(56);
        text('ABSTRACCIÓN', width/2, height/2);
        textFont(fontRegular);
        textSize(15);
        text('Presiona "1 2 o 3" para comenzar la obra y navegar en ella', width/2, height/2 + 60);
        text('Presiona "M" para abrir el menú de escenas', width/2, height/2 + 90);
        text('Presiona "Enter" para ir al final durante la obra', width/2, height/2 + 120);
        text('Presiona "ESCAPE" Para volver al inicio', width/2, height/2 + 150);
        text('Presiona "A" durante las escenas para ver la ayuda', width/2, height/2 + 180);
        noStroke();
    }
}
