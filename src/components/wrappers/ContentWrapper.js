import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  base: {
    position: 'relative',
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
  contentWrapper_noneX: {
    marginRight: 0,
    marginLeft: 0,
  },
  contentWrapper_noneY: {
    marginBottom: 0,
    marginTop: 0,
  },
  contentWrapper_narrowX: {
    marginRight: 16,
    marginLeft: 16,
  },
  contentWrapper_wideX: {
    marginRight: 24,
    marginLeft: 24,
  },
  contentWrapper_row: {
    flexDirection: 'row',
  },
  contentWrapper_column: {
    flexDirection: 'column',
  },
  contentWrapper_spaceBetweenjustify: {
    justifyContent: 'space-between',
  },
  contentWrapper_centerjustify: {
    justifyContent: 'center',
  },
  contentRadius_normal: {
    borderRadius: 12,
    padding: 12,
  },
  contentPadding_wide: {
    paddingRight: 24,
    paddingLeft: 24,
    marginRight: 0,
    marginLeft: 0,
    paddingBottom: 24,
    marginTop: 0,
    marginBottom: 0,
  },
  content_payment: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contentPadding_none: {
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  contentPadding_normal: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  ...Object.keys(theme.colors).reduce(
    (colorStyles, color) => ({
      ...colorStyles,
      [`contentWrapper_${color}`]: {
        backgroundColor: theme.colors[color],
      },
    }),
    {},
  ),
});

function ContentWrapper({
  align,
  justify,
  children,
  gutterX,
  gutterY,
  direction,
  flex,
  color,
  padding,
  radius,
  classN,
}) {
  return (
    <View
      style={[
        styles.base,
        align && styles[`contentWrapper_${align}Align`],
        gutterX && styles[`contentWrapper_${gutterX}X`],
        gutterY && styles[`contentWrapper_${gutterY}Y`],
        direction && styles[`contentWrapper_${direction}`],
        justify && styles[`contentWrapper_${justify}justify`],
        color && styles[`contentWrapper_${color}`],
        padding && styles[`contentPadding_${padding}`],
        radius && styles[`contentRadius_${radius}`],
        classN && styles[`content_${classN}`],
        flex && {flex: flex},
      ]}>
      {children}
    </View>
  );
}

ContentWrapper.propTypes = {
  align: PropTypes.oneOf(['center']),
  justify: PropTypes.oneOf(['spaceBetween']),
  children: PropTypes.node,
  gutterX: PropTypes.oneOf(['narrow', 'none', 'wide']),
  gutterY: PropTypes.oneOf(['narrow', 'none', 'wide']),
};

ContentWrapper.defaultProps = {
  align: null,
  children: null,
  gutterX: 'narrow',
  gutterY: 'narrow',
  justify: 'spaceBetween',
};

export default ContentWrapper;
