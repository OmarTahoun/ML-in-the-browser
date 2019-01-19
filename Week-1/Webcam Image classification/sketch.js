let header, statment, model, canva, video, result, probability;
let loaded = false;

function setup() {
  canva = createCanvas(700, 600);
  canva.position((windowWidth - width) / 2, (windowHeight - height) / 1.1);

  video = createCapture(VIDEO).hide();

  header = select('.header');

  statment = select('.statment');

  model = select('.model');

  result = select('#result');

  probability = select('#probability');

  startModel();
}

function draw() {
    background(100);
    image(video, 0, 0, width, height);
}
