import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import theme from '../../styles/theme';

const CountryInput = ({value, onChangeCountry, error}) => {
  const onSelect = country => {
    onChangeCountry(country.cca2);
  };

  return (
    <View>
      <CountryPicker
        {...{
          onSelect,
        }}
        countryCode={value}
        theme={DARK_THEME}
        withFilter={true}
        withFlag={true}
        withCountryNameButton={true}
        withAlphaFilter={true}
        withCallingCode={false}
        withEmoji={true}
        containerButtonStyle={styleSheet.countryView}
        visible={false}
      />
      {error ? (
        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            bottom: 15,
          }}>
          <Text style={{color: theme.colors.light, fontSize: 10}}>{error}</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default CountryInput;

const styleSheet = StyleSheet.create({
  countryView: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.dark_light,
    borderRadius: 12,
    marginBottom: 20,
    fontSize: 14,
    paddingStart: 12,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
