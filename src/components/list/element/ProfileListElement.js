import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import Text from '../../typography/Text';
import theme from '../../../styles/theme';

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    flexDirection: 'row',
    height: 60,
    borderRadius: 10,
  },
  icon: {
    height: 25,
    width: 25,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
  },
  subTitleWrapper: {
    padding: 3,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  withBorder: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_dark,
  },
  rightIcon: {
    height: 15,
    width: 15,
  },
  centerView: {
    justifyContent: 'center',
  },
});

function ProfileListElement({
  center,
  color,
  subTitle,
  leftIcon,
  handlePress,
  rightIcon,
  title,
  withBorder,
  onClick,
  navigation,
}) {
  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return (
    <Touchable>
      <View style={[styles.row]}>
        {!!leftIcon && (
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={leftIcon} resizeMode="contain" />
          </View>
        )}
        <View
          style={[
            styles.titleContainer,
            withBorder && styles.withBorder,
            center && styles.centerView,
          ]}>
          <Text color={color} size="medium">
            {title}
          </Text>
          {!!subTitle && (
            <View style={styles.subTitleWrapper}>
              <Text color="grey_dark" size="large">
                {subTitle}
              </Text>
            </View>
          )}
        </View>
        {!!rightIcon && (
          <View style={styles.iconContainer}>
            <Image
              style={styles.rightIcon}
              source={rightIcon}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </Touchable>
  );
}

ProfileListElement.propTypes = {};

export default ProfileListElement;
