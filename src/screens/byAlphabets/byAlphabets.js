import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import COLORS from "../../common/colors";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import AlphabetCard from "../../components/cards/alphabetCard";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";
import ValuePickerModal from "../../components/models/valuePickerModal";
import SearchBar from "../../components/searchBar";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../../helpers/commonHelpers/helpers";

const Alphabets = [
  {
    key: "A",
    color: COLORS.REDISH,
  },
  {
    key: "B",
    color: COLORS.PINKISH,
  },
  {
    key: "C",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "D",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "E",
    color: COLORS.REDISH,
  },
  {
    key: "F",
    color: COLORS.PINKISH,
  },
  {
    key: "G",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "H",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "I",
    color: COLORS.REDISH,
  },
  {
    key: "J",
    color: COLORS.PINKISH,
  },
  {
    key: "K",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "L",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "M",
    color: COLORS.REDISH,
  },
  {
    key: "N",
    color: COLORS.PINKISH,
  },
  {
    key: "O",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "P",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "Q",
    color: COLORS.REDISH,
  },
  {
    key: "R",
    color: COLORS.PINKISH,
  },
  {
    key: "S",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "T",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "U",
    color: COLORS.REDISH,
  },
  {
    key: "V",
    color: COLORS.PINKISH,
  },
  {
    key: "W",
    color: COLORS.LIGHT_BLUE,
  },
  {
    key: "X",
    color: COLORS.SIDE_MENU_TEXT,
  },
  {
    key: "Y",
    color: COLORS.REDISH,
  },
  {
    key: "Z",
    color: COLORS.PINKISH,
  },
];

export default class ByAlphabets extends Component {
  GetNames = (alphabet) => {
    let data = {
      keyword: "",
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      alphabet: alphabet,
    };
    this.props.setLoading(true);
    this.props.getNames(data);
    this.props.navigation.navigate("NameListing", { data: "By Alphabet" });
  };

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
          title={"Search Alphabetic"}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <FlatList
          keyExtractor={(item) => item.key}
          data={Alphabets}
          contentContainerStyle={{
            paddingHorizontal: GetOptimalWidth(35),
          }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <AlphabetCard
                keyword={item.key}
                color={item.color}
                onPress={this.GetNames}
              />
            );
          }}
          ListHeaderComponent={
            <View
              style={{
                alignItems: "center",
                marginBottom: GetOptimalHieght(30),
              }}
            >
              <GenderOptions {...this.props} />
              <View style={{ flexDirection: "row" }}>
                <ValuePickerModal
                  {...this.props}
                  onPress={() => {
                    this.props.navigation.navigate("ByReligion");
                  }}
                />
                <SearchBar {...this.props} />
              </View>
            </View>
          }
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({});
