import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import images from "../../common/images";
import { Icon } from "react-native-elements";
import SplashScreen from "react-native-splash-screen";

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";

const slides = [
  {
    key: 1,
    title: "Baby Boy",
    text: "Even from birth, babies can communicate with you. A newborn doesn't realize they are a separate person",
    image: images.slide1,
    backgroundColor: "#454748",
  },
  {
    key: 2,
    title: "Baby Girl",
    text: "The Healthy Baby program encourages early regular prenatal care and promotes and supports healthy outcomes",
    image: images.slide2,
    backgroundColor: "#454748",
  },
  {
    key: 3,
    title: "Family",
    text: "New babies have a strong need to close to their parents, You can help your baby's  development during pregnancy's",
    image: images.slide3,
    backgroundColor: "#454748",
  },
];

export default class WalkThrough extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  _renderItem = ({ item }) => {
    return (
      <View>
        <Image style={styles.imageStyle} source={item.image} />
        <View style={styles.textArea}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.nextText}>next</Text>
        <Icon name="right" type={"antdesign"} size={18} color={"#5AC5CB"} />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.nextText}>Done</Text>
      </View>
    );
  };

  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.nextText}>skip</Text>
      </View>
    );
  };

  _onDone = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  render() {
    return (
      <AppIntroSlider
        keyExtractor={(item) => item.key.toString()}
        renderItem={this._renderItem}
        data={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.Dot}
        onDone={this._onDone}
        showSkipButton
      />
    );
  }
}

const styles = StyleSheet.create({
  activeDot: {
    width: GetOptimalWidth(40),
    height: 8,
    backgroundColor: "#5AC5CB",
    ...commonStyle.elevatedShadow,
    marginTop: -20,
  },
  Dot: {
    height: 8,
    width: GetOptimalWidth(15),
    backgroundColor: COLORS.WHITE,
    ...commonStyle.elevatedShadow,
    marginTop: -20,
  },
  buttonArea: {
    backgroundColor: "red",
  },
  nextText: {
    fontSize: scaledFontSize(16),
    color: "#5AC5CB",
    fontWeight: "bold",
  },
  buttonCircle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: scaledFontSize(26),
    color: COLORS.WHITE,
    fontWeight: "bold",
    marginBottom: GetOptimalHieght(20),
  },
  desc: {
    fontSize: scaledFontSize(10),
    color: COLORS.WHITE,
    marginBottom: GetOptimalHieght(20),
    letterSpacing: 0.3,
    lineHeight: 15,
  },
  textArea: {
    position: "absolute",
    top: GetOptimalHieght(380),
    paddingHorizontal: GetOptimalWidth(50),
  },
});
