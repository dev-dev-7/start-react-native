import normalize from 'react-native-normalize';
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Image, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Text from '../typography/Text'
import theme from '../../styles/theme'
import { getInitials } from '../../services/utilities/commonFunctions'

const largeSize = 60
const xlargeSize = 150
const normalSize = 50
const smallSize = Platform.OS === "ios" ? normalize(20, 'height') : normalize(30, 'height')

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Colors
  ...Object.keys(theme.colors).reduce((colorStyles, color) => ({
    ...colorStyles,

    [`avatar_${color}`]: {
      backgroundColor: theme.colors[color],
      borderColor: theme.colors[color],
      borderWidth: 1
    }
  }), {}),

  // Sizes
  avatar_normalSize: {
    borderRadius: normalSize,
    height: normalSize,
    width: normalSize
  },
  avatar_largeSize: {
    borderRadius: largeSize,
    height: largeSize,
    width: largeSize
  },
  avatar_smallSize: {
    borderRadius: smallSize,
    height: smallSize,
    width: smallSize
  },
  avatar_xlargeSize: {
    borderRadius: xlargeSize,
    height: xlargeSize,
    width: xlargeSize
  },
  avatar_dashedBorder: {
    borderRadius: 1, // Somehow without this border style don't work.
    borderStyle: 'dashed'
  },
  avatar_noneBorder: {
    borderWidth: 0
  },
  imageView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftIcon: {
    position: 'absolute',
    left: 0,
    bottom: 10
  },
  rightIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10
  },
  bottomIcon: {
    position: 'absolute',
    bottom: -3
  },
  icon: {
    // borderRadius: 20,
    height: 20,
    width: 20
  },
  // status
  avatar_status_normalSize: {
    borderRadius: normalSize + 10,
    height: normalSize + 10,
    width: normalSize + 10
  },
  avatar_status_largeSize: {
    borderRadius: largeSize + 10,
    height: largeSize + 10,
    width: largeSize + 10,
  },
  avatar_status_smallSize: {
    borderRadius: smallSize + 10,
    height: smallSize + 10,
    width: smallSize + 10
  },
  avatar_status_xlargeSize: {
    borderRadius: xlargeSize + 10,
    height: xlargeSize + 10,
    width: xlargeSize + 10
  },
  avatar_status_border_normalSize: {
    borderRadius: normalSize + 5,
    height: normalSize + 5,
    width: normalSize + 5
  },
  avatar_status_border_largeSize: {
    borderRadius: largeSize + 5,
    height: largeSize + 5,
    width: largeSize + 5
  },
  avatar_status_border_smallSize: {
    borderRadius: smallSize + 5,
    height: smallSize + 5,
    width: smallSize + 5
  },
  avatar_status_border_xlargeSize: {
    borderRadius: xlargeSize + 5,
    height: xlargeSize + 5,
    width: xlargeSize + 5
  },
  statusContainer: {
    backgroundColor: theme.colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8
  },
  statusBorderContainer: {
    backgroundColor: theme.colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithBorder: {
    backgroundColor: theme.colors.light,
    // borderWidth: 1,
    borderColor: theme.colors.primary,
    padding: 2,
    borderRadius: 50
  }
})

function AvatarView({
  borderStyle,
  bottomIcon,
  color,
  disabled,
  name,
  leftIcon,
  rightIcon,
  size,
  source,
  status,
  textColor,
  onPressBottomIcon,
  onPressLeftIcon,
  onPressRightIcon,
  ...other
}) {
  const [loadfailed, setLoadFailed] = useState(false)

  if (source.uri === '') {
    source.uri = null
  }

  return (
    <TouchableWithoutFeedback
      {...other}
    >
      <View
        style={[
          styles.statusContainer,
          styles[`avatar_status_${size}Size`],
          status && { backgroundColor: theme.colors.primary }
        ]}
      >
        <View
          style={[
            styles.statusBorderContainer,
            styles[`avatar_status_border_${size}Size`]
          ]}
        >
          <View
            style={[
              styles.avatar,
              styles[`avatar_${size}Size`],
              styles[`avatar_${color}`],
              styles[`avatar_${borderStyle}Border`]
            ]}
          >
            {(!source.uri || loadfailed) && <Text numberOfLines={1} color={textColor} size={size}>{getInitials(name)}</Text>}
            {source?.uri && <View style={styles.imageView}>
              <FastImage
                onError={() => setLoadFailed(true)}
                style={[
                  styles[`avatar_${size}Size`],
                  styles[`avatar_${borderStyle}Border`]
                ]}
                source={source}
              />
            </View>}
          </View>
        </View>
        {leftIcon && <View style={styles.leftIcon}>
          <TouchableWithoutFeedback onPress={onPressLeftIcon}>
            <View style={styles.iconWithBorder}>
              <Image
                style={styles.icon}
                source={leftIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>}
        {rightIcon && <View style={styles.rightIcon}>
          <TouchableWithoutFeedback onPress={onPressRightIcon}>
            <View style={styles.iconWithBorder}>
              <Image
                style={[
                  styles.icon,
                  size == 'xlarge' && { height: 40, width: 40 }
                ]}
                source={rightIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>}
        {bottomIcon && <View style={styles.bottomIcon}>
          <TouchableWithoutFeedback onPress={onPressBottomIcon}>
            <View style={styles.iconWithBorder}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={bottomIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>}
      </View>
    </TouchableWithoutFeedback>
  )
}

AvatarView.propTypes = {
  borderStyle: PropTypes.oneOf(['dashed', 'dotted', 'none', 'solid']),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(['normal', 'large', 'small', 'xlarge']),
  source: Image.propTypes.source,
  status: PropTypes.bool,
  textColor: PropTypes.oneOf(Object.keys(theme.colors)),
}

AvatarView.defaultProps = {
  borderStyle: null,
  color: 'primary',
  name: '',
  size: 'large',
  source: null,
  status: false,
  textColor: 'light'
}

export default AvatarView
