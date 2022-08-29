import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  columnBar: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16
  },
  columnBar_compact: {
    marginBottom: 0
  },
  column: {
    flex: 1
  },
  column_notFirst: {
    marginLeft: 8
  },
  column_notLast: {
    marginRight: 8
  }
})

function ColumnBar({ children, isCompact }) {
  const childrenCount = React.Children.count(children)

  return (
    <View style={[styles.columnBar, isCompact && styles.columnBar_compact]}>
      {React.Children.map(children, (child, index) => (
        <View
          style={[
            styles.column,
            index !== 0 && styles.column_notFirst,
            index !== (childrenCount - 1) && styles.column_notLast
          ]}
        >
          {child}
        </View>
      ))}
    </View>
  )
}

ColumnBar.propTypes = {
  isCompact: PropTypes.bool
}

ColumnBar.defaultProps = {
  isCompact: false
}

export default ColumnBar
