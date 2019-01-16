let clf, results;
async function loadModel() {
  clf = await ml5.imageClassifier('MobileNet');
  loaded = true;
}

async function classify() {
    results = await clf.predict(img);
    result.elt.textContent = results[0].className;
    probability.elt.textContent = results[0].probability.toFixed(4);
}
