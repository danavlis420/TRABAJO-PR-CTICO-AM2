
const navegador = new Navegador();
let pantalla_obra;
let guardado;
let fontTitulo;
let fontBold;
let fontItalic;
let fontRegular;
let fondoInicio;
//escena 01
let e1capa1;
let e1capa2;
let e1fondo;

function preload() {
  fontTitulo = loadFont('recursos/dmserif.ttf');
  fontBold = loadFont('recursos/bold.ttf');
  fontItalic = loadFont('recursos/italic.ttf');
  fontRegular = loadFont('recursos/regular.ttf');
  fondoInicio = loadImage('recursos/fondoinicio.jpg');
  e1capa1 = loadImage('recursos/e1capa1.png');
  e1capa2 = loadImage('recursos/e1capa2.png');
}

function setup() {
  createCanvas(640, 480);

  guardado = false;

  let p = new inicio();
  navegador.agregarPantalla(p);

  p = new menu();
  navegador.agregarPantalla(p);

  p = new final();
  navegador.agregarPantalla(p);

  p = new escena01();
  navegador.agregarPantalla(p);

  p = new escena02();
  navegador.agregarPantalla(p);

  p = new escena03();
  navegador.agregarPantalla(p);
}

function draw() {
  background(220);
  navegador.pantallaActual.draw();
  if (navegador.indicePantalla > 2 && navegador.indicePantalla < 6){
    pantalla_obra=true;
  } else { pantalla_obra = false; }
  ayuda();
}

function keyPressed() {
  if (key === '1') {
    navegador.elegirPantalla(3);
    print(navegador.indicePantalla);
  }

  if (key === '2') {
    navegador.elegirPantalla(4);
  }

  if (key === '3') {
    navegador.elegirPantalla(5);
  }

  if (key === 'm') {
    navegador.elegirPantalla(1);
  }

  if (keyCode === ESCAPE) {
    navegador.elegirPantalla(0);
  }

  if (keyCode === ENTER && pantalla_obra ) {
    guardarImg();
    navegador.elegirPantalla(2);
  }
}

function ayuda(){
  if (keyIsPressed === true && key == 'a' && pantalla_obra) {
    noStroke();
    fill(0,0,0,100);
    rect(0,0,160,150);
    fill (0);
    textAlign(LEFT)
    text('"1, 2 o 3" Navegar escenas', 5, 20);
    text('"Enter" Finalizar', 5, 50);
    text('"ESCAPE" Volver al inicio', 5, 80);
    text('"M" Menú de escenas', 5, 110);
    text('"A" Ver la ayuda', 5,140);
  }
}

function guardarImg(){
  saveFrames('frame', 'png', 1, 1);
}
