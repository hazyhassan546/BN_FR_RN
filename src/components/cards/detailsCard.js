import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Share } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import Toast from "react-native-toast-message";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";
import { Icon } from "react-native-elements";
import Clipboard from "@react-native-community/clipboard";
export default class DetailsCard extends Component {
  onShare = async (message) => {
    try {
      const result = await Share.share({
        message: message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  getReligion = () => {
    const item = this.props.data;
    if (item.cat_numaric == 3) {
      return <Text style={styles.desc}>{"Muslim"}</Text>;
    } else if (item.cat_numaric == 2 && item.urdu_name == "Hindi") {
      return <Text style={styles.desc}>{"Hindu"}</Text>;
    } else if (item.urdu_name == "Sikh") {
      return <Text style={styles.desc}>{"Sikh"}</Text>;
    } else if (item.origen_id == 20) {
      return <Text style={styles.desc}>{"Christian"}</Text>;
    } else if (item.urdu_name == "hebrew") {
      return <Text style={styles.desc}>{"Jewish"}</Text>;
    } else {
      return <Text style={styles.desc}>{""}</Text>;
    }
  };

  render() {
    const { name, meaning, gender, numbers } = this.props.data;
    const { fav } = this?.props;
    return (
      <View>
        <View style={styles.container}>
          <View
            style={[
              styles.leftContainer,
              {
                paddingTop: GetOptimalHieght(40),
                paddingBottom: GetOptimalHieght(10),
                borderTopLeftRadius: 10,
              },
            ]}
          >
            <Text style={styles.title}>{"Name"}</Text>
          </View>
          <View
            style={[
              styles.rightContainer,
              {
                borderTopRightRadius: 10,
                paddingTop: GetOptimalHieght(40),
                paddingBottom: GetOptimalHieght(10),
              },
            ]}
          >
            <Text style={styles.desc}>{name}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Gender</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.desc}>{gender}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Religion</Text>
          </View>
          <View style={styles.rightContainer}>{this.getReligion()}</View>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Meaning</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.desc}>{meaning}</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={[
              styles.leftContainer,
              {
                paddingBottom: GetOptimalHieght(20),
                borderBottomLeftRadius: 10,
              },
            ]}
          >
            <Text style={styles.title}>Lucky Number</Text>
          </View>
          <View
            style={[
              styles.rightContainer,
              {
                paddingBottom: GetOptimalHieght(20),
                borderBottomRightRadius: 10,
              },
            ]}
          >
            <Text style={styles.desc}>{numbers}</Text>
          </View>
        </View>

        <View style={styles.iconArea}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: fav ? COLORS.PINKISH : COLORS.WHITE },
            ]}
            onPress={this.props.addToFav}
          >
            <Icon
              name="hearto"
              type="antdesign"
              size={17}
              color={fav ? COLORS.WHITE : COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onShare("Name: " + name + "   Meaning: " + meaning)
            }
          >
            <Icon
              name="share"
              type="SimpleLineIcons"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Clipboard.setString("Name: " + name + "   Meaning: " + meaning);
              Toast.show({
                type: "success",
                text1: "Name is copied to clipboard",
                text2: "Name: " + name + "   Meaning: " + meaning,
              });
            }}
          >
            <Icon
              name="copy"
              type="feather"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.seeMore}
          onPress={this.props.seeRelatedNames}
        >
          <Text style={styles.link}>See related names</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
    paddingHorizontal: GetOptimalWidth(50),
    flexDirection: "row",
  },
  title: {
    marginBottom: GetOptimalHieght(10),
    fontSize: scaledFontSize(14),
  },
  desc: {
    marginBottom: GetOptimalHieght(10),
    fontSize: scaledFontSize(14),
  },
  iconArea: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: GetOptimalHieght(20),
  },
  leftContainer: {
    width: GetOptimalWidth(100),
    minHeight: GetOptimalHieght(38),
    margin: 0,
    backgroundColor: "#DDEBF2",
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
  },
  rightContainer: {
    width: GetOptimalWidth(200),
    margin: 0,
    minHeight: GetOptimalHieght(38),
    backgroundColor: "#F4F4F5",
    justifyContent: "center",
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
  },
  button: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    ...commonStyle.elevatedShadow,
    borderRadius: GetOptimalHieght(20),
    marginHorizontal: GetOptimalWidth(5),
  },
  seeMore: {
    paddingHorizontal: GetOptimalWidth(40),
  },
  link: {
    color: "#1592E6",
    fontSize: scaledFontSize(14),
  },
});
