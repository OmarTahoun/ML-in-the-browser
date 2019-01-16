let clf, results;
async function loadModel() {
  clf = await ml5.imageClassifier('MobileNet');
  loaded = true;
  model.elt.style.color = 'Green';
  model.elt.textContent = 'Loaded';
}

async function classify() {
    results = await clf.predict(img);
    var label = results[0].className.split(",")[0];
    result.elt.style = "color: white; font-size:23px;";
    probability.elt.style = "color: white; font-size:23px;";

    result.elt.textContent = label;
    probability.elt.textContent = (results[0].probability * 100).toFixed(2)  + "%";
}
