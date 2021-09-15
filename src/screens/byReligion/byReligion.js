import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import images from "../../common/images";
import BackHeader from "../../components/backHeader";
import ReligionCard from "../../components/cards/religionCard";
import GenderOptions from "../../components/genderOptions";
import HomeHeader from "../../components/homeHeader";
const data = [
  {
    title: "Muslims names",
    image: images.muslim,
    value: "Islam",
  },
  {
    title: "Christian names",
    image: images.christian,
    value: "Christianity",
  },
  {
    title: "Hindu's names",
    image: images.hindu,
    value: "Hinduism",
  },
  {
    title: "Sikhism names",
    image: images.sikh,
    value: "Sikh",
  },
  {
    title: "Jewish names",
    image: images.jews,
    value: "Jewish",
  },
];
export default class ByReligion extends Component {
  GetNames = (religion) => {
    let data = {
      keyword: "",
      religion: religion,
      gender: this.props?.namesData?.gender,
      alphabet: "",
    };
    this.props.setReligion(religion);
    this.props.setLoading(true);
    this.props.setKeyword("");
    this.props.getNames(data);
    this.props.navigation.navigate("NameListing", { data: "By Religion" });
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
          title={"Search Religious"}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />

        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <ReligionCard
                title={item.title}
                image={item.image}
                onPress={() => {
                  this.GetNames(item.value);
                }}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<GenderOptions {...this.props} />}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
