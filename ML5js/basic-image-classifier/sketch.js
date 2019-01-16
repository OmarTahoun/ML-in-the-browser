let header, statment, model, canva, img, result, probability;
let loaded = false;

loadModel();
function setup() {
  canva = createCanvas(800, 800);
  canva.position((windowWidth - width) / 1.2, (windowHeight - height) / 2);
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
  image(img, 0, 0, width, height);
  if (loaded) {
    noLoop();
    model.elt.textContent = 'Loaded';
  }
}

function fileHere(file) {
  if (file.type == 'image' && loaded) {
    img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
    classify();
  }
}
