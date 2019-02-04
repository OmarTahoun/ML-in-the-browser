# [A Teachable machine](https://omartahoun.github.io/ML-in-the-browser/Week-2/Teachable machine/)

### Teach the machine to identify different objects and images.

### How it works:
- The MobileNet model is loaded.
- A feature extractor is then created and it trains on the images coming in from the camera
- after the images for all labels is  collected the model starts training.
- The loss is displays and when training is done the model is ready to classify new data.

### references:
- [MobilNet model from TensorFlow](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md)
- [ML5 feature Extractor example](https://ml5js.org/docs/FeatureExtractor)
- [Coding Train](https://www.youtube.com/watch?v=eeO-rWYFuG0&list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y&index=5)
