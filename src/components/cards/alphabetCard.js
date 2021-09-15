import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

export default class AlphabetCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.keyword.toLowerCase())}
        style={[styles.container, { backgroundColor: this.props.color }]}
      >
        <Text style={styles.title}>{this.props.keyword}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(60),
    height: GetOptimalHieght(50),
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: GetOptimalHieght(20),
    borderRadius: GetOptimalHieght(7),
    marginHorizontal: GetOptimalWidth(20),
    ...commonStyle.elevatedShadow,
  },
  title: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: scaledFontSize(34),
  },
});
