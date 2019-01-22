let extractor,regressor, results, value;

async function startModel() {
  extractor = await ml5.featureExtractor('MobileNet');
  loaded = true;
  model.elt.style.color = 'Green';
  model.elt.textContent = 'Model is loaded';

  regressor= await extractor.regression(video);
  videoReady.elt.style.color = 'Green';
  videoReady.elt.textContent = 'Video is ready';
}

function isTraining(error) {
  if (error == null) {
    loss.elt.style.color = 'Green';
    loss.elt.textContent = "Training is done";
    regressor.predict(gotResults);
  }else{
    lossValue.elt.textContent = error;
  }
}


function gotResults(error, result){
  if (error) {
    console.log(error);
  }else{
    value = result;
    guess.elt.style = "color: white; font-size:23px;";
    guess.elt.textContent = value;
    regressor.predict(gotResults);
  }
}
