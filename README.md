# RNML

[React Native Setup](https://reactnative.dev/docs/environment-setup)

- brew install node
- brew install watchman
- ruby version needed is *2.7.5*. Mac does NOT have this version, so you need a [version manager](https://rvm.io/).
- node version > 14.0
- install Xcode from App Store
- npm uninstall -g react-native-cli @react-native-community/cli  (in case they were installed some other time)

Project Setup
- clone repository
- npm install
- cd ios && pod install && cd ..
- npx react-native run-ios


npm install should install all libraries needed. in case something doesn't work, libraries used can be installed one by one: 

- npm i @tensorflow/tsjs
- npm i @tensorflow/tfjs-react-native
- npm i expo-asset
- npm i react-native-binary-file
- npm i react-native-fs
- npm i expo-file-system
