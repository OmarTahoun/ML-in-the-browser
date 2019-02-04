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
  data = extractor.infer(video);

  classifier.classify(data, gotResults);
}


function gotResults(error, results){
  if (error) {
    console.log(error);
  }else{
    var label = results[0].className.split(",")[0];
    result.elt.style = "color: white; font-size:23px;";
    probability.elt.style = "color: white; font-size:23px;";

    result.elt.textContent = label;
    probability.elt.textContent = (results[0].probability * 100).toFixed(2)  + "%";
  }
}
