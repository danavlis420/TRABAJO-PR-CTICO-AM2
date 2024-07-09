
const navegador = new Navegador();
let pantalla_inicio = true;
let modulo;

function preload() {
  // ...
}

function setup() {
  createCanvas(400, 480);

  modulo = 0;

  let p = new PantallaInicio();
  navegador.agregarPantalla(p);

  p = new PantallaIntro();
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

function keyPressed() {
  if (key == 'Enter' && pantalla_inicio) {
    navegador.elegirPantalla(1);
    navegador.pantallaActual.estado();
    pantalla_inicio = false;
  }
  if (key == ' ') {
    navegador.pantallaActual.continuar();
  }
}