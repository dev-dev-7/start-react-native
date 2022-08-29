import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import { Platform, StyleSheet, TouchableHighlight, View } from 'react-native'

import Text from '../../typography/Text'
import theme from '../../../styles/theme'
import AvatarView from '../../views/AvatarView'

const calendarStrings = {
  lastDay: '[Yesterday]',
  sameDay: 'LT',
  nextDay: '[Tomorrow]',
  lastWeek: 'dddd',
  nextWeek: 'dddd',
  sameElse: 'L'
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.light
  },
  inner_row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flexShrink: 1
  },
  wrapper: {
    borderBottomColor: theme.colors.grey_light,
    borderBottomWidth: 0.5,
    flex: 1,
    justifyContent: 'center',
    paddingRight: 16,
    paddingVertical: 16,
  },
  badgeWraper: {
    padding: 3,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.primary
  },
  gridName: {
    paddingHorizontal: 10,
    top: -5
  }
})

function AvatarListElement({
  badgeCount,
  empty,
  grid,
  handlePress,
  name,
  subtitle,
  uri,
  date,
  ...other
}) {

  if (empty) {
    return <View style={{ width: 100 }} />
  }

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={[
        styles.row,
        grid && { flexDirection: 'column', width: 100 },
        empty && { backgroundColor: 'red' }
      ]}>
        <AvatarView
          size="large"
          name={name}
          source={{ uri }}
          onPress={handlePress}
          {...other}
        />
        {grid && <Text numberOfLines={1} style={styles.gridName}>{name}</Text>}
        {!grid && <View style={styles.wrapper}>
          <View style={[styles.inner_row]}>
            <View style={[styles.column, { flex: 1, paddingRight: 16 }]}>
              <Text size="large" weight="semibold" numberOfLines={1}>{name}</Text>
            </View>
            {date && <View style={[styles.column]}>
              <Text color="grey_dark" numberOfLines={1}>{moment(date).calendar(moment(), calendarStrings)}</Text>
            </View>}
          </View>
          <View style={styles.inner_row}>
            <View style={[styles.column, { flex: 1 }]}>
              <Text color="grey_dark" numberOfLines={2}>{subtitle}</Text>
            </View>
            {badgeCount > 0 && <View style={[styles.column, styles.badgeWraper]}>
              <Text color="light" size="small" numberOfLines={1}>{badgeCount}</Text>
            </View>}
          </View>
        </View>}
      </View>
    </TouchableHighlight>
  )
}

AvatarListElement.propTypes = {
}

export default AvatarListElement
