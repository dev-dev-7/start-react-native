import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'

import theme from '../../styles/theme'

function BlockWrapper({ background, children, marginVertical, paddingHorizontal, paddingVertical }) {
  return (
    <View style={{ backgroundColor: theme.colors[background], paddingHorizontal, marginVertical, paddingVertical }}>
      {children}
    </View>
  )
}

BlockWrapper.propTypes = {
  background: PropTypes.string,
  paddingHorizontal: PropTypes.number
}

BlockWrapper.defaultProps = {
  background: 'light',
  paddingHorizontal: 10,
  marginVertical: 5,
  paddingVertical: 0
}

export default BlockWrapper
