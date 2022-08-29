import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Dimensions, FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';

import ScreenLoader from '../../loaders/ScreenLoader'

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: 'white'
  }
})

function ListView({ data, grid, itemComponent, renderHiddenItem, ...other }) {
  const [numOfColumns, setNumOfColumns] = useState(0)

  onLayout = () => {
    const { width } = Dimensions.get('window')
    const itemWidth = 100
    const numColumns = Math.floor(width / itemWidth)
    setNumOfColumns(numColumns)
  }
  const coloumProps = grid && {
    columnWrapperStyle: styles.gridContainer
  }

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }

    return data;
  }
  const loadView = () => {
    if (numOfColumns < 1) {
      return (
        <View style={{ height: '100%' }}>
          <ScreenLoader />
        </View>
      )
    }
    return (
      <SwipeListView
        {...other}
        useFlatList={true}
        data={grid ? formatData(data, numOfColumns) : data}
        renderItem={({ item }) => itemComponent({
          ...item,
          grid
        })}
        {...coloumProps}
        numColumns={grid ? numOfColumns : 1}
        key={numOfColumns}
        // onRowOpen={(rowKey, rowMap) => {
        //   setTimeout(() => {
        //     rowMap[rowKey].closeRow()
        //   }, 2000)
        // }}
        renderHiddenItem={renderHiddenItem}
      />
    )
  }

  return (
    <View onLayout={onLayout}>
      {loadView()}
    </View>
  )
}

ListView.propTypes = {
}

export default ListView
