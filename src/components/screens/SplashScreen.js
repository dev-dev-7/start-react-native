import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import themes from '../../styles/theme';
import Logo from '../../assets/images/logo.png';
import { useIsFocused } from '@react-navigation/native';
import { retrieveData } from '../../services/asyncStorage';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: themes.colors.black,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
});

const SplashScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    retrieveData('access_token')
      .then(token => token)
      .then(token => {
        if (token) {
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
        } else {
          setTimeout(() => {
            navigation.navigate('Login');
          }, 2000);
        }
      })
      .catch(err => {
        alert("err :" + err)
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000);
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={Logo} style={styles.logo} />
    </View>
  );
};
export default SplashScreen;
