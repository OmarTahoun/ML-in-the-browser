let extractor,classifier, results;

async function startModel() {
  extractor = await ml5.featureExtractor('MobileNet');
  loaded = true;
  model.elt.style.color = 'Green';
  model.elt.textContent = 'Model is loaded';

  classifier= await extractor.classification(video);
  classifier.numClasses = 3;
  videoReady.elt.style.color = 'Green';
  videoReady.elt.textContent = 'Video is ready';
}

function isTraining(error) {
  if (error == null) {
    loss.elt.style.color = 'Green';
    loss.elt.textContent = "Training is done";
    classifier.classify(gotResults);
  }else{
    lossValue.elt.textContent = error;
  }
}


function gotResults(error, result){
  if (error) {
    console.log(error);
  }else{
    var label = result;
    guess.elt.style = "color: white; font-size:23px;";
    guess.elt.textContent = label;
    classifier.classify(gotResults);
  }
}
