import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import theme from '../../styles/theme';

const MobileInput = ({placeholder, value, onChangeNumber, error}) => {
  const phoneInput = useRef(null);
  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="AE"
        layout="first"
        withDarkTheme = {true }
        placeholder={placeholder}
        // autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={styleSheet.phoneNumbertxt}
        flagButtonStyle={{opacity: 1}}
        codeTextStyle={{color: theme.colors.light, fontSize: 14}}
        countryPickerButtonStyle={{opacity: 1}}
        textInputStyle={{color: theme.colors.light, fontSize: 14}}
        onChangeFormattedText={text => {
          onChangeNumber(text);
        }}
      />
      {error ? (
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            bottom: 15,
          }}>
          <Text style={{color: theme.colors.light, fontSize: 10}}>
            {error}
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default MobileInput;

const styleSheet = StyleSheet.create({
  phoneNumberView: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.dark_light,
    borderRadius: 12,
    marginBottom: 20,
  },
  phoneNumbertxt: {
    backgroundColor: theme.colors.dark_light,
    borderRadius: 12,
    fontSize: 14,
    paddingVertical: 0,
  },
});
