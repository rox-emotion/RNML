# RNML

### [React Native Setup](https://reactnative.dev/docs/environment-setup)

- brew install node
- brew install watchman
- ruby version needed is *2.7.5*. Mac does NOT have this version, so you need a [version manager](https://rvm.io/).
- node version > 14.0
- install Xcode from App Store
- npm uninstall -g react-native-cli @react-native-community/cli  (in case they were installed some other time)

### Project Setup
- clone repository
- npm install
- cd ios && pod install && cd ..
- npx react-native run-ios

### Some Tutorials of including model in React Native:
- [React Native + Tensorflow.js - implementing a model](https://medium.com/@ferlatti.aldo/react-native-tensorflow-js-implementing-a-model-daad1a2c7f30) This is the one used in the code
- [Tensorflow.js for RN](https://blog.tensorflow.org/2020/02/tensorflowjs-for-react-native-is-here.html) 
- [Image Classification on React Native with TensorFlow.js and MobileNet](https://heartbeat.comet.ml/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c)

##### [What is a tensor?](https://tensorflow.rstudio.com/guides/tensorflow/tensor)

##### The ML model is already included (my-model.json & my-model-weights.bin). It was created to recognize handwritten digits from 28x28 pixel black and white pictures like in [this tutorial](https://codelabs.developers.google.com/codelabs/tfjs-training-classfication/index.html#0)

npm install should install all libraries needed. in case something doesn't work, libraries used can be installed one by one: 

- npm i @tensorflow/tsjs
- npm i @tensorflow/tfjs-react-native
- npm i expo-asset
- npm i react-native-binary-file
- npm i react-native-fs
- npm i expo-file-system
