import {connect} from 'react-redux';
import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ForgetPasswordView from '../views/ForgetPasswordView';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import HeaderView from '../views/HeaderView';
const styles = StyleSheet.create({
  logo: {
    flexGrow: 1,
    height: 150,
    width: 200,
  },
});

const ForgetPasswordScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <HeaderView
          searchBar={false}
          burgerMenu={false}
          navigation={navigation}
        />
        <ForgetPasswordView navigation={navigation} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default ForgetPasswordScreen;

// const ForgetPasswordScreen = ({navigation}) => {
//   const [registerErrors, setRegisterErrors] = useState({});
//   const [loginErrors, setLoginErrors] = useState({});

//   // const handleRegister = values => {
//   //   setLoading(true);
//   //   registerUser(values)
//   //     .then(data => {
//   //       setLoading(false);
//   //       navigation.navigate('AppNavigator');
//   //     })
//   //     .catch(err => {
//   //       setLoading(false);
//   //       err && setRegisterErrors(err);
//   //     });
//   // };

//   return (
//     <ScreenWrapper>
//       <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
//         <HeaderView searchBar={false} burgerMenu={false} />
//         <ForgetPasswordView
//           errors={loginErrors}
//           // onSubmit={values => handleRegister(values)}
//           navigation={navigation}
//         />
//       </KeyboardAwareScrollView>
//     </ScreenWrapper>
//   );
// };

// export default connect(null, null)(ForgetPasswordScreen);
