import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ImageBackground,
} from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import NameListCard from "../../components/cards/nameListCard";
import GenderOptions from "../../components/genderOptions";
import ValuePickerModal from "../../components/models/valuePickerModal";
import SearchBar from "../../components/searchBar";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

const DATA = [
  {
    title: "A",
    data: [
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Ali",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "B",
    data: [
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Bilal",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "C",
    data: [
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Cat",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "D",
    data: [
      {
        name: "Doe",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Doe",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
  {
    title: "E",
    data: [
      {
        name: "Elia",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
      {
        name: "Elia",
        meaning: "Meaning-Eminent, Noble, High In Rank",
        religion: "Islam",
        gender: "Male",
        history: "xyz xyz xyz",
      },
    ],
  },
];

const Item = ({ item, index, gotoDetails }) => (
  <NameListCard
    item={item}
    index={index}
    gotoDetails={() => {
      gotoDetails();
    }}
  />
);
export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: "Contact Us",
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
          <Text style={styles.headingStyle}>{"Contact Us"}</Text>
          <Text style={styles.description}>
            {
              "Hi, if you require more information or assistance, feel free to contact us."
            }
          </Text>
          <Text style={styles.details}>{"Naveed Ahmad"}</Text>
          <Text style={styles.details}>
            {"Postal code 40100, Punjab Sargodha, Pakistan"}
          </Text>
          <Text style={styles.details}>
            {"Email: babynamemeaningz@gmail.com"}
          </Text>
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
    color:COLORS.BLACK,
  },
  description: {
    fontSize: scaledFontSize(14),
    paddingBottom: GetOptimalHieght(20),
    color:COLORS.BLACK,
    textAlign: "justify",
  },
  details: {
    fontSize: scaledFontSize(14),
    color:COLORS.APP_BLUE,
    textAlign: "justify",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
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
