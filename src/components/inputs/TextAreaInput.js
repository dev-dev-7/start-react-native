import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {TextInput as RNTextInput, StyleSheet, View} from 'react-native';
import BaseInput from './BaseInput';
import eyeClosedIcon from '../../assets/icons/eye_closed.png';
import eyeIcon from '../../assets/icons/eye_views.png';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Almarai-Regular',
    fontSize: 16,
    padding: 0,
    color: theme.colors.primary,
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
      rightIcon: isSecure ? eyeClosedIcon : eyeIcon,
      onPressRightIcon: () => this.setState({isSecure: !isSecure}),
    };

    return (
      <View
        style={{
          backgroundColor: theme.colors.dark_light,
          padding: 15,
          borderRadius: 12,
          justifyContent: 'center',
        }}>
        <RNTextInput
          blurOnSubmit={false}
          editable={!disabled}
          ref={r => {
            this.textInputRef = r;
          }}
          {...other}
          onChangeText={val => this.handleChange(val)}
          multiline={true}
          numberOfLines={4}
          secureTextEntry={isSecure}
          style={[styles.textInput, {color: theme.colors[textColor]}]}
          placeholderTextColor={theme.colors[placeholderTextColor]}
          onBlur={() => this.setState({focused: false})}
          onFocus={() => this.setState({focused: true})}
        />
      </View>
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
  textColor: 'primary',
};

export default TextInput;
