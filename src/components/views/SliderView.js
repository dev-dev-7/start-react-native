import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
const {width: windowWidth} = Dimensions.get('window');

const SliderView = ({loadSliders, sliders}) => {
  useEffect(() => {
    loadSliders();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {}}>
        <Image
          source={{uri: item.file}}
          resizeMode="stretch"
          style={styles.imageBackground}></Image>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      style={styles.carousel}
      data={sliders}
      initialIndex={1}
      renderItem={renderItem}
      itemWidth={windowWidth * 0.55}
      separatorWidth={0}
      containerWidth={windowWidth}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadSliders: () => dispatch(actionCreators.loadSliders()),
  };
};

const mapStateToProps = state => {
  return {
    sliders: state.home.sliders,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderView);

const styles = StyleSheet.create({
  carousel: {
    height: 300,
    marginVertical: 20,
  },
  item: {
    flex: 1,
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
  },
});
