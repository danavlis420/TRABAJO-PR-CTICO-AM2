
const navegador = new Navegador();


function preload() {
  // ...
}

function setup() {
  createCanvas(400, 480);

  let p = new PantallaInicio();
  navegador.agregarPantalla(p);

  p = new PantallaCuestionario();
  navegador.agregarPantalla(p);

  p = new Pantalla01();
  navegador.agregarPantalla(p);

  p = new Pantalla02();
  navegador.agregarPantalla(p);

  p = new Pantalla03();
  navegador.agregarPantalla(p);
}

function draw() {
  background(220);
  navegador.pantallaActual.draw();
}

function mouseClicked() {
  navegador.pantallaActual.mouseClicked();
  navegador.proximaPantalla();
}

function keyTyped() {
  navegador.pantallaActual.keyTyped();
  navegador.previaPantalla();
}
