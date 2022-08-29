import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderView from '../views/HeaderView';
import ItemFormView from '../views/ItemFormView';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import RegisterButton from '../buttons/RegisterButton';
import ArrowLeftWhite from '../../assets/icons/arrowLeftWhite.png';

const CreateAuctionScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <HeaderView navigation={navigation} leftIcon={ArrowLeftWhite} />
        <ItemFormView navigation={navigation} />
        {/* <RegisterButton step={1}/> */}
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default CreateAuctionScreen;