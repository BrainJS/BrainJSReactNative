# brain.js React Native Examples

In this project, you will find an trained-model.json file as well as, a index.js file. You may use the index.js file to train new models, currently this example, is trained on 10 different Lee Kernaghan songs, and 10 different ACDC songs. The example demonstrates how a muti-layer Neural Network, is able to classify the artist, by analysing song lyrics.

<img src="https://github.com/BrainJS/ReactNative/blob/master/example.png?raw=true" width="275" height="500" alt="example">

# Files

 - index.js
 - trained-model.json
 
# BrainJSReactNativeExampleApp

 In the above mentioned directory, you will find a working react native example app, the takes in song lyrics, and classifies them accordantly.

# Setting up a new React Native project to work with brain.js

 1. npm install in the main directory
 2. npm install in the BrainJSReactNativeExample directory
 3. navigate to the package install in your node modules folder, navigate to train-stream.js file under brain.js --> dist and remove the require statement for stream, it should look like this:

    var _stream = require('stream');
    
(don't worry about removing this, this is a dependant library for the training aspect of brain.js, but we won't be training on the user's phone, so this is not needed.)

Also, remove the following line at the bottom of file, below the return statement:

(_stream.Writable);

