import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../styles/theme';

/**
 * LinearGradientWrapper - content wrapper with linear gradient background
 * e.g. Wallet Screen
 *
 * @param {string} align - accepts only center
 * @param {string} gutterX - wide or narrow left and right margin
 * @param {string} gutterY - wide or narrow top and bottom margin
 * @param {string} rounded - makes border rounded by 8px
 *
 * @returns content wrapper with linear gradient background color and purple border color
 */

const LinearGradientWrapper = ({
  align,
  children,
  gutterX,
  gutterY,
  rounded,
  flex,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#FF696B', '#8F00FF']}
      style={[
        styles.mainWrapper,
        align && styles[`contentWrapper_${align}Align`],
        gutterX && styles[`contentWrapper_${gutterX}X`],
        gutterY && styles[`contentWrapper_${gutterY}Y`],
        rounded && styles[`rounded`],
        flex && {flex: flex},
      ]}>
      <LinearGradient
        style={styles.innerWrapper}
        colors={['rgba(255, 255, 255, 0.92)', 'rgba(255, 255, 255, 0.83)']}>
        {children}
      </LinearGradient>
    </LinearGradient>
  );
};

export default LinearGradientWrapper;

const styles = StyleSheet.create({
  mainWrapper: {
    borderColor: theme.colors.border,
    borderWidth: 1,
  },
  innerWrapper: {
    flex: 1,
  },
  contentWrapper_centerAlign: {
    alignItems: 'center',
  },
  contentWrapper_narrowY: {
    marginBottom: 16,
    marginTop: 16,
  },
  contentWrapper_wideY: {
    marginBottom: 24,
    marginTop: 24,
  },
  contentWrapper_narrowX: {
    marginRight: 16,
    marginLeft: 16,
  },
  contentWrapper_wideX: {
    marginRight: 24,
    marginLeft: 24,
  },
  rounded: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
