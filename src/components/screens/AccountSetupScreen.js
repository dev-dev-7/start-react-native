import { connect } from 'react-redux'
import React, { useState } from 'react'
import BlockWrapper from '../wrappers/BlockWrapper'
import ScreenWrapper from '../wrappers/ScreenWrapper'
import ProfileListElement from '../list/element/ProfileListElement'

import * as actionCreators from '../../store/actions'
import rightArrowIcon from '../../assets/icons/right_arrow.png'

const visibility = ['All', 'Male', 'Female']
const radio = ['No', 'Yes']


const AccountSetupScreen = ({ clearUser, navigation, profile, updateProfile }) => {
  const [value, setValue] = useState()
  const { showme, showmobile, showdistance } = profile
  //console.warn('profile', { showme, showmobile, showdistance })

  return (
    <ScreenWrapper background="neutral">
      <BlockWrapper>
        <ProfileListElement
          title={'Show Me'}
          subTitle={visibility[showme]}
          rightIcon={rightArrowIcon}
          handlePress={() => navigation.navigate('SelectOptionScreen', {
            data: visibility,
            value: visibility[showme],
            onChange: (item) => updateProfile({ showme: item }),
            title: 'Show Me'
          })}
        />
      </BlockWrapper>
      <BlockWrapper>
        <ProfileListElement
          title={'Show Mobile'}
          subTitle={radio[showmobile]}
          rightIcon={rightArrowIcon}
          handlePress={() => navigation.navigate('SelectOptionScreen', {
            data: radio,
            value: radio[showmobile],
            onChange: (item) => updateProfile({ showmobile: item }),
            title: 'Show Mobile'
          })}
        />
      </BlockWrapper>
      <BlockWrapper>
        <ProfileListElement
          title={'Show Distance'}
          subTitle={radio[showdistance]}
          rightIcon={rightArrowIcon}
          handlePress={() => navigation.navigate('SelectOptionScreen', {
            data: radio,
            value: radio[showdistance],
            onChange: (item) => updateProfile({ showdistance: item }),
            title: 'Show Distance'
          })}
        />
      </BlockWrapper>
      <BlockWrapper>
        <ProfileListElement
          center
          color="negative"
          title={'Logout'}
          handlePress={() => {
            clearUser()
            navigation.navigate('SplashScreen')
          }}
        />
      </BlockWrapper>
    </ScreenWrapper>
  )
}

AccountSetupScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Account Setup'
})

const mapDispatchToProps = dispatch => {
  return {
    clearUser: () => dispatch(actionCreators.clearUser()),
    updateProfile: (data) => dispatch(actionCreators.updateProfile(data))
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetupScreen)
