import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Linking,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";
export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: "Privacy Policy",
    });
  }

  render() {
    return (
      <ImageBackground
        source={images.home}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      >
        <BackHeader
          title={this.state.title}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <View style={styles.container}>
          <Text style={styles.headingStyle}>{"Privacy Policy"}</Text>
          <Text style={styles.description}>
            {
              "A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties."
            }
          </Text>
          <Text style={styles.description}>
            {
              "if you require more information about our privacy policy visit our website."
            }
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL(
                "https://www.babynamemeaningz.com/privacypolicy.php"
              );
            }}
          >
            <Text style={styles.details}>
              Click here to view Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: GetOptimalWidth(20),
  },
  headingStyle: {
    fontSize: scaledFontSize(18),
    fontWeight: "bold",
    paddingVertical: GetOptimalHieght(20),
    color: COLORS.BLACK,
  },
  description: {
    fontSize: scaledFontSize(14),
    paddingBottom: GetOptimalHieght(20),
    color: COLORS.BLACK,
    textAlign: "justify",
  },
  details: {
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
    fontWeight:"bold",
    textAlign: "justify",
  },
  button: {
    marginTop:GetOptimalHieght(40),
    backgroundColor: COLORS.SIDE_MENU_TEXT,
    borderRadius: GetOptimalWidth(10),
    padding: 15,
    alignItems:"center"
  },
  headerBox: {
    fontSize: scaledFontSize(14),
    backgroundColor: COLORS.BLACK,
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderRadius: GetOptimalHieght(20),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: GetOptimalWidth(10),
    marginVertical: GetOptimalHieght(10),
  },
  header: {
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
  },
});
