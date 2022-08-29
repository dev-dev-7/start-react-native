import React, {useState, useEffect} from 'react';
import {StyleSheet, View, LogBox} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../../styles/theme';

const DropDownInput = ({placeholder, onChangeInputs}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    {label: 'Dubai', value: 'DXB'},
    {label: 'Abudhabi', value: 'AUH'},
    {label: 'Sharjah', value: 'SHJ'},
    {label: 'Ajman', value: 'AJM'},
    {label: 'Umm Al-Quwain', value: 'UAQ'},
    {label: 'Fujairah', value: 'FUJ'},
    {label: 'Ras Al Khaimah', value: 'RAK'},
    {label: 'Others', value: 'Others'},
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.dropdownPicker}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={value => {
          onChangeInputs(value);
        }}
        placeholder={placeholder}
        theme="DARK"
        maxHeight={400}
        containerStyle={styles.dropdown}
        dropDownContainerStyle={styles.dropdown}
        multiple={false}
      />
    </View>
  );
};

export default DropDownInput;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    backgroundColor: theme.colors.dark_light,
    borderWidth: 0,
  },
  dropdownPicker: {
    backgroundColor: theme.colors.dark_light,
    borderRadius: 12,
    paddingStart: 12,
  },
  dropdown: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: theme.colors.dark_light,
  },
});
