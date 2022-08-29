import {connect} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ScreenWrapper from '../wrappers/ScreenWrapper';
import theme from '../../styles/theme';
import Text from '../typography/Text';

import TabMenuView from '../views/TabMenuView';
import SearchAreaView from '../views/SearchAreaView';
import CardListView from '../views/CardListView';
import LinearGradientWrapper from '../wrappers/LinearGradientWrapper';
import CardzCreditView from '../views/CardzCreditView';
import ContentWrapper from '../wrappers/ContentWrapper';
import Button from '../buttons/Button';

import ScanImage from '../../assets/images/Scan.png';
import TopUp from '../../assets/icons/top-up.png';
import Redeem from '../../assets/icons/redeem.png';
import Divider from '../../assets/icons/divider.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral,
    top: 100,
  },
  cashAmountText: {
    fontWeight: '700',
    fontSize: 36,
    fontFamily: 'Almarai-Bold',
    // lineHeight: 22,
    fontStyle: 'normal',
  },
  scanImage: {
    width: 20,
    height: 20,
    color: theme.colors.white,
  },
  hoverBar: {
    backgroundColor: theme.colors.primary_dark_button,
    width: 78,
    height: 2,
  },
  hoverBarContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
    maxHeight: 10,
    position: 'absolute',
    top: -10,
  },
});

const WalletScreen = ({}) => {
  const [searchKey, setSearchKey] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Gift Cards');

  useEffect(() => {}, [searchKey]);

  return (
    <ScreenWrapper background={theme.colors.grey_light}>
      <ContentWrapper align="center" justify="spaceBetween" flex={1}>
        <Text style={styles.cashAmountText}>{'500 AED'}</Text>
      </ContentWrapper>

      <ContentWrapper gutterX="none" flex={5}>
        <View style={styles.hoverBarContainer}>
          <View style={styles.hoverBar} />
        </View>

        <LinearGradientWrapper gutterX="narrow" rounded flex={1}>
          <TabMenuView
            tabs={['Gift Cards', 'Cardz Credit']}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />

          {selectedTab === 'Gift Cards' ? (
            <ContentWrapper gutterX="none" gutterY="none">
              {/* Search Input */}
              <SearchAreaView wrapperStyle={{backgroundColor: 'transparent'}} />

              <CardListView
                title="Gift Cards"
                horizontal
                imageContainerStyle={{
                  width: 144,
                  height: 126,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
                gridViewStyle={{height: 130}}
                wrapperStyle={{paddingLeft: 15}}
              />

              <CardListView
                title="eGift"
                horizontal
                imageContainerStyle={{
                  width: 200,
                  height: 126,
                  borderRadius: 16,
                  overflow: 'hidden',
                }}
                gridViewStyle={{height: 160}}
                wrapperStyle={{paddingLeft: 15}}
              />
            </ContentWrapper>
          ) : (
            <ContentWrapper gutterX="none" gutterY="none">
              <CardzCreditView amount={'200'} cardHolderName={'Shweta'} />
              <ContentWrapper
                direction="row"
                justify="spaceBetween"
                align="center">
                <Button
                  color="transparent"
                  iconSource={TopUp}
                  title="Top Up"
                  wrapperViewStyle={{marginTop: 0}}
                />
                {/* Divider */}
                <View
                  style={{
                    height: '30%',
                    borderColor: theme.colors.primary_dark,
                    borderWidth: 1,
                  }}
                />
                <Button
                  color="transparent"
                  iconSource={Redeem}
                  title="Redeem"
                  wrapperViewStyle={{marginTop: 0}}
                />
              </ContentWrapper>
            </ContentWrapper>
          )}
        </LinearGradientWrapper>
      </ContentWrapper>
    </ScreenWrapper>
  );
};

export default connect(null, null)(WalletScreen);
