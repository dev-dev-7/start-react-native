import PropTypes from 'prop-types'
import React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import Text from '../typography/Text'
import theme from '../../styles/theme'

import closeIcon from '../../assets/icons/close.png'

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 2,
    margin: 3,
    marginLeft: 0
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 5
  },
})

function TagElementView({ color, title, onClose }) {
  return (
    <View style={[
      styles.row,
      { backgroundColor: theme.colors[color], }
    ]}>
      <Text color="light" transform="capitalize">{title}</Text>
      {onClose && <TouchableWithoutFeedback onPress={onClose}>
        <Image source={closeIcon} style={styles.icon} />
      </TouchableWithoutFeedback>}
    </View>
  )
}

TagElementView.propTypes = {
  color: PropTypes.oneOf(Object.keys(theme.colors))

}

TagElementView.defaultProps = {
  color: "grey_dark"
}

export default TagElementView
