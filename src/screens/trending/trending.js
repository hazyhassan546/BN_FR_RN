import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ImageBackground,
  FlatList,
  Image,
  ActivityIndicator,
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

const Item = ({ item, index, gotoDetails, addToFav, favorites }) => (
  <NameListCard
    item={item}
    index={index}
    favorites={favorites}
    addToFav={addToFav}
    gotoDetails={() => {
      gotoDetails();
    }}
  />
);
export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  componentDidMount() {
    this.setState({
      title: "Trending Names",
    });
  }

  ListEmptyComponent = () => {
    return (
      <View
        style={{
          height: GetOptimalHieght(400),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={images.missing} style={styles.imageStyle} />
        <Text>{"Sorry! your searched names does not exist"}</Text>
        <Text style={styles.textDesc}>{"Try with another name"}</Text>
      </View>
    );
  };

  componentWillUnmount() {
    this.props.clearRelatedNames();
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
        {this.props?.namesData?.loading === true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={COLORS.BLACK} />
          </View>
        ) : (
          <FlatList
            data={this.props.namesData.trendingNamesList}
            keyExtractor={(item, index) => item + index}
            ListEmptyComponent={this.ListEmptyComponent}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Item
                item={item}
                index={index}
                favorites={this.props.namesData.favorites}
                addToFav={() => {
                  this.props.addToFav(item);
                }}
                gotoDetails={() => {
                  this.props.setDetailItem(item);
                  setTimeout(() => {
                    this.props.navigation.navigate("NameDetails");
                  }, 200);
                }}
              />
            )}
          />
        )}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
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
  textDesc: {
    fontSize: 14,
    color: COLORS.APP_BLUE,
  },
  imageStyle: {
    width: GetOptimalHieght(100),
    height: GetOptimalHieght(100),
    resizeMode: "contain",
    marginBottom: GetOptimalHieght(30),
  },
});
