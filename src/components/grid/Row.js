import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'

function Row({ children }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {children}
    </View>
  )
}

Row.propTypes = {
  children: PropTypes.node
}

Row.defaultProps = {
  children: null
}

export default Row
