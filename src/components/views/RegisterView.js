import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ContentWrapper from '../wrappers/ContentWrapper';
import TextInput from '../inputs/TextInput';
import Text from '../typography/Text';
import MobileInput from '../inputs/MobileInput';
import {validateInput} from '../../services/inputValidation';
import CountryInput from '../inputs/CountryInput';
import PaymentRadioButton from '../buttons/PaymentRadioButton';
import MonthInput from '../inputs/MonthInput';
import DropDownInput from '../inputs/DropDownInput';
import AddCard from '../Cards/AddCard';

const RegisterView = ({navigation, step}) => {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const areaRef = useRef(null);
  const streetRef = useRef(null);
  const apartmentRef = useRef(null);
  const cityRef = useRef(null);
  //card details
  const cardNumberRef = useRef(null);
  const cvvRef = useRef(null);
  const cardNameRef = useRef(null);

  //bank details
  const accountNameRef = useRef(null);
  const bankNameRef = useRef(null);
  const accountNumberRef = useRef(null);
  const ibanNoRef = useRef(null);
  const swiftCodeRef = useRef(null);
  const licensenumberRef = useRef(null);
  const licensesourceRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [registerErrors, setRegisterErrors] = useState({});

  const [data, setData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    area: '',
    street: '',
    apartment: '',
    city: '',
    country: 'AE',
    paymentType: 'card',
    //card details
    cardNumber: '',
    cvv: '',
    cardName: '',
    expiry: '',
    //bank details
    accountName: '',
    bankName: '',
    accountNumber: '',
    ibanNo: '',
    swiftCode: '',
    eIdFront: '',
    eIdBack: '',
    licenseNumber: '',
    licenceSource: null,
  });

  useEffect(() => {}, []);

  const onChange = (key, value) => {
    if (key == 'cardNumber' || key == 'cvv') {
      const re = /^[0-9\b]+$/;
      if (!re.test(value) && value != '') {
        return;
      }
    }
    setRegisterErrors({
      ...registerErrors,
      [key]: validateInput(key, value),
    });
    const tempData = {...data};
    tempData[key] = value;
    setData(tempData);
    alert(JSON.stringify(tempData));
  };

  const handleRegister = values => {
    setLoading(true);
    let errors = [];
    for (var i in values) {
      onChange(i, values[i]);
      if (validateInput(i, values[i])) {
        errors = {...errors, [i]: validateInput(i, values[i])};
      }
    }
    if (errors.length != 0) {
      setRegisterErrors(errors);
      setLoading(false);
      return false;
    }
    setTimeout(function () {
      // registerUser(values)
      //   .then(data => {
      //     setTimeout(() => {
      //       navigation.navigate('OtpScreen', {
      //         data: data,
      //       });
      //     }, 1000);
      //   })
      //   .catch(err => {
      //     setLoading(false);
      //     err &&
      //       setRegisterErrors({
      //         ...registerErrors,
      //         [err[0]?.param]: err[0]?.msg,
      //       });
      //   });
    }, 500);
  };

  return (
    <ContentWrapper gutterX="wide" gutterY="wide">
      <ContentWrapper gutterX="none">
        <TextInput
          ref={fullnameRef}
          placeholder="Full Name"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            fullnameRef.current.focus();
          }}
          value={data.fullname}
          onChangeText={val => onChange('fullname', val)}
          error={registerErrors['fullname']}
        />
        <TextInput
          ref={emailRef}
          placeholder="Email"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
          value={data.email}
          onChangeText={val => onChange('email', val)}
          error={registerErrors['email']}
        />
        <MobileInput
          value={data.mobile}
          placeholder="Phone Number"
          onChangeNumber={val => onChange('mobile', val)}
          error={registerErrors['mobile']}
        />
        <TextInput
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          value={data.password}
          onChangeText={val => onChange('password', val)}
          error={registerErrors['password']}
        />
        <TextInput
          ref={areaRef}
          placeholder="Area"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            areaRef.current.focus();
          }}
          value={data.area}
          onChangeText={val => onChange('area', val)}
          error={registerErrors['area']}
        />
        <TextInput
          ref={streetRef}
          placeholder="Street address"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            streetRef.current.focus();
          }}
          value={data.street}
          onChangeText={val => onChange('street', val)}
          error={registerErrors['street']}
        />
        <TextInput
          ref={apartmentRef}
          placeholder="Apartment, suite"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            apartmentRef.current.focus();
          }}
          value={data.apartment}
          onChangeText={val => onChange('apartment', val)}
          error={registerErrors['apartment']}
        />
        <TextInput
          ref={cityRef}
          placeholder="City"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            cityRef.current.focus();
          }}
          value={data.city}
          onChangeText={val => onChange('city', val)}
          error={registerErrors['city']}
        />
        <CountryInput
          value={data.country}
          onChangeCountry={val => onChange('country', val)}
        />
        <PaymentRadioButton
          values={data.paymentType}
          onChangePayment={val => onChange('paymentType', val)}
        />
        <TextInput
          ref={cardNumberRef}
          keyboardType="numeric"
          maxLength={16}
          placeholder="Card Number"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            cardNumberRef.current.focus();
          }}
          value={data.cardNumber}
          onChangeText={val => onChange('cardNumber', val)}
          error={registerErrors['cardNumber']}
        />
        <TextInput
          onSubmitEditing={() => {
            cardNameRef.current.focus();
          }}
          ref={cardNameRef}
          value={data.cardName}
          onChangeText={val => onChange('cardName', val)}
          placeholder="Name on Card"
        />
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <MonthInput
              style={{flex: 1, flexWrap: 'wrap'}}
              placeholder="Expiry Date"
              value={new Date(data.expiry)}
              onChangeDate={val => onChange('expiry', val)}
            />
          </View>
          <View style={{flex: 0.8, marginLeft: 6}}>
            <TextInput
              onSubmitEditing={() => {
                cvvRef.current.focus();
              }}
              ref={cvvRef}
              value={data.cvv}
              secureTextEntry
              onChangeText={val => onChange('cvv', val)}
              placeholder="CVV/CVC"
              maxLength={4}
            />
          </View>
        </View>
        <TextInput
          ref={accountNameRef}
          placeholder="Account Name"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            accountNameRef.current.focus();
          }}
          value={data.accountName}
          onChangeText={val => onChange('accountName', val)}
          error={registerErrors['accountName']}
        />
        <TextInput
          ref={bankNameRef}
          placeholder="Bank Name"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            bankNameRef.current.focus();
          }}
          value={data.bankName}
          onChangeText={val => onChange('bankName', val)}
          error={registerErrors['bankName']}
        />
        <TextInput
          ref={accountNumberRef}
          placeholder="Account number"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            accountNumberRef.current.focus();
          }}
          value={data.accountNumber}
          onChangeText={val => onChange('accountNumber', val)}
          error={registerErrors['accountNumber']}
        />
        <TextInput
          ref={ibanNoRef}
          placeholder="Iban No"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            ibanNoRef.current.focus();
          }}
          value={data.ibanNo}
          onChangeText={val => onChange('ibanNo', val)}
          error={registerErrors['ibanNo']}
        />
        <TextInput
          ref={swiftCodeRef}
          placeholder="Swift Code"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            swiftCodeRef.current.focus();
          }}
          value={data.swiftCode}
          onChangeText={val => onChange('swiftCode', val)}
          error={registerErrors['swiftCode']}
        />
        <Text weight={'medium'} flex={1} size={'large'} color={'lighter'}>
          Add Emirates ID
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <AddCard
            title="Front"
            value={data.eIdFront}
            onChangeId={val => onChange('eIDFront', val)}
          />
          <AddCard
            title="Back"
            value={data.eIdBack}
            onChangeId={val => onChange('eIDBack', val)}
          />
        </View>

        <Text
          weight={'medium'}
          flex={1}
          size={'large'}
          color={'lighter'}
          style={{marginBottom: 10}}>
          Add License
        </Text>

        <TextInput
          ref={licensenumberRef}
          placeholder="License Number"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            licensenumberRef.current.focus();
          }}
          value={data.licenseNumber}
          onChangeText={val => onChange('licensenumber', val)}
          error={registerErrors['licensenumber']}
        />
        <DropDownInput
          value={data.licenceSource}
          placeholder="License Source"
          onChangeInputs={val => onChange('licensesource', val)}
        />
      </ContentWrapper>
    </ContentWrapper>
  );
};

export default RegisterView;
