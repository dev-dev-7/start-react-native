import React, { useState, useRef, useEffect } from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.dark,
    flexDirection: 'row',
    paddingRight: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.lighter,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  textInput: {
    fontFamily: 'Almarai-Regular',
    fontSize: 14,
    color: theme.colors.light,
    padding: 5,
    marginLeft: 5
  },
  send: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function ChatInput({ ...other }) {
  const [value, setValue] = useState();
  const [height, setHeight] = useState(0);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener('keyboardWillShow', onKeyboardShow);
    keyboardDidHideListener.current = Keyboard.addListener('keyboardWillHide', onKeyboardHide);
    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  const onKeyboardShow = (event) => {
    setKeyboardOffset(event.endCoordinates.height - 140);
    setIsToggle(true)
  }

  const onKeyboardHide = () => {
    setKeyboardOffset(0);
    setIsToggle(false)
  }

  const onChange = (val) => {
    setValue(val);
  }

  const handleSend = (val) => {
    Alert.alert(val);
  }



  return (
    <View>
      <KeyboardAvoidingView style={{ bottom: keyboardOffset, flex: 1, width: keyboardOffset ? '100%' : '50%', backgroundColor: 'red' }}>
        <View style={[styles.container, { height: Math.min(150, Math.max(10, height - 15)) }]}>
          <View style={styles.inputWrapper}>
            <TextInput
              numberOfLines={5}
              value={value}
              style={styles.textInput}
              onChangeText={val => onChange(val)}
              placeholderTextColor={theme.colors.lighter}
              placeholder={'Comment...'}
              returnKeyType="default"
              multiline
              onContentSizeChange={event => {
                setHeight(event.nativeEvent.contentSize.height + 30)
              }
              }
              {...other}
            />
          </View>
          <TouchableWithoutFeedback onPress={() => { handleSend(value); }}>
            <View style={styles.send}>
              <Text style={{ color: theme.colors.primary }}>{"Send"}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
      {!isToggle&&<TouchableOpacity style={{ marginLeft: keyboardOffset ? 0 : 200, top: 5 }}>
        <View>
          <Text style={{ color: theme.colors.primary, fontFamily: 'Almarai-Bold', fontSize: 16 }}>{"Enter Giveway"}</Text>
        </View>
      </TouchableOpacity>}

    </View>


  );
}

export default ChatInput;
