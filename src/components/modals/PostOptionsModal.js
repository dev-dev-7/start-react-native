import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'

import BaseModal from './BaseModal'
import ContentWrapper from '../wrappers/ContentWrapper'
import SettingsListElement from '../list/element/SettingsListElement'
import theme from '../../styles/theme'

function PostOptionsModal({
  id,
  dismissModal,
  reportPost,
  hidePost,
  deletePost,
  isSameUserCreated,
  navigation,
  ...other
}) {
  const [loading, setLoading] = useState(false)

  const handleReportPost = () => {
    setLoading(true)

    reportPost(id)
      .then(_ => {
        alert('Sucessfully Reported')
        setLoading(false)
        dismissModal()
      })
      .catch(_ => {
        alert('Something went wrong')
        setLoading(false)
      })
  }
  return (
    <BaseModal dismissModal={dismissModal} {...other}>
      <ContentWrapper gutterY="none">
        {loading
          ? <View style={{ height: 60, justifyContent: 'center' }}>
            <ActivityIndicator color={theme.colors.primary} />
          </View>
          : <SettingsListElement
            withBorder
            center
            handlePress={handleReportPost}
            title={"Report"}
          />}
        <SettingsListElement
          color={isSameUserCreated ? "negative" : "grey_dark"}
          center
          withBorder
          handlePress={() => {
            dismissModal()
            navigation.goBack()
            isSameUserCreated ? deletePost(id) : hidePost(id)
          }}
          title={isSameUserCreated ? "Delete" : 'Ignore'}
        />
      </ContentWrapper>

    </BaseModal>
  )
}

export default PostOptionsModal
