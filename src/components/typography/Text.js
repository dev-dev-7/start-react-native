import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import theme from '../../styles/theme';

const styles = StyleSheet.create({
  // Align
  text_centerAlign: {
    textAlign: 'center',
  },
  text_justifyAlign: {
    textAlign: 'justify',
  },
  text_leftAlign: {
    textAlign: 'left',
  },
  text_rightAlign: {
    textAlign: 'right',
  },

  // Colors
  ...Object.keys(theme.colors).reduce(
    (colorStyles, color) => ({
      ...colorStyles,
      [`text_${color}Color`]: {
        color: theme.colors[color],
      },
    }),
    {},
  ),

  // Decorations
  text_normalDecoration: {
    textDecorationLine: 'none',
  },
  text_underlinedDecoration: {
    textDecorationLine: 'underline',
  },

  // Sizes
  text_xsmallSize: {
    fontSize: 8,
  },
  text_smallSize: {
    fontSize: 10,
  },
  text_xnormalSize: {
    fontSize: 12,
  },
  text_normalSize: {
    fontSize: 14,
  },
  text_largeSize: {
    fontSize: 18,
  },
  text_xlargeSize: {
    fontSize: 20,
  },
  text_xxlargeSize: {
    fontSize: 32,
  },

  // Transforms
  text_lowercaseTransform: {
    textTransform: 'lowercase',
  },
  text_uppercaseTransform: {
    textTransform: 'uppercase',
  },
  text_capitalizeTransform: {
    textTransform: 'capitalize',
  },

  // Weights
  text_regularWeight: {
    fontFamily: 'Almarai-Regular',
  },
  text_mediumWeight: {
    fontFamily: 'Almarai-Bold',
  },
  text_semiboldWeight: {
    fontFamily: 'Almarai-Regular',
  },
});

function Text({
  align,
  children,
  color,
  decoration,
  size,
  style,
  transform,
  weight,
  ...other
}) {
  return (
    <RNText
      style={[
        styles[`text_${color}Color`],
        styles[`text_${decoration}Decoration`],
        styles[`text_${size}Size`],
        styles[`text_${transform}Transform`],
        styles[`text_${weight}Weight`],
        styles[`text_${align}Align`],
        style,
      ]}
      {...other}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  align: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  decoration: PropTypes.oneOf(['normal', 'underlined']),
  style: PropTypes.object,
  size: PropTypes.oneOf([
    'small',
    'xnormal',
    'normal',
    'large',
    'xlarge',
    'xxlarge',
  ]),
  transform: PropTypes.oneOf(['none', 'capitalize', 'lowercase', 'uppercase']),
  weight: PropTypes.oneOf(['regular', 'medium', 'semibold']),
};

Text.defaultProps = {
  align: 'left',
  children: null,
  color: 'primary',
  decoration: 'normal',
  size: 'normal',
  style: null,
  transform: 'none',
  weight: 'regular',
};

export default Text;
