import React from 'react';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import HeaderView from '../views/HeaderView';
import OtpView from '../views/OtpView';

const OtpScreen = ({route, navigation}) => {
  const data = route.params.data;
  return (
    <ScreenWrapper>
        <HeaderView searchBar={false} burgerMenu={false} />
        <OtpView data={data} navigation={navigation} />
    </ScreenWrapper>
  );
};

export default OtpScreen;
