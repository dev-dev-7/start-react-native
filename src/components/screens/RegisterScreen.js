import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterView from '../views/RegisterView';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import RegisterHeaderView from '../views/RegisterHeaderView';
import RegisterStepsElement from '../list/element/RegisterStepsElement';
import RegisterButton from '../buttons/RegisterButton';
import AlreadyAccountView from '../views/AlreadyAccountView';

const RegisterScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <RegisterHeaderView title = "Create Profile" navigation={navigation}/>
        <RegisterStepsElement step={1}/>
        <RegisterView navigation={navigation} />
        <RegisterButton step={1}/>
        <AlreadyAccountView navigation={navigation} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default RegisterScreen;
