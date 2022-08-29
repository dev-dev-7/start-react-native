import LibSwitchSelector from 'react-native-switch-selector'
import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '../../styles/theme'

const styles = StyleSheet.create({
})

function SwitchSelector({ borderColor,
  buttonColor,
  label,
  onChange,
  selectedColor,
  textColor,
  // eslint-disable-next-line no-unused-vars
  value,
  ...other }) {
  const handleSwitchSelect = (data) => {
    setFieldValue(data)
  }

  return (
    <LibSwitchSelector
      buttonMargin={2}
      hasPadding
      disableValueChangeOnPress
      onPress={onChange}
      textColor={theme.colors[textColor]}
      borderColor={theme.colors[borderColor]}
      buttonColor={theme.colors[buttonColor]}
      selectedColor={theme.colors[selectedColor]}
      {...other}
    />
  )
}

SwitchSelector.propTypes = {
  borderColor: PropTypes.oneOf(Object.keys(theme.colors)),
  borderRadius: PropTypes.number,
  buttonColor: PropTypes.oneOf(Object.keys(theme.colors)),
  hasPadding: PropTypes.bool,
  height: PropTypes.number,
  initial: PropTypes.number,
  selectedColor: PropTypes.oneOf(Object.keys(theme.colors)),
  textColor: PropTypes.oneOf(Object.keys(theme.colors)),
  valuePadding: PropTypes.number
}

SwitchSelector.defaultProps = {
  borderColor: 'primary',
  borderRadius: 5,
  buttonColor: 'primary',
  hasPadding: true,
  height: 40,
  initial: 0,
  selectedColor: 'light',
  textColor: 'primary_light',
  valuePadding: 1
}

export default SwitchSelector
