import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import theme from '../../styles/theme';

const PaymentRadioButton = ({values, onChangePayment}) => {

  return (
    <View style={styleSheet.radioView}>
      <RadioButton.Group
        onValueChange={newValue => onChangePayment(newValue)}
        value={values}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="card" color={theme.colors.primary} uncheckedColor={theme.colors.primary}/>
          <Text style={styleSheet.textInput}>Debit / Credit Card</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="bank" color={theme.colors.primary} uncheckedColor={theme.colors.primary}/>
          <Text style={styleSheet.textInput}>Bank Transfer</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default PaymentRadioButton;

const styleSheet = StyleSheet.create({
  radioView: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.transparent,
    borderRadius: 12,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: 'Almarai-Regular',
    fontSize: 16,
    height: 25,
    padding: 0,
    color: theme.colors.light,
  },
});
