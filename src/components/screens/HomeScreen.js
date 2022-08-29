import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import theme from '../../styles/theme';
import CategoryListElement from '../list/element/CategoryListElement';
import HeaderView from '../views/HeaderView';
import MainBanner from '../views/MainBanner';
import SectionView from '../views/SectionView';
import Logo from '../../assets/images/logo.png';
import BurgerMenu from '../../assets/icons/burger-menu.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark_light
  },
});

const HomeScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <HeaderView navigation={navigation} logo={Logo} burgerMenu={BurgerMenu}/>
        <MainBanner />
        <SectionView navigation={navigation} title={"More from Live"} seeMore={true} type={"live"}/>
        <CategoryListElement />
        <SectionView title={"Hot Auction"} seeMore={true} type={"hot"}/>
        <SectionView title={"Best Selling"} seeMore={true} type={"best"}/>
        <SectionView title={"Top Auctioneers"} seeMore={true} type={"auctioneers"}/>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default HomeScreen;
