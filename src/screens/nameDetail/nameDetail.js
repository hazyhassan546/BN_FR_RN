import Clipboard from '@react-native-community/clipboard';
import React, {Component} from 'react';
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
} from 'react-native';

import COLORS from '../../common/colors';
import images from '../../common/images';
import BackHeader from '../../components/backHeader';
import DetailsCard from '../../components/cards/detailsCard';
import NameListCard from '../../components/cards/nameListCard';
import GenderOptions from '../../components/genderOptions';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';

export default class NameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  UNSAFE_componentWillMount(){
    this.props.getTrendingNames();
  }

  Item = ({item, index}) => {
    const fav = this.props?.namesData?.favorites?.filter(x => x.id == item?.id);
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
    this.seeRelatedNames();
  }

  ListEmptyComponent = () => {
    return (
      <View
        style={{
          height: GetOptimalHieght(400),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.missing} style={styles.imageStyle} />
        <Text>{'Nothing Found'}</Text>
        <Text style={styles.textDesc}>{'Please check your internet'}</Text>
      </View>
    );
  };

  seeRelatedNames = () => {
    this.props.getRelatedNames({
      keyword: this.props?.namesData?.detailItem?.name?.substring(0, 4),
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      origin: '',
      alphabet: '',
    });
  };

  renderHeader = () => {
    const fav = this.props?.namesData?.favorites?.filter(
      x => x.id == this.props?.namesData?.detailItem?.id,
    );
    return (
      <DetailsCard
        data={this.props?.namesData?.detailItem}
        fav={fav.length > 0 ? true : false}
        // seeRelatedNames={this.seeRelatedNames}
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
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover">
        <BackHeader
          title={this.props?.namesData?.detailItem?.name}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate('Favorite');
          }}
        />

        {this.props.namesData.loading == true ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={COLORS.BLACK} />
          </View>
        ) : (
          <SectionList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: GetOptimalHieght(40),
            }}
            sections={this.props?.namesData?.relatedNamesList}
            ListHeaderComponent={this.renderHeader}
            keyExtractor={(item, index) => item + index}
            renderItem={this.Item}
            ListFooterComponent={() => {
              return (
                <View>
                  <View style={styles.link}>
                      <Text style={styles.seeMore}>Top 5 Trending Names</Text>
                    </View>

                  {this.props?.namesData?.T_loading === true ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <ActivityIndicator size="large" color={COLORS.BLACK} />
                    </View>
                  ) : (
                    <FlatList
                      data={this.props?.namesData?.trendingNamesList.slice(
                        0,
                        5,
                      )}
                      keyExtractor={(item, index) => item + index}
                      ListEmptyComponent={this.ListEmptyComponent}
                      showsVerticalScrollIndicator={false}
                      scrollEnabled={false}
                      initialNumToRender={5}
                      renderItem={this.Item}
                    />
                  )}
                </View>
              );
            }}
            renderSectionHeader={({section: {title}}) => (
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  headerBox: {
    fontSize: scaledFontSize(14),
    backgroundColor: COLORS.BLACK,
    width: GetOptimalHieght(25),
    height: GetOptimalHieght(25),
    borderRadius: GetOptimalHieght(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: GetOptimalWidth(10),
    marginVertical: GetOptimalHieght(10),
  },
  header: {
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
  },
  seeMore: {
    fontSize: scaledFontSize(18),
    color: COLORS.WHITE,

  },
  link: {
    marginHorizontal:GetOptimalWidth(10),
    fontSize: scaledFontSize(14),
    backgroundColor: COLORS.APP_BLUE,
    justifyContent: 'center',
    marginBottom: GetOptimalHieght(10),
    paddingVertical: GetOptimalHieght(20),
    paddingHorizontal: GetOptimalWidth(40),
    marginTop:GetOptimalHieght(50),
    borderRadius:GetOptimalWidth(10)
  },
});
