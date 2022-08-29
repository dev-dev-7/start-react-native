import React from 'react';
import {
  ScrollView,
  ImageBackground,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {
  Row,
  Column as Col,
  ScreenInfo,
  Grid,
} from 'react-native-responsive-grid';
import theme from '../../styles/theme';
const Touchable =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

// column width (relative to screen size)
const sizes = {sm: 100, md: 50, lg: 25, xl: 20};

const layout = (state, onPressCard) => {
  const numCols = Math.floor(100 / sizes[ScreenInfo().mediaSize]);
  const numRows = Math.ceil(data.length / numCols);
  const colWidth = state.layout.grid ? state.layout.grid.width / numCols : 0;

  let layoutMatrix = [],
    layoutCols = [];

  for (let col = 0; col < numCols; col++) {
    layoutMatrix.push([]);
    for (let row = 0, i = col; row < numRows; row++, i += numCols) {
      if (data[i])
        layoutMatrix[col].push(
          <Item
            key={i}
            id={i}
            url={data[i].url}
            height={data[i].pixelHeight}
            width={data[i].pixelWidth}
            margin={15}
            colWidth={colWidth}
            state={state}
            onPressCard={onPressCard}
          />,
        );
    }
    layoutCols.push(
      <Col
        key={col}
        smSize={state.layout.grid ? sizes.sm : 0}
        mdSize={state.layout.grid ? sizes.md : 0}
        lgSize={state.layout.grid ? sizes.lg : 0}
        xlSize={state.layout.grid ? sizes.xl : 0}>
        {layoutMatrix[col]}
      </Col>,
    );
  }

  return layoutCols;
};

const Item = props => {
  if (!props.colWidth) return null;

  return (
    <Row
      style={{
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
      }}>
      <Col fullWidth>
        <Touchable onPress={() => props.onPressCard(props.id)}>
          <ImageBackground
            source={{uri: props.url}}
            style={{
              width: props.colWidth,
              height:
                props.height +
                ((props.colWidth - props.width) * props.height) / props.width,
              alignItems: 'center',
              justifyContent: 'center',
            }}></ImageBackground>
        </Touchable>
      </Col>
    </Row>
  );
};

const goToDetails = () => {
  alert('details');
};

function UniversalGridView({onPressCard}) {
  return (
    <Grid>
      {({state}) => (
        <Row fullHeight style={{backgroundColor: theme.colors.neutral}}>
          <ScrollView removeClippedSubviews={true}>
            <Row>{layout(state, onPressCard)}</Row>
          </ScrollView>
        </Row>
      )}
    </Grid>
  );
}

export default UniversalGridView;

const data = [
  {
    id: 2,
    url: 'https://storage.googleapis.com/ishro.com/uploads/6221ade3eaab8.png',
    pixelHeight: 210,
    pixelWidth: 236,
  },
  {
    id: 3,
    url: 'https://storage.googleapis.com/ishro.com/uploads/6221adbc58029.png',
    pixelHeight: 289,
    pixelWidth: 236,
  },
  {
    id: 3,
    url: 'https://storage.googleapis.com/ishro.com/uploads/6221ae0cef03c.png',
    pixelHeight: 289,
    pixelWidth: 236,
  },
  {
    id: 2,
    url: 'https://storage.googleapis.com/ishro.com/uploads/6221adf7a9279.png',
    pixelHeight: 210,
    pixelWidth: 236,
  },
];
