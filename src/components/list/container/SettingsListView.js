import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import theme from '../../../styles/theme';

const styles = StyleSheet.create({
  SettingsListView: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_light,
  },
  emptyView: {
    height: 10,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.grey_light,
    // backgroundColor:theme.colors.neutral
  },
});

function SettingsListView({children, showEmpty}) {
  return (
    <View style={[styles.SettingsListView]}>
      {showEmpty && <View style={styles.emptyView} />}
      {children}
    </View>
  );
}

SettingsListView.propTypes = {
  children: PropTypes.node,
  showEmpty: PropTypes.bool,
};

SettingsListView.defaultProps = {
  children: null,
  showEmpty: true,
};

export default SettingsListView;
