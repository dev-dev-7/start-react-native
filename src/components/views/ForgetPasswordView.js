import React, {useEffect, useRef, useState} from 'react';
import {Linking, StyleSheet, Image, View} from 'react-native';
import Button from '../buttons/Button';
import ContentWrapper from '../wrappers/ContentWrapper';
import Text from '../typography/Text';
import MobileInput from '../inputs/MobileInput';
import themes from '../../styles/theme';
import {validateInput} from '../../services/inputValidation';

const styles = StyleSheet.create({
  headWrapper: {
    marginBottom: 50
  },
  textdiv: {
    fontFamily: 'Almarai-Bold',
    fontSize: 22,
    color: themes.colors.light,
    lineHeight: 30
  },
  textdiv2: {
    fontFamily: 'Almarai-Light',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 60,
    color: themes.colors.light,
    opacity: 0.7
  },
});

const ForgetPasswordView = ({errors, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [registerErrors, setRegisterErrors] = useState({});
  const [data, setData] = useState({
    mobile: '',
  });
  const onChange = (key, value) => {
    setRegisterErrors({
      ...registerErrors,
      [key]: validateInput(key, value),
    });
    const tempData = {...data};
    tempData[key] = value;
    setData(tempData);
  };

  const onSubmit = values => {
    navigation.navigate('OtpScreen', {
      data: data,
    });
  };
  return (
    <ContentWrapper gutterX="wide" gutterY="wide">
      
      <ContentWrapper gutterX="none">

      <View style={styles.headWrapper}>
      <Text style={styles.textdiv}>Forgot Password</Text>
        <Text style={[styles.textdiv2]}>
          If you've lost your password or wish to reset it, enter your Mobile
          number to get started.
        </Text>
        </View>
        
        <MobileInput
          value={data.mobile}
          onChangeNumber={val => onChange('mobile', val)}
          error={registerErrors['mobile']}
        />
      </ContentWrapper>

      <ContentWrapper gutterX="none" gutterY="wide">
        <Button
          loading={loading}
          title="Submit"
          onPress={() => onSubmit(data)}
        />
      </ContentWrapper>
    </ContentWrapper>
  );
};

export default ForgetPasswordView;


// const styles = StyleSheet.create({
//   textdiv: {
//     fontFamily: 'Almarai-Regular',
//     fontSize: 22,
//     color: themes.colors.primary_dark_txt,
//     paddingBottom: 10,
//   },
//   textdiv2: {
//     fontFamily: 'Almarai-Regular',
//     fontSize: 14,
//     color: themes.colors.primary,
//     lineHeight: 19.6,
//     paddingBottom: 10,
//   },
// });

// const ForgetPasswordView = ({errors, navigation}) => {
//   const [loading, setLoading] = useState(false);
//   const [registerErrors, setRegisterErrors] = useState({});
//   const [data, setData] = useState({
//     mobile: '',
//   });
//   const onChange = (key, value) => {
//     setRegisterErrors({
//       ...registerErrors,
//       [key]: validateInput(key, value),
//     });
//     const tempData = {...data};
//     tempData[key] = value;
//     setData(tempData);
//   };

//   const onSubmit = values => {
//     navigation.navigate('OtpScreen', {
//       data: data,
//     });
//   };
//   return (
//     <ContentWrapper gutterX="wide" gutterY="wide">
//       <Image
//         source={forgetIcon}
//         style={{
//           alignSelf: 'center',
//           height: 300,
//           width: 300,
//         }}
//         resizeMode="stretch"
//       />
//       <ContentWrapper gutterX="none">
//         <Text style={styles.textdiv}>Forgot Password?</Text>
//         <Text style={[styles.textdiv2]}>
//           If you've lost your password or wish to reset it, enter your Mobile
//           number to get started.
//         </Text>
//         <MobileInput
//           value={data.mobile}
//           onChangeNumber={val => onChange('mobile', val)}
//           error={registerErrors['mobile']}
//         />
//       </ContentWrapper>

//       <ContentWrapper gutterX="none" gutterY="wide">
//         <Button
//           loading={loading}
//           title="Submit"
//           onPress={() => onSubmit(data)}
//         />
//       </ContentWrapper>
//     </ContentWrapper>
//   );
// };

// export default ForgetPasswordView;
