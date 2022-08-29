import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../../styles/theme';

const DoubleButton = ({ loadingLeft, loadingRight, titleLeft, titleRight, actionLeft , actionRight}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.btnLeft} onPress={actionLeft}>
        {loadingLeft ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : <View>
          <Text style={styles.text}>{titleLeft}</Text>
        </View>}
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRight} onPress={actionRight}>
        {loadingRight ? (
          <ActivityIndicator color={theme.colors.light} />
        ) : <View>
          <Text style={styles.text}>{titleRight}</Text>
        </View>}
      </TouchableOpacity>
    </View>
  );
};

export default DoubleButton;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnLeft: {
    backgroundColor: theme.colors.dark_light,
    borderRadius: 10,
    marginRight: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: '45%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnRight: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginLeft: 15,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: '48%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.light,
    fontFamily: 'Almarai-Bold',
    fontWeight: '600',
    fontSize: 16
  }
});
