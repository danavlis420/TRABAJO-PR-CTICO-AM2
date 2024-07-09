
const navegador = new Navegador();
let pantalla_inicio = true;
let modulo;
let imgIntro;
let imgCuestionario;
let imgEscena1;

function preload() {
  imgIntro = loadImage("recursos/placehold.jpg");
  imgCuestionario = loadImage("recursos/placehold2.jpg");
  imgEscena1 = loadImage("recursos/placehold1.jpg");
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
  if (key == ' ') {
    navegador.pantallaActual.continuar();
  }
  if (keyCode === ENTER && pantalla_inicio) {
    navegador.elegirPantalla(1);
    navegador.pantallaActual.estado();
    pantalla_inicio = false;
  }
  if (keyCode === ESCAPE) {
    navegador.elegirPantalla(0);
    navegador.pantallaActual.estado();
  }
  if (key == '1') {
    navegador.elegirPantalla(1);
    navegador.pantallaActual.estado();
  }
  if (key == '2') {
    navegador.elegirPantalla(2);
    navegador.pantallaActual.estado();
  }
  if (key == '3') {
    navegador.elegirPantalla(3);
    navegador.pantallaActual.estado();
  }
  if (key == '4') {
    navegador.elegirPantalla(4);
    navegador.pantallaActual.estado();
  }
  if (key == '5') {
    navegador.elegirPantalla(5);
    navegador.pantallaActual.estado();
  }
}