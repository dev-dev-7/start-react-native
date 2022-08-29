import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../styles/theme';
import SearchIcon from '../../assets/icons/search.png';
import CloseIcon from '../../assets/icons/close.png';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    backgroundColor: theme.colors.neutral,
    // top: 5,
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 7,
    left: 5,
  },
  icon: {
    height: 15,
    marginLeft: 5,
    width: 15,
  },
  input: {
    color: theme.colors.dark,
    flex: 1,
    height: 30,
    padding: 0,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    marginLeft: 15,
  },
  closeIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.colors.neutral,
  },
});

function SearchAreaView({wrapperStyle}) {
  const [inputValue, setInputValue] = useState('');

  const Search = val => {
    setInputValue(val);
  };
  // const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={styles.inputContainer}>
        <Image source={SearchIcon} resizeMode="contain" style={styles.icon} />
        <TextInput
          // autoFocus
          placeholder="Search"
          placeholderTextColor={theme.colors.primary_light}
          style={styles.input}
          value={inputValue}
          onChangeText={val => Search(val)}
        />
        {!!inputValue && (
          <TouchableWithoutFeedback onPress={() => setInputValue('')}>
            <Image
              source={CloseIcon}
              resizeMode="contain"
              style={styles.closeIcon}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      {/* <Text
          size="large"
          color="primary_dark"
          onPress={() => navigation.goBack()}>
          Cancel
        </Text> */}
    </View>
  );
}

export default SearchAreaView;
