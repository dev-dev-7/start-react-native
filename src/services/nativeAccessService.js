import ImagePicker from 'react-native-image-crop-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

/**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info in the API Reference)
 */

export function getPhoto() {
  return new Promise((resolve, reject) => {
    ImagePicker.openPicker({
      width: 800,
      height: 1000,
      compressImageQuality: 1,
      cropping: true,
      includeBase64: true
    }).then(image => {
      // const source = { uri: 'data:image/jpeg;base64,' + image.data }
      const source = { uri: image.path }

      resolve(source)
    }).catch(error => {
      reject(false)
    })
  })
}
