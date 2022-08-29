import {connect} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as actionCreators from '../../store/actions';
import AvatarView from '../views/AvatarView';
import BlockWrapper from '../wrappers/BlockWrapper';
import Button from '../buttons/Button';
import ContentWrapper from '../wrappers/ContentWrapper';
import DateInput from '../inputs/DateInput';
import {getPhoto} from '../../services/nativeAccessService';
import ScreenWrapper from '../wrappers/ScreenWrapper';
import SettingsListView from '../list/container/SettingsListView';
import SwitchInput from '../inputs/SwitchInput';
import TextAreaInput from '../inputs/TextAreaInput';
import TextInput from '../inputs/TextInput';
import editIcon from '../../assets/icons/edit.png';

const ProfileEditScreen = ({
  navigation,
  profile: prevProfile,
  updateProfile,
}) => {
  const {username, fullname, email, mobile, gender, dob, icon, about} =
    prevProfile;
  const profile = {username, fullname, email, mobile, gender, dob, icon, about};
  const [data, setData] = useState(profile);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (key, value) => {
    setErrors({
      ...errors,
      [key]: '',
    });
    const tempData = {...data};
    tempData[key] = value;
    setData(tempData);
  };

  const onSubmit = () => {
    setLoading(true);
    updateProfile(data)
      .then(data => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        setLoading(false);
        err && setErrors(err);
      });
  };

  const handleSelectImage = async () => {
    const response = await getPhoto();

    if (response?.uri) {
      onChange('icon', response.uri);
    }
  };

  return (
    <ScreenWrapper background="neutral">
      <KeyboardAwareScrollView>
        <ContentWrapper align="center">
          <AvatarView
            size="xlarge"
            name={data.username}
            source={{uri: data.icon}}
            rightIcon={editIcon}
            onPressRightIcon={handleSelectImage}
          />
        </ContentWrapper>
        <SettingsListView showEmpty={false}>
          <BlockWrapper>
            <TextInput
              value={data.fullname}
              limit={25}
              label={'Full Name'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              onChangeText={val => onChange('fullname', val)}
              error={errors['fullname']}
            />
          </BlockWrapper>
          <BlockWrapper>
            <TextInput
              label={'Nick Name'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              value={data.username}
              onChangeText={val => onChange('username', val)}
              error={errors['username']}
            />
          </BlockWrapper>
          <BlockWrapper>
            <TextInput
              label={'Email'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              value={data.email}
              onChangeText={val => onChange('email', val)}
              error={errors['email']}
            />
          </BlockWrapper>
          <BlockWrapper>
            <TextInput
              label={'Mobile'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              value={data.mobile}
              onChangeText={val => onChange('mobile', val)}
              error={errors['mobile']}
            />
          </BlockWrapper>
        </SettingsListView>
        <SettingsListView>
          <BlockWrapper>
            <SwitchInput
              label={'Gender'}
              options={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
              ]}
              value={data.gender}
              initial={data.gender == 'male' ? 0 : 1}
              onChange={val => onChange('gender', val)}
            />
          </BlockWrapper>
          <BlockWrapper>
            <DateInput
              label={'Date of birth'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              value={new Date(data.dob)}
              onChangeText={val => onChange('dob', val)}
              error={errors['dob']}
            />
          </BlockWrapper>
        </SettingsListView>
        <SettingsListView>
          <BlockWrapper>
            {/* <TextAreaInput
              label={'About'}
              placeholderTextColor="grey_dark"
              textColor="dark"
              placeholder={"Hey, I am new here..."}
              value={data.about}
              onChangeText={(val) => onChange('about', val)}
            /> */}
          </BlockWrapper>
        </SettingsListView>
        <Button loading={loading} title="Save" onPress={onSubmit} />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

ProfileEditScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Profile Edit',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: data => dispatch(actionCreators.updateProfile(data)),
  };
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditScreen);
