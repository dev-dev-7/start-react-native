import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import styles from './style';
import addbtn from '../../assets/images/addbtn.png';
import Text from '../typography/Text';
import {launchCamera} from 'react-native-image-picker';

export default function AddCard({title, value, onChangeId}) {
  var [img, setImg] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openCamera = () => {
    //Alert.alert('asdasd');
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: false,
    };

    launchCamera(options, response => {
      const source = response.assets[0].uri;
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImg(JSON.stringify(source));
        console.log('response', JSON.stringify(response));
        onChangeId(source);
        alert(JSON.stringify(source));
      }
    });
  };

  return (
    <ImageBackground style={styles.addButtonContainer} source={{ uri: img }}>
      <TouchableOpacity
        onPress={() => requestCameraPermission()}
        style={{width: 52, height: 52}}>
        <Image source={addbtn} style={{width: '100%', height: '100%'}} />
      </TouchableOpacity>
      <View style={styles.detailsContainer4}>
        <Text size={'xnormal'} color={'lighter'}>
          {title}
        </Text>
      </View>
    </ImageBackground>
  );
}
