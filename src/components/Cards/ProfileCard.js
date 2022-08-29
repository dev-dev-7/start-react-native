import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './style';
import person from '../../assets/images/person.png';
import edit from '../../assets/icons/edit.png';
import profileCardBackground from '../../assets/images/profileCardBackground.png';

const ProfileCard = ({user}) => {
  return (
    <View>
      <ImageBackground style={styles.container} source={profileCardBackground}>
        <Image source={person} />
        <View style={styles.detailsContainer3}>
          <Text style={styles.text}>{'Abdul'}</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.mobile}</Text>
        </View>
        <Image source={edit} />
      </ImageBackground>
    </View>
  );
};

export default ProfileCard;
