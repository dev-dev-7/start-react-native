import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  rowBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowBar_withBottomGap: {
    marginBottom: 16
  },
  rowBar_withTopGap: {
    marginTop: 16
  }
})

function RowBar({ children, withBottomGap, withTopGap }) {
  return (
    <View
      style={[
        styles.rowBar,
        withBottomGap && styles.rowBar_withBottomGap,
        withTopGap && styles.rowBar_withTopGap
      ]}
    >
      {children}
    </View>
  )
}

RowBar.propTypes = {
  withBottomGap: PropTypes.bool,
  withTopGap: PropTypes.bool
}

RowBar.defaultProps = {
  withBottomGap: true,
  withTopGap: false
}

export default RowBar
