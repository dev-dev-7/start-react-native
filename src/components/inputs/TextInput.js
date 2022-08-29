import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import BaseInput from './BaseInput';
import eyeClosedIcon from '../../assets/icons/eye_closed.png';
import eyeViewsIcon from '../../assets/icons/eye_views.png';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Almarai-Regular',
    fontSize: 16,
    height: 25,
    padding: 0,
    color: theme.colors.dark,
  },
});

class TextInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      isSecure: props.secureTextEntry,
    };
    this.textInputRef = null;
  }

  focus = () => {
    const {disabled} = this.props;
    if (!disabled) this.textInputRef.focus();
  };

  handleChange = value => {
    const {limit, onChangeText} = this.props;
    if (limit) {
      if (value.length <= limit) onChangeText(value);
    } else {
      onChangeText(value);
    }
  };

  render() {
    const {
      disabled,
      onChangeText,
      placeholderTextColor,
      required,
      secureTextEntry,
      textColor,
      ...other
    } = this.props;
    const {focused, isSecure} = this.state;
    const secureTextEntryProps = secureTextEntry && {
      rightIcon: isSecure ? eyeClosedIcon : eyeViewsIcon,
      onPressRightIcon: () => this.setState({isSecure: !isSecure}),
    };

    return (
      <BaseInput
        {...other}
        disabled={disabled}
        focused={focused}
        onPress={this.focus}
        {...(secureTextEntry && secureTextEntryProps)}>
        <RNTextInput
          autoCapitalize='none'
          blurOnSubmit={false}
          editable={!disabled}
          ref={r => {
            this.textInputRef = r;
          }}
          {...other}
          onChangeText={val => this.handleChange(val)}
          secureTextEntry={isSecure}
          style={[styles.textInput, {color: theme.colors[textColor]}]}
          placeholderTextColor={theme.colors[placeholderTextColor]}
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
        />
      </BaseInput>
    );
  }
}

TextInput.propTypes = {
  ...BaseInput.propTypes,
  secureTextEntry: PropTypes.bool,
};

TextInput.defaultProps = {
  ...BaseInput.defaultProps,
  secureTextEntry: false,
  placeholderTextColor: 'gray',
  textColor: 'light',
};

export default TextInput;
