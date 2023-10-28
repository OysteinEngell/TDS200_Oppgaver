import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraAvailable, setIsCameraAvailable] = useState(null);
  const [image, setImage] = useState(null)
  

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const handleCapture = async () => {
    console.log("handleCapture")
    if (cameraRef) {
      console.log("cameraRef = true")
      let photo = await cameraRef.takePictureAsync();
      console.log(photo)
      setImage(photo.uri);
      console.log("image: " + image)
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Your Image</Text>
        { image? (
          <View>
            <Text>True</Text>
            <Image source={{uri: image}} style={{width: 200, height: 200}}/>
          </View>
        ) : (
          <Text>False</Text>
        )}
       
      </View>
      <Camera 
        style={styles.camera} 
        type={type}
        onCameraReady={() => setIsCameraAvailable(true)}
        ref={(ref) => {
          cameraRef = ref;
        }}
      >

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleCapture}>

              <Text style={styles.text}>Take photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});