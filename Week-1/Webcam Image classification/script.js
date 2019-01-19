let clf, results;

async function startModel() {
  clf = await ml5.imageClassifier('MobileNet', video);
  loaded = true;
  model.elt.style.color = 'Green';
  model.elt.textContent = 'Loaded';
  clf.predict(gotResults);
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
    clf.predict(gotResults);
  }
}
