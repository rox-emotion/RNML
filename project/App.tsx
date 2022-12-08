import * as tf from '@tensorflow/tfjs'
import { bundleResourceIO, decodeJpeg, fetch } from '@tensorflow/tfjs-react-native'
import * as fs from 'expo-file-system'
import { useEffect } from 'react';
import * as jpeg from 'jpeg-js'

const App = () => {

  useEffect(() => {
    getPredictions('/Users/roxana/Desktop/rndigits/project/model/example.jpeg') //actual path to image (for now)
  })

  const modelJSON = require('../project/model/my-model.json')
  const modelWeights = require('../project/model/my-model-weights.bin')

  const loadModel = async () => {
    //.ts: const loadModel = async ():Promise<void|tf.LayersModel>=>{
    const model = await tf.loadLayersModel(
      bundleResourceIO(modelJSON, modelWeights)
    ).catch((e) => {
      console.log("[LOADING ERROR] info:", e)
    })
    return model
  }

  //AICI E PROBLEMA

  const transformImageToTensor = async (uri) => {
    //read the image as base64
    const img64 = await fs.readAsStringAsync(uri, { encoding: fs.EncodingType.Base64 })
    const imgBuffer = tf.util.encodeString(img64, 'base64').buffer
    const raw = new Uint8Array(imgBuffer)
    let imgTensor = decodeJpeg(raw)
    const scalar = tf.scalar(255)
    //resize the image
    //AICI ARE O EROARE FORMIDABILA
    imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [300, 300])
    //normalization
    const tensorScaled = imgTensor.div(scalar)
    //final shape of the tensor
    const img = tf.reshape(tensorScaled, [1, 300, 300, 3])
    return img
  }

  const makePredictions = async (batch, model, imagesTensor: tf.Tensor3D) => {
    //.ts: const makePredictions = async (batch:number, model:tf.LayersModel,imagesTensor:tf.Tensor<tf.Rank>):Promise<tf.Tensor<tf.Rank>[]>=>{
    //cast output prediction to tensor
    console.log(imagesTensor)
    const predictionsdata = model.predict(imagesTensor)
    //.ts: const predictionsdata:tf.Tensor = model.predict(imagesTensor) as tf.Tensor
    let pred = predictionsdata.split(batch) //split by batch size
    //return predictions 
    console.log(pred)
    return pred
  }

  const getPredictions = async (image) => {
    await tf.ready()
    const model = await loadModel() as tf.LayersModel
    const tensor_image = await transformImageToTensor(image)
    const predictions = await makePredictions(1, model, tensor_image)
    return predictions
  }


}



export default App;