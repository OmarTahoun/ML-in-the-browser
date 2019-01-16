let header, statment, model, canva, img, result, probability;
let loaded = false;

loadModel();
function setup() {
  canva = createCanvas(600, 700);
  canva.position((windowWidth - width) / 2, (windowHeight - height) / 1.1);
  background(100);
  canva.drop(fileHere);

  header = select('.header');

  statment = select('.statment');

  model = select('.model');

  result = select('#result');

  probability = select('#probability');
}

function draw() {
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('Drag an image file onto the canvas.', width/2, height/2);
  noLoop();
}

function fileHere(file) {
  if (file.type == 'image' && loaded) {
    img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
  }
  classify();
}
