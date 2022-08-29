import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import MonthPicker from 'react-native-month-picker';
import theme from '../../styles/theme';
import ContentWrapper from '../wrappers/ContentWrapper';

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: theme.colors.dark_light,
    textColor: theme.colors.light,
    padding: 15,
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
  },
  inputText: {
    fontFamily: 'Almarai-Regular',
    fontSize: 16,
    height: 25,
    padding: 0,
    color: theme.colors.light,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: theme.colors.dark,
    marginHorizontal: 20,
    marginVertical: 70,
  },
  confirmButton: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 12,
    borderColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function MonthInput({placeholder, value, onChangeDate}) {
  const [isOpen, toggleOpen] = useState(false);
  const [isExpiry, toggleIsExpiry] = useState(false);

  const handleDatePicked = date => {
    toggleOpen(false);
    onChangeDate(moment(date).format('MM/DD/YYYY'));
    toggleIsExpiry(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.input}>
        <Text style={[styles.inputText, { color: isExpiry ? theme.colors.light : theme.colors.lighter }]}>
          {isExpiry ? moment(value).format('MM/YYYY') : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="fade"
        visible={isOpen}
        onRequestClose={() => {
          toggleOpen(false);
        }}>
        <ContentWrapper gutterX="wide" gutterY="wide">
          <View style={styles.content}>
            <MonthPicker
              selectedDate={value || new Date()}
              onMonthChange={date => handleDatePicked(date)}
              minDate={new Date()}
              maxDate={'01-01-2100'}
              selectedBackgroundColor={theme.colors.primary}
              seperatorColor={theme.colors.primary}
              containerStyle={{backgroundColor: theme.colors.dark}}
              yearTextStyle={{color: theme.colors.light}}
              monthTextStyle={{color: theme.colors.light}}
              nextIcon={<Text style={styles.inputText}>Next</Text>}
              prevIcon={<Text style={styles.inputText}>Prev</Text>}
              monthDisabledStyle={{color: theme.colors.ripple_light}}
            />
          </View>
        </ContentWrapper>
      </Modal>
    </View>
  );
}

MonthInput.defaultProps = {
  placeholder: 'Select date',
};

export default React.memo(MonthInput);
