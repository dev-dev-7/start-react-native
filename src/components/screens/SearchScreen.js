import _ from 'lodash'
import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, SectionList, TextInput, TouchableWithoutFeedback, View, SafeAreaView } from 'react-native'

import * as actionCreators from '../../store/actions'
import ContentWrapper from '../wrappers/ContentWrapper'
import ScreenWrapper from '../wrappers/ScreenWrapper'
import Text from '../typography/Text'
import theme from '../../styles/theme'

import searchIcon from '../../assets/icons/search.png'
import closeIcon from '../../assets/icons/close.png'
import AvatarListElement from '../list/element/AvatarListElement'
import PostListElement from '../list/element/PostListElement'

const RELATIONS = ['Peoples', 'Requests', 'Friends', 'Blocks', 'Chats', 'Posts']

const styles = StyleSheet.create({
  searchInputContainer: {
    alignItems: 'center',
    backgroundColor: theme.colors.grey_light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
  },
  icon: {
    height: 20,
    marginLeft: 5,
    width: 20
  },
  input: {
    color: theme.colors.dark,
    flex: 1,
    height: 30,
    padding: 0,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginLeft: 5
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey_dark,
    backgroundColor: theme.colors.neutral
  },
  closeIcon: {
    height: 20,
    width: 20,
    marginRight: 5
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme.colors.neutral
  }
})

const SearchScreen = ({ navigation, searchResult, setCurrentChat, searchUser, setCurrentPost }) => {
  const [value, setValue] = useState('')
  const relation = navigation.getParam('relation')
  let sections = searchResult || []
  sections = _.orderBy(sections, ['name', 'title'])
  sections = _.groupBy(sections, contact => contact.relation)
  sections = _.map(sections, (items, relation) => ({
    key: RELATIONS[relation],
    data: items
  }))

  useEffect(() => {
    searchUser(value, relation)
  }, [value])
  //console.log('---- searchResult', sections)
  return (
    <ScreenWrapper>
      <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.searchInputContainer}>
          <Image source={searchIcon} resizeMode="contain" style={styles.icon} />
          <TextInput
            autoFocus
            placeholder="Search"
            placeholderTextColor={theme.colors.grey_dark}
            style={styles.input}
            value={value}
            onChangeText={(val) => setValue(val)}
          />
          {!!value && (
            <TouchableWithoutFeedback onPress={() => setValue('')}>
              <Image source={closeIcon} resizeMode="contain" style={styles.closeIcon} />
            </TouchableWithoutFeedback>
          )}
        </View>
        <Text size="large" color="primary_dark" onPress={() => navigation.goBack()}>Cancel</Text>
      </View>
      <SectionList
        stickySectionHeadersEnabled
        keyExtractor={(item, _index) => item.id}
        renderItem={relation === "5"
          ? ({ item: props }) => <PostListElement
            {...props}
            uri={props.files ? props.files["0"] : ''}
            title={props.title}
            tags={props.tags}
            description={props.description}
            city={props.city}
            state={props.state}
            date={props.createdAt}
            handlePress={() => {
              setCurrentPost(props.id)
              navigation.navigate('PostViewScreen')
            }}
          />
          : ({ item: props }) => <AvatarListElement
            {...props}
            uri={props.icon}
            subtitle={(props.fullname && props.city) ? (props.fullname + ', ' + props.city) : (props.fullname)}
            handlePress={() => {
              setCurrentChat(props.id)
              navigation.navigate('ChatScreen', {
                name: props.name,
                uri: props.icon,
                id: props.id
              })
            }}
          />}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text color="grey_dark" size="large" weight="semibold">{section.key}</Text>
          </View>
        )}
        sections={sections}
      />
      </SafeAreaView>
    </ScreenWrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPost: (id) => dispatch(actionCreators.setCurrentPost(id)),
    setCurrentChat: (id) => dispatch(actionCreators.setCurrentChat(id)),
    searchUser: (key, relation) => dispatch(actionCreators.searchUser(key, relation)),
  }
}

const mapStateToProps = (state) => {
  return {
    searchResult: state.people.searchResult
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
