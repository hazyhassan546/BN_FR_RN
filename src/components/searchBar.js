import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Keyboard} from 'react-native';
import COLORS from '../common/colors';
import {commonStyle} from '../common/styles';
import Toast from 'react-native-toast-message';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';
import {Icon} from 'react-native-elements';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    };
  }

  submitForm = () => {
    if (this.props?.namesData?.keyword == '') {
      Toast.show({
        type: 'error',
        text1: 'Please type something to search',
      });
      return;
    }
    let data = {
      keyword: this.props?.namesData?.keyword,
      religion: '',
      gender: this.props?.namesData?.gender,
      alphabet: '',
      origin: '',
    };
    this.props.getNames(data);
    this.props.onSelect();
    this.props.navigation.navigate('NameListing', {
      data: 'By Keyword',
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          value={this.props?.namesData?.keyword}
          placeholder={'Search Your Name'}
          placeholderTextColor={COLORS.BLACK}
          onChangeText={text => {
            if (text == '') {
              this.props.setSearchType('');
            }
            this.props.setKeyword(text);
          }}
          onSubmitEditing={this.submitForm}
        />
        <Icon
          name="search"
          type="EvilIcons"
          color={COLORS.BLACK}
          onPress={this.submitForm}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(320),
    height: GetOptimalHieght(38),
    backgroundColor: COLORS.WHITE,
    marginTop: GetOptimalHieght(30),
    ...commonStyle.elevatedShadow,
    borderRadius: GetOptimalWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: GetOptimalWidth(10),
  },
  inputStyle: {
    width: GetOptimalWidth(250),
    height: GetOptimalHieght(32),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
    paddingLeft: GetOptimalWidth(10),
    fontSize: scaledFontSize(18),
    fontFamily: 'SEGOEUI',
  },
});
