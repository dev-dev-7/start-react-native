import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../typography/Text'
import theme from '../../styles/theme';
import ItemsListElement from '../list/element/ItemsListElement';
import more from '../../assets/icons/see-all.png';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.wrapper,
    padding: 10,
    height: 60
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  title: {
    color: theme.colors.light,
    fontFamily: 'Almarai-Bold',
    fontSize: 18
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 10
  },
  more: {
    color: theme.colors.light,
    fontFamily: 'Almarai-Light',
    fontSize: 16,
    marginRight: 5
  },
});

function SectionView({ navigation, title, seeMore, type }) {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {seeMore && <View style={styles.rightContainer}>
          <Text style={styles.more}>{"see all"}</Text>
          <Image source={more} style={{ width: 15, height: 10 }} />
        </View>}
      </View>
      <ItemsListElement navigation={navigation} type={type} />
    </View>
  );
}
export default SectionView;
