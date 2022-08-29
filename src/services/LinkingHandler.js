import { Alert, Linking } from 'react-native'

export default function linkHandler(url, errorMsg, handleLink) {
  // Adding the try/catch block here as the canOpenUrl call is not rejecting promise
  // as expected in case the input url is null or empty string
  try {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        if (handleLink) {
          handleLink()
        } else {
          Linking.openURL(url)
        }
      } else {
        Alert.alert('Alert', errorMsg)
      }
    }).catch(() => Alert.alert('Alert', errorMsg))
  } catch (_) {
    Alert.alert('Alert', errorMsg)
  }
}
