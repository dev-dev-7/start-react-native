import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {TextInput as RNTextInput, StyleSheet, View} from 'react-native';

import BaseInput from './BaseInput';
import TagElementView from '../views/TagElementView';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    height: 25,
    padding: 0,
    color: theme.colors.primary,
  },
});

class TagsInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      value: '',
      tags: [],
    };
    this.textInputRef = null;
  }

  focus = () => {
    const {disabled} = this.props;
    if (!disabled) this.textInputRef.focus();
  };

  handleChange = value => {
    const {limit} = this.props;
    if (limit) {
      if (value.length <= limit) this.setState({value});
    } else {
      this.setState({value});
    }
  };

  handleCreateTag = value => {
    const trimmedValue = value.trim();
    const {tags} = this.state;
    const {onChangeValue} = this.props;

    if (tags.length > 7) {
      alert('Maximum tag limit reached.');
      return;
    }
    if (trimmedValue.length > 0) {
      const newTags = [
        ...tags,
        {
          id: Math.random().toString(36).substr(2, 9),
          value: trimmedValue,
        },
      ];

      this.setState({
        tags: newTags,
        value: '',
      });

      if (onChangeValue) onChangeValue(newTags);
    }
  };

  handleCloseTag = id => {
    const {tags} = this.state;
    const {onChangeValue} = this.props;
    const newTags = [...tags.filter(tag => tag.id !== id)];

    this.setState({
      tags: newTags,
    });

    if (onChangeValue) onChangeValue(newTags);
  };

  render() {
    const {disabled, placeholderTextColor, required, textColor, ...other} =
      this.props;
    const {focused, tags, value} = this.state;
    //console.log('in value', tags)
    return (
      <BaseInput
        {...other}
        value={value}
        disabled={disabled}
        focused={focused}
        onPress={this.focus}
        helperText={`Use ↲ to submit`}>
        {tags.length > 0 && (
          <View
            style={{
              alignItems: 'flex-start',
              paddingVertical: 10,
              flexGrow: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {tags.map(({value, id}) => (
              <TagElementView
                key={`${value}-${id}`}
                title={value}
                onClose={() => this.handleCloseTag(id)}
              />
            ))}
          </View>
        )}
        <RNTextInput
          blurOnSubmit={false}
          editable={!disabled}
          ref={r => {
            this.textInputRef = r;
          }}
          {...other}
          value={value}
          onChangeText={val => this.handleChange(val)}
          style={[styles.textInput, {color: theme.colors[textColor]}]}
          placeholderTextColor={theme.colors[placeholderTextColor]}
          onBlur={() => {
            this.setState({focused: false});
            this.handleCreateTag(value);
          }}
          onFocus={() => this.setState({focused: true})}
          onSubmitEditing={() => this.handleCreateTag(value)}
        />
      </BaseInput>
    );
  }
}

TagsInput.propTypes = {
  ...BaseInput.propTypes,
};

TagsInput.defaultProps = {
  ...BaseInput.defaultProps,
  placeholderTextColor: 'primary_light',
  textColor: 'primary',
};

export default TagsInput;
