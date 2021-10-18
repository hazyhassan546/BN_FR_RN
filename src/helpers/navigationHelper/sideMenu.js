import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Linking,
} from "react-native";
import { Icon } from "react-native-elements";
import COLORS from "../../common/colors";
import images from "../../common/images";
import Images from "../../common/images";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../commonHelpers/helpers";
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 0,
          title: "Home",
          key: "Home",
          image: images.homeIcon,
          selected: true,
        },
        {
          id: 1,
          title: "My Favorite",
          key: "Favorite",
          image: images.heartIcon,
          selected: false,
        },
        {
          id: 2,
          title: "Contact Us",
          key: "ContactUs",
          image: images.phoneIcon,
          selected: false,
        },
        {
          id: 3,
          title: "Privacy Policy",
          key: "PrivacyPolicy",
          image: images.privacyIcon,
          selected: false,
        },
        {
          id: 4,
          title: "Top Posts",
          key: "Blogs",
          image: images.blogs,
          selected: false,
        },
      ],
    };
  }

  changeTab = (tab) => {
    let Tabs = this.state.tabs;
    Tabs.map((item, index) => {
      if (index == tab.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.setState({
      tabs: Tabs,
    });
    this.props.navigation.navigate(tab.key);
  };

  render() {
    return (
      <ImageBackground
        source={Images.sideMenuBackground}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.closeDrawer();
          }}
          style={styles.backButton}
        >
          <Icon name="arrow-back" type="MaterialIcons" color={COLORS.BLACK} />
        </TouchableOpacity>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.imageContainer}
          >
            <View style={styles.buttonStyle}>
              <Image source={Images.babyImage} style={styles.imageStyle} />
            </View>
          </TouchableOpacity>
          {/* Options Area */}
          {this.state.tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.tabItemContainer}
                onPress={() => this.changeTab(item)}
              >
                <Image source={item.image} style={styles.imageTab} />
                <Text style={styles.tabText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.tabText}>{"Follow Us"}</Text>
          <View style={styles.socialImagesArea}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://www.facebook.com/babynamemeaningz/");
              }}
              style={styles.imageWrap}
            >
              <Image source={images.faceBook} style={styles.socialImages} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              Linking.openURL("https://twitter.com/");
            }}
            style={styles.imageWrap}>
              <Image source={images.twitter} style={styles.socialImages} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              Linking.openURL("https://www.instagram.com/");
            }}
            style={styles.imageWrap}>
              <Image source={images.instagram} style={styles.socialImages} />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => {
              Linking.openURL("https://pin.it/3DFQ5IW");
            }}
            style={styles.imageWrap}>
              <Image source={images.pint} style={styles.socialImages} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabText: {
    color: COLORS.SIDE_MENU_TEXT,
    fontSize: scaledFontSize(18),
    fontFamily:"SEGOEUI",
  },
  socialImagesArea: {
    flexDirection: "row",
    marginTop: GetOptimalHieght(20),
  },
  tabItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: GetOptimalWidth(20),
    paddingVertical: GetOptimalHieght(10),
  },
  imageWrap: {
    padding: GetOptimalHieght(5),
    borderRadius: GetOptimalHieght(20),
    marginHorizontal: GetOptimalWidth(5),
    //...commonStyle.elevatedShadow,
  },
  socialImages: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    borderRadius: GetOptimalHieght(20),
    resizeMode: "contain",
  },
  imageTab: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    marginRight: GetOptimalWidth(15),
  },
  imageContainer: {
    height: GetOptimalWidth(100),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: GetOptimalHieght(100),
  },
  backButton: {
    marginTop: GetOptimalHieght(50),
    alignItems: "flex-start",
    paddingLeft: GetOptimalWidth(20),
  },
  imageStyle: {
    width: GetOptimalHieght(63),
    height: GetOptimalHieght(63),
  },
  buttonStyle: {
    width: GetOptimalHieght(80),
    height: GetOptimalHieght(80),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(40),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    height: GetOptimalHieght(100),
    alignItems: "center",
  },
});
