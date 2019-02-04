let extractor,classifier;

async function startModel() {
  extractor = await ml5.featureExtractor('MobileNet');
  loaded = true;
  model.elt.style.color = 'Green';
  model.elt.textContent = 'Model is loaded';

  classifier= ml5.KNNClassifier();
  videoReady.elt.style.color = 'Green';
  videoReady.elt.textContent = 'Video is ready';
}

function classify() {
  if (classifier.getNumLabels() > 0) {
      data = extractor.infer(video);
      classifier.classify(data, gotResults);
  }
}


function gotResults(error, results){
  if (error) {
    console.log(error);
  }else if(classifier.getNumLabels() > 0){
    var label = results.label
    var prob = results.confidencesByLabel[results.label];

    guess.elt.style = "color: white; font-size:23px;";
    probability.elt.style = "color: white; font-size:23px;";

    guess.elt.textContent = label;
    probability.elt.textContent = (prob * 100).toFixed(2)  + "%";
    classify();
  }
}
