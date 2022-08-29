import PropTypes from 'prop-types'
import React from 'react'
import { Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

import Text from '../typography/Text'
import theme from '../../styles/theme'
import AvatarView from '../views/AvatarView'

import rightArrowIcon from '../../assets/icons/right_arrow.png'

const styles = StyleSheet.create({
  row: {
    backgroundColor: theme.colors.light,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_light,
    flexDirection: 'row',
    height: 120,
    alignItems: "center",
    padding: 16
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  icon: {
    height: 20,
    width: 20
  },
})

function ProfileView({ uri, handlePress, name, status, email, userName }) {
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  return (
    <Touchable onPress={handlePress}>
      <View style={[styles.row]}>
        <AvatarView
          status={status}
          size="large"
          name={name}
          source={{ uri }}
          onPress={handlePress}
        />
        <View style={styles.wrapper}>
          <Text color="dark" size="xlarge" weight="semibold">{name}</Text>
          <Text>{email}</Text>
          <Text>{userName}</Text>
        </View>
        <Image source={rightArrowIcon} style={styles.icon} />
      </View>
    </Touchable>
  )
}

ProfileView.propTypes = {
}

export default ProfileView
