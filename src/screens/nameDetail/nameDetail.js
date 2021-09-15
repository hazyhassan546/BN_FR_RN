import Clipboard from "@react-native-community/clipboard";
import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
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
import DetailsCard from "../../components/cards/detailsCard";
import NameListCard from "../../components/cards/nameListCard";
import GenderOptions from "../../components/genderOptions";
import ValuePickerModal from "../../components/models/valuePickerModal";
import SearchBar from "../../components/searchBar";
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from "../../helpers/commonHelpers/helpers";

export default class NameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  Item = ({ item, index }) => {
    const fav = this.props?.namesData?.favorites?.filter(
      (x) => x.id == item?.id
    );
    return (
      <NameListCard
        item={item}
        index={index}
        fav={fav.length > 0 ? true : false}
        favorites={this.props.namesData.favorites}
        addToFav={() => {
          this.props.addToFav(item);
        }}
        gotoDetails={() => {
          this.props.setLoading(true);
          this.props.setDetailItem(item);
          setTimeout(() => {
            this.props.setLoading(false);
          }, 300);
        }}
      />
    );
  };

  componentDidMount() {
    this.props.clearRelatedNames();
  }

  seeRelatedNames = () => {
    this.props.getRelatedNames({
      keyword: this.props?.namesData?.detailItem?.name?.substring(0, 4),
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      alphabet: "",
    });
  };

  renderHeader = () => {
    const fav = this.props?.namesData?.favorites?.filter(
      (x) => x.id == this.props?.namesData?.detailItem?.id
    );
    return (
      <DetailsCard
        data={this.props?.namesData?.detailItem}
        fav={fav.length > 0 ? true : false}
        seeRelatedNames={this.seeRelatedNames}
        favorites={this.props?.namesData?.favorites}
        addToFav={() => this.props.addToFav(this.props?.namesData?.detailItem)}
      />
    );
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
          title={this.props?.namesData?.detailItem?.name}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <View
          style={{
            alignItems: "center",
            marginBottom: GetOptimalHieght(30),
          }}
        ></View>
        {this.props.namesData.loading == true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color={COLORS.BLACK} />
          </View>
        ) : (
          <SectionList
            sections={this.props?.namesData?.relatedNamesList}
            ListHeaderComponent={this.renderHeader}
            keyExtractor={(item, index) => item + index}
            renderItem={this.Item}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.headerBox}>
                <Text style={styles.header}>{title.toUpperCase()}</Text>
              </View>
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
});
