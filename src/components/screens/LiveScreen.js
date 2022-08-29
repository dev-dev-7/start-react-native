import React from 'react';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import HeaderView from '../views/HeaderView';
import ArrowLeftWhite from '../../assets/icons/arrowLeftWhite.png';
import BurgerMmenu from '../../assets/icons/burger-menu.png';
import LiveViewWrapperView from '../views/LiveViewWrapperView';

const LiveScreen = ({route, navigation}) => {
  const { auction } = route.params;
  return (
    <ScreenWrapper>
        <HeaderView navigation={navigation} leftIcon={ArrowLeftWhite} title={"Bid"} burgerMenu={BurgerMmenu} />
        <LiveViewWrapperView navigation={navigation} auction={auction}/>
    </ScreenWrapper>
  );
};
export default LiveScreen;
