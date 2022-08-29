import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'

function Column({ children }) {
  return (
    <View style={{ width: '50%' }}>
      {children}
    </View>
  )
}

Column.propTypes = {
  children: PropTypes.node
}

Column.defaultProps = {
  children: null
}

export default Column
