import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import theme from '../../styles/theme'

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    flex: 1,
    justifyContent: 'center',
    opacity: 0.8,
    zIndex: 1
  }
})

function ScreenLoader() {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator color={theme.colors.primary} />
    </View>
  )
}

export default ScreenLoader
