import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.dark,
    padding: 10,
    height: 80,
    top: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:5
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight:5
  },
});

function HeaderView({ navigation, logo, leftIcon, title, burgerMenu }) {

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => !logo?handleGoBack():""} style={styles.leftContainer}>
        <View>
          {logo ?
            <Image
              source={logo}
              resizeMode="contain"
              style={{ width: 150, height: 150 }}
            /> : 
              <Image
                source={leftIcon}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            }
        </View>
        </TouchableWithoutFeedback>
        {title && <View style={styles.centerContainer}>
          <Text style={{ color: theme.colors.light, fontSize: 16, fontFamily: 'Almarai-Bold' }}>{title}</Text>
        </View>}
        <View style={styles.rightContainer}>
        {burgerMenu ? <Image
            source={burgerMenu}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          /> : ""}
        </View>
      </View>
    </View>
  );
}

export default HeaderView;
