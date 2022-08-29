import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../typography/Text';


const styles = StyleSheet.create({
  row: {
    flex:1
  },
  wrapper: {
    padding: 5,
    flexDirection: 'row'
  },
  column: {
    alignItems: 'center',
    width: '25%',
    padding:5
  }
});

function RegisterStepsElement({ step }) {
  return (
    <View style={styles.row}>
      <View style={styles.wrapper}>
        <View style={[styles.column, {opacity:step >= 1?1:0.4}]}>
          <Text size="normal" color="white">{"Step"}<Text size="normal" color="primary">{" 1"}</Text></Text>
        </View>
        <View style={[styles.column, {opacity:step >= 2?1:0.4}]}>
          <Text size="normal" color="white">{"Step"}<Text size="normal" color="primary">{" 2"}</Text></Text> 
        </View>
        <View style={[styles.column, {opacity:step >= 3?1:0.4}]}>
          <Text size="normal" color="white">{"Step"}<Text size="normal" color="primary">{" 3"}</Text></Text> 
        </View>
        <View style={[styles.column, {opacity:step >= 4?1:0.4}]}>
          <Text size="normal" color="white">{"Step"}<Text size="normal" color="primary">{" 4"}</Text></Text> 
        </View>
      </View>
    </View>
  );
}

export default RegisterStepsElement;
