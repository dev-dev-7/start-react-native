import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Text from '../typography/Text';
import arrowLeftWhite from '../../assets/icons/arrowLeftWhite.png';
import theme from '../../styles/theme';
import Button from './Button';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.dark,
    padding: 10,
    height: 60
  },
  leftContainer: {
    width:'50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft:5
  },
  rightContainer: {
    width:'40%',
    justifyContent: 'flex-end',
    paddingRight:0
  },
});

function RegisterButton() {

  const handleGoBack = () => {};

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftContainer}>
        <TouchableHighlight onPress={() => handleGoBack()}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={arrowLeftWhite}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
            <Text style={{marginLeft:10, color: 'white'}}>{'Back'}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.rightContainer}>
        <Button title={"Next"} size="normal" textTransform='capitalize'/>
      </View>
    </View>
  );
}

export default RegisterButton;
