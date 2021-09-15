import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Keyboard } from "react-native";
import COLORS from "../common/colors";
import { commonStyle } from "../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../helpers/commonHelpers/helpers";
import { Icon } from "react-native-elements";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    };
  }

  submitForm = () => {
    let data = {
      keyword: this.props?.namesData?.keyword,
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      alphabet: "",
    };
    this.props.getNames(data);
    this.props.navigation.navigate("NameListing", {
      data: "By Keyword",
    });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          value={this.props?.namesData?.keyword}
          placeholder={"Search Your Name"}
          placeholderTextColor={COLORS.BLACK}
          onChangeText={(text) => {
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
    width: GetOptimalWidth(190),
    height: GetOptimalHieght(32),
    backgroundColor: COLORS.WHITE,
    marginLeft: 10,
    ...commonStyle.elevatedShadow,
    borderRadius: GetOptimalWidth(5),
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    width: GetOptimalWidth(150),
    height: GetOptimalHieght(32),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
    paddingLeft: GetOptimalWidth(10),
  },
});
