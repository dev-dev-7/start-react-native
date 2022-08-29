import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: theme.colors.dark_light,
    width: '100%',
    height: 400,
    padding:10,
  },
  image: {
    height: '100%',
    width: '100%',
    bottom: 15,
    borderRadius:10
  },
  heading: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top:180
  }
});

function MainBanner() {

  return (
    <View style={styles.wrapper}>
        <View style={styles.heading}>
            <Text
              style={{
                color: theme.colors.light,
                fontSize: 24,
                fontFamily:'Almarai-Bold'
              }}>
              {'100% Online Auto Actions'}
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/ishro/uploads/62f211531a3ee.png',
            }}
            style={styles.image}
          />
    </View>
  );
}

export default MainBanner;