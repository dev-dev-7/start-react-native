
import { Alert } from 'react-native';

export const uploadFile = (files) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      const photo = files[i];
      formData.append('files', {
        name: 'foo foo',
        uri: photo.uri,
        type: Platform.OS === 'ios' ? 'image/jpeg/jpg' : 'image/jpeg',
      });
    }
    fetch(`https://api-temp.mazadee.com/v1/file/upload`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(res => res.json()).then(data => {
      if (data && data.success) {
        resolve(data.data);
      } else {
        reject()
      }
    }).catch(err => {
      Alert.alert("err: " + err);
      reject()
    });
  })
};