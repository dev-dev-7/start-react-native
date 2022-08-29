import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '../../styles/theme'

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: theme.colors.dark,
    flex: 1
  }
})

function ScreenWrapper({ background ,children }) {
  return (
    <View style={[styles.screenWrapper, {backgroundColor:theme.colors[background]}]}>
      {children}
    </View>
  )
}

ScreenWrapper.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node
}

ScreenWrapper.defaultProps = {
  background: 'black',
  children: null
}

export default ScreenWrapper
