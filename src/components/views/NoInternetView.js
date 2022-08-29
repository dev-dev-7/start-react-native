import NetInfo from "@react-native-community/netinfo"
import React, { useEffect, useState } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

import Text from '../typography/Text'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // height: 20,
    backgroundColor: theme.colors.grey_dark
  }
})

function NoInternetView() {
  const [netInfo, setNetInfo] = useState(false)
  const [animation, setAnimation] = useState(new Animated.Value(0))


  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected)
    });

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    // alert('here '+ netInfo)
    Animated.spring(animation, {
      toValue: netInfo ? 0 : 1,
    }).start()
  }, [netInfo])

  return (
    !netInfo && <Animated.View style={[
      styles.container,
      {
        height: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20]
        })
      }
    ]} >
      <Text color="dark">Checking Network...</Text>
    </Animated.View >
  )
}

export default NoInternetView
