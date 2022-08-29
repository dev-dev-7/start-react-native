import React from 'react'
import { Platform, StatusBar as RNStatusBar } from 'react-native'

function StatusBar() {
  return Platform.OS === 'ios'
    ? <RNStatusBar barStyle="dark-content" />
    : <RNStatusBar backgroundColor="black" barStyle="light-content" />
}

export default StatusBar
