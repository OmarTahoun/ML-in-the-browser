let header, statment, model, canva, video, result, probability;
let clf, results;
let loaded = false;

function gotResults(error, results){
  if (error) {
    console.log(error);
  }else{
    var label = results[0].className.split(",")[0];
    result.elt.style = "color: white; font-size:23px;";
    probability.elt.style = "color: white; font-size:23px;";

    result.elt.textContent = label;
    probability.elt.textContent = (results[0].probability * 100).toFixed(2)  + "%";
    clf.predict(gotResults);
  }
}

function setup() {
  canva = createCanvas(700, 600);
  canva.position((windowWidth - width) / 2, (windowHeight - height) / 1.1);

  video = createCapture(VIDEO).hide();

  header = select('.header');

  statment = select('.statment');

  model = select('.model');

  result = select('#result');

  probability = select('#probability');

  clf = ml5.imageClassifier('MobileNet', video, () => {
    loaded = true;
    model.elt.style.color = 'Green';
    model.elt.textContent = 'Loaded';
    clf.predict(gotResults);
  });
}

function draw() {
    background(100);
    image(video, 0, 0, width, height);
}
