import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginView from '../views/LoginView';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import RegisterHeaderView from '../views/RegisterHeaderView';

const LoginScreen = ({ navigation }) => {

  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <RegisterHeaderView/>
        <LoginView navigation={navigation} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
