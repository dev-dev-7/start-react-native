import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import Button from '../buttons/Button';
import Text from '../typography/Text';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 2,
    // marginBottom: 12,
  },
});

function CategoryView({data}) {
  const [category, setCategory] = useState([]);

  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  useEffect(() => {
    setCategory(data);
  }, []);
  const filterCategory = value => {
    alert(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper} horizontal={true}>
      {category.map((value, index) => {
        return (
          <Button
            loading={false}
            size="xnormal"
            fontSize="small"
            title={value.title}
            iconPosition="left"
            color={value.active ? 'primary' : 'white'}
            variant={value.active ? 'outline' : 'contained'}
            key={index}
            onPress={() => filterCategory(value.title)}
          />
        );
      })}
    </ScrollView>
  );
}

export default CategoryView;
