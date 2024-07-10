
//NAVEGADOR
const navegador = new Navegador();

//IMG
let imgIntro;
let imgCuestionario;
let imgEscena1;
let imgLector1;
let imgLector2;
let imgLector3;
let imgLector4;
let imgLector5;

//CONTROLES
let keyAvanzar1 = 'w';
let keyVolver1 = 'q';
let keyOpcionA1 = 'a';
let keyOpcionB1 = 's';
let keyOpcionC1 = 'd';
let keyAvanzar2 = 'o';
let keyVolver2 = 'i';
let keyOpcionA2 = 'j';
let keyOpcionB2 = 'k';
let keyOpcionC2 = 'l';

//LOGICA
let pantalla_inicio = true;
let modulo;
let userTurno1;
let userTurno2;
let pregunta_pendiente1;
let pregunta_pendiente2;
let respuesta1;
let respuesta2;
let userListos;
let eleccionJ1;
let eleccionJ2;

function preload() {
  imgIntro = loadImage("recursos/placehold.jpg");
  imgCuestionario = loadImage("recursos/placehold2.jpg");
  imgEscena1 = loadImage("recursos/placehold1.jpg");
  imgLector1 = loadImage("recursos/placehold1.jpg");
  imgLector2 = loadImage("recursos/libro.jpg");
  imgLector3 = loadImage("recursos/placehold2.jpg");
  imgLector4 = loadImage("recursos/ventana_afuera.jpg");
  imgLector5 = loadImage("recursos/latidos.gif");
}

function setup() {
  createCanvas(1000, 520);

  modulo = 0;

  let p = new PantallaInicio();
  navegador.agregarPantalla(p);

  p = new PantallaIntro1();
  navegador.agregarPantalla(p);

  p = new PantallaIntro2();
  navegador.agregarPantalla(p);

  p = new Pantalla01();
  navegador.agregarPantalla(p);

  p = new Pantalla02();
  navegador.agregarPantalla(p);

  p = new Pantalla03();
  navegador.agregarPantalla(p);

  p = new Pantalla04();
  navegador.agregarPantalla(p);

  p = new Pantalla05();
  navegador.agregarPantalla(p);

  p = new Pantalla06();
  navegador.agregarPantalla(p);

  p = new Pantalla07();
  navegador.agregarPantalla(p);

  p = new Final();
  navegador.agregarPantalla(p);
}

function draw() {
  noStroke();
  navegador.pantallaActual.draw();
}

function keyPressed() {
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
  if (key == keyAvanzar1) {
    navegador.pantallaActual.continuar1();
  }
  if (key == keyAvanzar2) {
    navegador.pantallaActual.continuar2();
  }
  if (key == keyVolver1) {
    navegador.pantallaActual.volver1();
  }
  if (key == keyVolver2) {
    navegador.pantallaActual.volver2();
  }
  if (key == keyOpcionA1) {
    respuesta1=0;
    navegador.pantallaActual.cambiar1();
  }
  if (key == keyOpcionB1) {
    respuesta1=1;
    navegador.pantallaActual.cambiar1();
  }
  if (key == keyOpcionC1) {
    respuesta1=2;
    navegador.pantallaActual.cambiar1();
  }
  if (key == keyOpcionA2) {
    respuesta2=0;
    navegador.pantallaActual.cambiar2();
  }
  if (key == keyOpcionB2) {
    respuesta2=1;
    navegador.pantallaActual.cambiar2();
  }
  if (key == keyOpcionC2) {
    respuesta2=2,
    navegador.pantallaActual.cambiar2();
  }
}