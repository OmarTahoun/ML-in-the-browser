let header, statment, model, canva, video, guess, slider, addExample, imageCounter, train, loss, lossValue;
let classACounter,classBCounter;

let loaded = false;

function setup() {
  canva = createCanvas(700, 600);
  canva.position((windowWidth - width) / 1.2, (windowHeight - height) / 2);

  video = createCapture(VIDEO).hide();

  header = select('.header');
  header.position(150, 150);

  discribtion = select('.discribtion');
  discribtion.position(header.x, header.y + header.height +20);

  model = select('.modelReady');
  model.position(discribtion.x, discribtion.y + discribtion.height +20);

  videoReady = select('.videoReady');
  videoReady.position(model.x, model.y + model.height +20);

  loss = select('.loss');
  loss.position(videoReady.x, videoReady.y + videoReady.height +20);


  statment = select('.statment');
  statment.position(loss.x, loss.y + loss.height +20);

  guess = select('#result');
  probability = select('#probability');
  lossValue = select('#lossValue');


  slider = createSlider(0,1,0.5,0.01);
  slider.addClass('slider');
  slider.position(statment.x,statment.y+statment.height+60);

  imageCounter = select('#imageCounter');

  addExample = select('.addExample');
  addExample.position(slider.x + slider.width * 1.7, slider.y-10);
  addExample.mousePressed(() => {
    regressor.addImage(slider.value());
    var count = parseInt(imageCounter.elt.textContent);
    imageCounter.elt.textContent = count+1;
    });

  train = select('.train');
  train.position(slider.x,slider.y+slider.height+50);
  train.mousePressed(() => regressor.train(isTraining));

  startModel();
}

function draw() {
    background(100);
    image(video, 0, 0, width, height);
    if (value) {
      select('body').attribute('bgColor', value*100);
    }else{
      select('body').attribute('bgColor', '#eab126');
    }
}
