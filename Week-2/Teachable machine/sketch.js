let header, statment, model, canva, video, guess, probability, happy, sad, train, loss, lossValue;
let loaded = false;

function setup() {
  canva = createCanvas(700, 600);
  canva.position((windowWidth - width) / 1.2, (windowHeight - height) / 2);

  video = createCapture(VIDEO).hide();

  header = select('.header');
  header.position(20, 10);

  model = select('.modelReady');
  model.position(header.x, header.y + header.height +20);

  videoReady = select('.videoReady');
  videoReady.position(model.x, model.y + model.height +20);

  loss = select('.loss');
  loss.position(videoReady.x, videoReady.y + videoReady.height +20);


  statment = select('.statment');
  statment.position(loss.x, loss.y + loss.height +20);

  guess = select('#result');
  probability = select('#probability');
  lossValue = select('#lossValue');

  happy = createButton('Happy');
  happy.position(statment.x, statment.y+60);
  happy.mousePressed(() => classifier.addImage('Happy'));

  sad = createButton('Sad');
  sad.position(happy.x+happy.width+40, happy.y);
  sad.mousePressed(() => classifier.addImage('Sad'));

  train = createButton('Start Training');
  train.position(sad.x+sad.width+60, sad.y);
  train.mousePressed(() => classifier.train(isTraining));

  startModel();
}

function draw() {
    background(100);
    image(video, 0, 0, width, height);
}
