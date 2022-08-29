import PropTypes from 'prop-types'
import React from 'react'
import { Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

import Text from '../../typography/Text'
import theme from '../../../styles/theme'

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    height: 60
  },
  icon: {
    height: 40,
    width: 40
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between'
  },
  badgeWrapper: {
    padding: 3,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.primary
  },
  iconContainer: {
    paddingHorizontal: 10
  },
  withBorder: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_light,
  },
  rightIcon: {
    height: 20,
    width: 20
  }
})

function SettingsListElement({ badgeCount, center, color = 'accent', leftIcon, handlePress, rightIcon, title, withBorder }) {
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  return (
    <Touchable onPress={handlePress}>
      <View style={[styles.row]}>
        {
          !!leftIcon && (
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={leftIcon} resizeMode="contain" />
            </View>
          )
        }
        <View style={[
          styles.titleContainer,
          withBorder && styles.withBorder,
          center && { justifyContent: 'center' }
        ]}>
          <Text size="xlarge" color={color}>{title}</Text>
          {!!badgeCount && badgeCount !== '0' && <View style={styles.badgeWrapper}>
            <Text color="light" size="small">{badgeCount}</Text>
          </View>}
        </View>
        {
          !!rightIcon && (
            <View style={styles.iconContainer}>
              <Image style={styles.rightIcon} source={rightIcon} resizeMode="contain" />
            </View>
          )
        }
      </View>
    </Touchable>
  )
}

SettingsListElement.propTypes = {
}

export default SettingsListElement
