import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Text from '../typography/Text';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 2,
  },
  textInputWrapper: {
    backgroundColor: theme.colors.dark_light,
    padding: 15,
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
  },
  textInputWrapper_focused: {
    borderBottomColor: theme.colors.light,
  },
  textInputWrapper_error: {
    borderBottomColor: theme.colors.light,
  },
  errorWrapper: {
    alignItems: 'flex-end',
  },
  helperTextWrapper: {
    alignItems: 'flex-start',
    height: 12,
    justifyContent: 'center',
    marginVertical: 4,
  },
  textInputAdornment: {
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

class BaseInput extends PureComponent {
  render() {

    const {
      children,
      disabled,
      error,
      focused,
      helperText,
      label,
      limit,
      leftIcon,
      rightIcon,
      onPress,
      onPressRightIcon,
      value,
    } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (disabled) return;
          if (onPress) onPress();
        }}>
        <View style={[styles.wrapper, label && { marginBottom: 0 }]}>
          <View
            style={[
              styles.textInputWrapper,
              focused && styles.textInputWrapper_focused,
              error && styles.textInputWrapper_error,
              disabled && { borderBottomWidth: 0 },
            ]}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {label && <Text>{label}</Text>}
              {limit && (
                <Text size="small" color="light">
                  {value ? limit - value.length : limit}
                </Text>
              )}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {!!leftIcon && (
                <View style={styles.textInputAdornment}>
                  <Image
                    style={styles.icon}
                    source={leftIcon}
                    resizeMode="contain"
                  />
                </View>
              )}
              <View style={{ flex: 1 }}>{children}</View>
              {!!rightIcon && (
                <TouchableWithoutFeedback onPress={onPressRightIcon}>
                  <View style={styles.textInputAdornment}>
                    <Image
                      style={styles.icon}
                      source={rightIcon}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            </View>
          </View>
          <View
            style={[styles.helperTextWrapper, error && styles.errorWrapper]}>
            {error ? (
              <Text color="light" size="small">
                {error}
              </Text>
            ) : (
              <Text color="light" size="small">
                {helperText}
              </Text>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

BaseInput.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  focused: PropTypes.bool,
  required: PropTypes.bool,
};

BaseInput.defaultProps = {
  disabled: false,
  error: null,
  focused: false,
  leftIcon: null,
  required: false,
  rightIcon: null,
};

export default BaseInput;
