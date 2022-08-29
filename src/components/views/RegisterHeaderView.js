import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Text from '../typography/Text';
import arrowLeftWhite from '../../assets/icons/arrowLeftWhite.png';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.dark,
    padding: 10,
    height: 80
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginEnd: 15,
  },
});

function RegisterHeaderView({title, navigation}) {

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>
          <TouchableHighlight onPress={() => handleGoBack()}>
            <Image
              source={arrowLeftWhite}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableHighlight>
          <View style={styles.titleContainer}>
            <Text color="light">{title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RegisterHeaderView;