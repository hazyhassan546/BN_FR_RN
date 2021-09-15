import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import COLORS from "../common/colors";
import { commonStyle } from "../common/styles";
import { nameConnect } from "../redux/connectors/nameConnect";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../helpers/commonHelpers/helpers";
import CheckBox from "react-native-check-box";
import { TouchableOpacity } from "react-native-gesture-handler";

const data = [
  {
    lable: "Boy",
    id: 0,
    value: "Boy",
  },
  {
    lable: "Girl",
    id: 1,
    value: "Girl",
  },
  {
    lable: "Both",
    id: 2,
    value: "",
  },
];

class GenderOptions extends Component {
  selectOption = (i) => {
    this.props.setGender(data[i]);
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          {data.map((obj, i) => {
            return (
              <CheckBox
                key={i}
                style={{ padding: 10, width: 120 }}
                onClick={() => {
                  this.selectOption(i);
                }}
                isChecked={obj.id == this.props?.namesData?.genderIndex}
                rightText={obj.lable}
                rightTextStyle={styles.text}
                checkedImage={
                  <TouchableOpacity
                    style={[styles.wrap, commonStyle.elevatedShadow]}
                  ></TouchableOpacity>
                }
                unCheckedImage={
                  <TouchableOpacity
                    style={[styles.unselectedWrap, commonStyle.elevatedShadow]}
                  ></TouchableOpacity>
                }
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default GenderOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 30,
    paddingVertical: GetOptimalHieght(30),
  },
  wrap: {
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderWidth: 5,
    borderColor: COLORS.WHITE,
    backgroundColor: COLORS.APP_BLUE,
    borderRadius: GetOptimalHieght(20),
  },
  unselectedWrap: {
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderWidth: 0,
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(20),
  },
  text: {
    fontSize: scaledFontSize(20),
    color: COLORS.BLACK,
  },
});
