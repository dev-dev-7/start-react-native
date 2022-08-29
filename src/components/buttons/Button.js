import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../typography/Text';
import theme, {getForegroundColor} from '../../styles/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    fontFamily: 'Almarai-Bold',
  },

  button_disabled: {
    opacity: 0.24,
  },

  // Colors
  ...Object.keys(theme.colors).reduce(
    (colorStyles, color) => ({
      ...colorStyles,
      [`button_contained_${color}`]: {
        backgroundColor: theme.colors[color],
        elevation: 2,
      },
      [`button_outline_${color}`]: {
        borderColor: theme.colors[color],
        backgroundColor: theme.colors.white,
        borderWidth: 1,
      },
    }),
    {},
  ),

  // Sizes
  button_normalSize: {
    height: 48,
  },
  button_xnormalSize: {
    height: 38,
  },
  button_largeSize: {
    marginTop: 16,
    height: 56,
  },
  button_smallSize: {
    height: 32,
    width: 80,
  },
  button_dashedBorder: {
    borderRadius: 1,
    borderStyle: 'dashed',
  },
  button_noneBorder: {
    borderWidth: 0,
  },
  buttonContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContent_leftAlign: {
    alignSelf: 'flex-start',
  },
  buttonContent_rightAlign: {
    alignSelf: 'flex-end',
  },

  icon_left: {
    marginRight: 16,
    width: 32,
  },
  icon_right: {
    marginLeft: 16,
  },
});

function Button({
  borderStyle,
  color,
  disabled,
  iconPosition,
  iconSource,
  loading,
  name,
  size,
  fontSize,
  textAlign,
  textTransform,
  title,
  variant,
  weight,
  wrapperViewStyle,
  ...other
}) {
  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
  const textColor = getForegroundColor(color, variant);
  const background =
    Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple(theme.colors.ripple_light)
      : TouchableNativeFeedback.SelectableBackground();

  return (
    <Touchable
      background={background}
      disabled={disabled || loading}
      {...other}>
      <View
        style={[
          styles.button,
          styles[`button_${size}Size`],
          styles[`button_${variant}_${color}`],
          styles[`button_${borderStyle}Border`],
          disabled && styles.button_disabled,
          wrapperViewStyle,
        ]}>
        {loading ? (
          <ActivityIndicator color={theme.colors[textColor]} />
        ) : (
          <View
            style={[
              styles.buttonContent,
              styles[`buttonContent_${textAlign}Align`],
            ]}>
            {iconPosition === 'left' && iconSource && (
              <Image
                source={iconSource}
                resizeMode="contain"
                style={styles.icon_left}
              />
            )}
            <Text
              color={textColor}
              transform={textTransform}
              weight={weight}
              size={fontSize}
              disabled={disabled}>
              {title}
            </Text>
            {iconPosition === 'right' && iconSource && (
              <Image
                source={iconSource}
                resizeMode="contain"
                style={styles.icon_right}
              />
            )}
          </View>
        )}
      </View>
    </Touchable>
  );
}

Button.propTypes = {
  borderStyle: PropTypes.oneOf(['dashed', 'dotted', 'none', 'solid']),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  disabled: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  loading: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large', 'small']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  textTransform: Text.propTypes.transform,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outline']),
  weight: Text.propTypes.weight,
  fontSize: PropTypes.number,
};

Button.defaultProps = {
  borderStyle: null,
  color: 'primary',
  disabled: false,
  iconPosition: 'left',
  iconSource: null,
  loading: false,
  name: null,
  size: 'large',
  textAlign: 'center',
  textTransform: 'capitalize',
  title: null,
  variant: 'contained',
  weight: 'semibold',
  fontSize: null,
};

export default Button;
