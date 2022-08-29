import LibSwitchSelector from 'react-native-switch-selector'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { TextInput as RNTextInput, StyleSheet } from 'react-native'

import BaseInput from './BaseInput'
import theme from '../../styles/theme'
import SwitchSelector from './SwitchSelector'

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    height: 25,
    padding: 0
  }
})

class SwitchInput extends PureComponent {

  render() {
    const { borderColor,
      buttonColor,
      disabled,
      error,
      label,
      onChange,
      selectedColor,
      textColor,
      // eslint-disable-next-line no-unused-vars
      value,
      initial,
      ...other
    } = this.props

    return (
      <BaseInput
        disabled={disabled}
        error={error}
        label={label}
      >
        <LibSwitchSelector
          initial={initial}
          buttonMargin={2}
          hasPadding
          disableValueChangeOnPress
          onPress={onChange}
          textColor={theme.colors[textColor]}
          borderColor={theme.colors[borderColor]}
          buttonColor={theme.colors[buttonColor]}
          selectedColor={theme.colors[selectedColor]}
          animationDuration={250}
          {...other}
        />
      </BaseInput>
    )
  }
}

SwitchInput.propTypes = {
  ...BaseInput.propTypes,
  autoSubmit: PropTypes.bool,
  disabled: PropTypes.bool
}

SwitchInput.defaultProps = {
  ...BaseInput.defaultProps,
  autoSubmit: true,
  disabled: false,
  borderRadius: 5,
  buttonColor: 'primary_light',
  hasPadding: false,
  height: 30,
  initial: 0,
  selectedColor: 'light',
  textColor: 'grey_dark',
  valuePadding: 5
}

export default SwitchInput
