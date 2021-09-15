import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

export default class ReligionCard extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        style={styles.container}
      >
        <Image source={this.props.image} style={styles.image} />
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.WHITE,
    marginVertical: GetOptimalWidth(15),
    marginHorizontal: GetOptimalWidth(20),
    padding: GetOptimalHieght(20),
    borderRadius: GetOptimalHieght(20),
    ...commonStyle.elevatedShadow,
  },
  image: {
    width: GetOptimalHieght(45),
    height: GetOptimalHieght(45),
    resizeMode: "contain",
  },
  title: {
    fontSize: scaledFontSize(14),
    fontWeight: "bold",
  },
});
