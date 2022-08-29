import React, {useRef, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import Button from '../buttons/Button';
import ContentWrapper from '../wrappers/ContentWrapper';
import Text from '../typography/Text';
import theme from '../../styles/theme';
import otpIcon from '../../assets/icons/otpIcon.png';

const styles = StyleSheet.create({
  textdiv: {
    fontFamily: 'Almarai-Regular',
    fontSize: 22,
    color: theme.colors.primary_dark_txt,
    paddingBottom: 10,
  },
  textdiv2: {
    fontFamily: 'Almarai-Regular',
    fontSize: 14,
    color: theme.colors.primary,
    lineHeight: 19.6,
    paddingBottom: 10,
  },
  textInputContainer: {},
  TextInput: {
    color: theme.colors.primary,
    borderRadius: 12,
    borderWidth: 3,
    backgroundColor: '#F3F3F3',
  },
});

const OtpView = ({navigation}) => {
  const otpRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = () => {
    if (data.token) {
      setLoading(true);
      let body = {
        token: data.token,
        mobile: data.data.mobile,
        code: otp,
      };
      // verifyOtp(body)
      //   .then(data => {
      //     setLoading(false);
      //     setTimeout(() => {
      //       navigation.navigate('HomeScreen');
      //     }, 1000);
      //   })
      //   .catch(err => {
      //     alert(err);
      //     setLoading(false);
      //   });
    }
  };

  return (
    <ContentWrapper gutterX="wide" gutterY="wide">
      <Image
        source={otpIcon}
        style={{
          alignSelf: 'center',
          height: 300,
          width: 300,
        }}
        resizeMode="stretch"
      />
      <ContentWrapper gutterX="none">
        <Text style={styles.textdiv}>Verify Otp</Text>
        <Text style={[styles.textdiv2]}>
          Please enter One-Time Password to verify your account, A One-time
          password has been sent to {data.mobile}
        </Text>
        {/* <OTPTextView
          ref={otpRef}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.TextInput}
          handleTextChange={text => setOtp(text)}
          tintColor={'#F3F3F3'}
          offTintColor={'#F3F3F3'}
          inputCount={6}
          keyboardType="numeric"
        /> */}
      </ContentWrapper>
      <ContentWrapper gutterX="none" gutterY="wide">
        <Button
          loading={loading}
          title="Verify Otp"
          onPress={() => handleVerifyOtp()}
        />
      </ContentWrapper>
    </ContentWrapper>
  );
};


export default OtpView;
