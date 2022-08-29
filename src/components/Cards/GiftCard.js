import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import styles from './style';
import closebtn from '../../assets/icons/closebtn.png';
import giftCard from '../../assets/images/giftCard.png';
import Text from '../typography/Text';
export default function GiftCard({cardimg, price, subtitle, title}) {
  return (
    <View>
      <ImageBackground source={giftCard} style={styles.container1}>
        <View style={styles.topLeft}>
          <Image
            source={{
              uri: cardimg,
            }}
            style={{width: 52, height: 52}}
          />
          <View style={styles.detailsContainer}>
            <Text size={'xnormal'} color={'white'}>
              {title}
            </Text>
            <Text weight={'medium'} size={'xnormal'} color={'white'}>
              {subtitle}{' '}
            </Text>
          </View>
          <View style={styles.detailsContainer2}>
            <Text size={'xnormal'} color={'white'}>
              {'Total'}
            </Text>
            <Text weight={'medium'} size={'xnormal'} color={'white'}>
              {'AED' + price}
            </Text>
          </View>
          <Image source={closebtn} style={{width: 10, height: 10}} />
        </View>
      </ImageBackground>
    </View>
  );
}
