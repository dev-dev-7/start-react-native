import React, { useRef, useState } from 'react';
import ContentWrapper from '../wrappers/ContentWrapper';
import TextInput from '../inputs/TextInput';
import Text from '../typography/Text';
import Button from '../buttons/Button';
import themes from '../../styles/theme';
import { StyleSheet, View } from 'react-native';
import { validateInput } from '../../services/inputValidation';
import AlreadyAccountView from '../views/AlreadyAccountView';
import { connect } from "react-redux";
import { login } from '../../slices/auth';
// import facebook from '../../assets/icons/facebook.png';
// import google from '../../assets/icons/google.png';

const styles = StyleSheet.create({
  headWrapper: {
    marginBottom: 50
  },
  textdiv: {
    fontFamily: 'Almarai-Light',
    fontSize: 14,
    color: themes.colors.light,
    lineHeight: 19.6
  },
  textdiv2: {
    fontFamily: 'Almarai-Bold',
    fontSize: 22,
    color: themes.colors.light
  },
  textdiv3: {
    fontFamily: 'Almarai-Light',
    fontSize: 14,
    color: themes.colors.light,
    marginTop: 10,
    opacity: 0.7
  },
  forgot_password: {
    fontFamily: 'Almarai-Light',
    fontSize: 14,
    color: themes.colors.light,
    lineHeight: 14,
    textAlign: "right"
  },
});

const LoginView = ({ navigation, login }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginErrors, setLoginErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onChange = (key, value) => {
    setLoginErrors({
      ...loginErrors,
      [key]: validateInput(key, value),
    });
    const tempData = { ...data };
    tempData[key] = value;
    setData(tempData);
  };

  const handleLogin = (values) => {
    setLoading(true);
    let errors = [];
    for (var i in values) {
      onChange(i, values[i]);
      if (validateInput(i, values[i])) {
        errors = { ...errors, [i]: validateInput(i, values[i]) };
      }
    }
    if (errors.length !== 0) {
      setLoginErrors(errors);
      setLoading(false);
      return false;
    }
    login(values)
      .then((res) => {
        setLoading(false);
        navigation.push('Home');
      })
      .catch((err) => {
        alert("err :"+err);
        setLoading(false);
      })
  };

  return (
    <ContentWrapper gutterX="wide" gutterY="wide" color="black">
      <ContentWrapper gutterX="none">
        <View style={styles.headWrapper}>
          <Text style={styles.textdiv}>Hi</Text>
          <Text style={styles.textdiv2}>Welcome</Text>
          <Text style={styles.textdiv3}>
            If you are already a member, Please Sign in.
          </Text>
        </View>
        <TextInput
          ref={emailRef}
          placeholder="Mobile/Email"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
          value={data.email}
          onChangeText={val => onChange('email', val)}
          error={loginErrors.email}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          value={data.password}
          onChangeText={val => onChange('password', val)}
          error={loginErrors.password}
        />
        <Text
          style={(styles.forgot_password)}
          onPress={() => navigation.push('ForgetPassword')}>
          {'Forget Password?'}
        </Text>
        <Button
          loading={loading}
          title="Login"
          onPress={() => handleLogin(data)}
        />
      </ContentWrapper>
      <AlreadyAccountView navigation={navigation} type="login"/>
      {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#614E67',
          }}
        />
        <View>
          <Text
            style={{
              width: 34,
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: 12,
            }}>
            or
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#614E67'}} />
      </View> */}
      {/* <Button
        loading={false}
        title="Sign Up with Facebook"
        iconPosition="left"
        iconSource={facebook}
        color="secondary"
        onPress={() => {}}
      />
      <Button
        loading={false}
        title="Sign Up with Google"
        iconPosition="left"
        iconSource={google}
        color="primary"
        variant="outline"
        onPress={() => {}}
      /> */}
    </ContentWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { login })(LoginView);
