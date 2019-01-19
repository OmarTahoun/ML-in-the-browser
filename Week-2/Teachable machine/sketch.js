let header, statment, model, canva, video, guess, probability, classA, classB, classC, train, loss, lossValue;
let classACounter,classBCounter, classCCounter;

let loaded = false;
var labelA = 'Rock';
var labelB = 'Paper';
var labelC = 'Scissors';

function setup() {
  canva = createCanvas(700, 600);
  canva.position((windowWidth - width) / 1.2, (windowHeight - height) / 2);

  video = createCapture(VIDEO).hide();

  header = select('.header');
  header.position(150, 150);

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



  var firstLabel = select('#labelA');
  firstLabel.elt.textContent = labelA;

  classA = select('.classA');
  classA.position(statment.x, statment.y+100);
  classACounter = select('#classACounter');

  classA.mousePressed(() => {
    classifier.addImage(labelA);
    var count = parseInt(classACounter.elt.textContent);
    classACounter.elt.textContent = count+1;
    });




  var secondLabel = select('#labelB');
  secondLabel.elt.textContent = labelB;

  classB = select('.classB');
  classB.position(classA.x+classA.width+80,classA.y);
  classBCounter = select('#classBCounter');

  classB.mousePressed(() => {
    classifier.addImage(labelB);
    var count = parseInt(classBCounter.elt.textContent);
    classBCounter.elt.textContent = count+1;
    });

  var thirdLabel = select('#labelC');
  thirdLabel.elt.textContent = labelC;

  classC = select('.classC');
  classC.position(classB.x+classB.width+80,classB.y);
  classCCounter = select('#classCCounter');

  classC.mousePressed(() => {
    classifier.addImage(labelC);
    var count = parseInt(classCCounter.elt.textContent);
    classCCounter.elt.textContent = count+1;
    });

  train = select('.train');
  train.position(classA.x,classA.y+classA.height+50);
  train.mousePressed(() => classifier.train(isTraining));

  startModel();
}

function draw() {
    background(100);
    image(video, 0, 0, width, height);
}
