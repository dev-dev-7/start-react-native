import React from 'react';
import {View} from 'react-native';
import Text from '../typography/Text';
import themes from '../../styles/theme';

function AlreadyAccountView({navigation, type}){
    return(
        <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop:15
        }}>
          <Text
          style={{
            fontSize: 14,
            marginStart: 5,
            color: themes.colors.light
          }}>
          {type == "login"?"Don't have an account?":"Already have an account?"}
        </Text>
        <Text
          onPress={() => navigation.push(type == "login"? 'Register' : 'Login')}
          style={{
            fontSize: 14,
            color: themes.colors.primary,
            marginLeft: 5,
          }}>
          {type == "login"?"Sign up":"Login"}
        </Text>
      </View>
    );
}

export default AlreadyAccountView;