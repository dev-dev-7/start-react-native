// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import moment from 'moment';
import {TextInput as RNTextInput, StyleSheet, View} from 'react-native';
import BaseInput from './BaseInput';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Almarai-Regular',
    fontSize: 16,
    height: 25,
    alignContent:'center'
  },
});

class DateInput extends PureComponent {
  constructor() {
    super();
    this.state = {
      isDatePickerOpened: false,
      dateValue: new Date(),
    };
    this.textInputRef = null;
  }

  focus = () => {
    const {disabled} = this.props;
    if (!disabled) this.textInputRef.focus();
  };

  openDatePicker = () => this.setState({isDatePickerOpened: true});

  closeDatePicker = () => this.setState({isDatePickerOpened: false});

  handleDatePicked = date => {
    const {onChangeText} = this.props;

    this.closeDatePicker();
    if (onChangeText) onChangeText(date);
  };

  render() {
    const {
      disabled,
      error,
      focused,
      label,
      minimumDate,
      maximumDate,
      required,
      value,
      textColor,
      placeholderTextColor,
      ...other
    } = this.props;
    // const {this} = this.state;
    // let dateValue = moment(value, 'YYYY-MM-DD');
    // dateValue = dateValue.isValid() ? dateValue.toDate() : new Date();

    return (
      <BaseInput
        disabled={disabled}
        error={error}
        focused={focused}
        label={label}
        required={required}
        onPress={this.openDatePicker}>
        <View pointerEvents="box-only">
          <RNTextInput
            blurOnSubmit={false}
            editable={!disabled}
            ref={r => {
              this.textInputRef = r;
            }}
            {...other}
            value={value ? moment(value).format('DD:hh:mm:ss') : undefined}
            style={[styles.textInput, {color: theme.colors[textColor]}]}
            placeholderTextColor={theme.colors[placeholderTextColor]}
            onBlur={() => this.setState({isDatePickerOpened: false})}
            onFocus={() => this.setState({isDatePickerOpened: true})}
          />
        </View>
        {this.state.isDatePickerOpened && (
          <DatePicker
            title="Expiraion date "
            theme="dark"
            modal
            mode="datetime"
            open={this.state.isDatePickerOpened}
            date={this.state.dateValue}
            minimumDate={new Date()}
            onConfirm={date => {
              this.handleDatePicked(date);
              // this.setState({dateValue: date});
              // this.setState({isDatePickerOpened: false});
            }}
            onCancel={() => {
              this.setState({isDatePickerOpened: false});
            }}
          />
          // <DateTimePicker
          //   value={dateValue}
          //   minimumDate={minimumDate}
          //   maximumDate={maximumDate}
          //   is24Hour={true}
          //   mode={'datetime'}
          //   onChange={this.handleDatePicked}
          // />
        )}
      </BaseInput>
    );
  }
}

DateInput.propTypes = {
  ...BaseInput.propTypes,
  autoSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
};

DateInput.defaultProps = {
  ...BaseInput.defaultProps,
  autoSubmit: true,
  disabled: false,
};

export default DateInput;
