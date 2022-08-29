import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
  },
  containerStyle: {
    paddingBottom: 10,
  },
  title: {
    color: theme.colors.gray,
    fontFamily: 'Almarai-Bold',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5
  },
});

function TitleWrapper({title, children}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerStyle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

export default TitleWrapper;
