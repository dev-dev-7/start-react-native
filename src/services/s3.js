import { Platform } from 'react-native'
import Config from 'react-native-config'

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append('file', {
      name: file.name,
      uri: file.uri,
      type: Platform.OS === 'ios' ? 'image/jpeg/jpg' : 'image/jpeg',
    });
    fetch(`${Config.SOCKET_URL}/fileUpload/uploadSingleFile`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }).then(res => res.json()).then(data => {
      if (data && data.success) {
        resolve({ file: data.results.url })
      }
      else {
        reject()
      }
    }).catch(err => {
      console.log(err)
      reject()
    });
  })
}