import React, {Component} from 'react';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {SectionList} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {View, FlatList, ImageBackground, Alert, Linking} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import NameListCard from '../../components/cards/nameListCard';
import OptionsCard from '../../components/cards/optionsCard';
import GenderOptions from '../../components/genderOptions';
import HomeHeader from '../../components/homeHeader';
import AlphabetPickerModal from '../../components/models/alphabetPicker';
import OriginPicker from '../../components/models/originPicker';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {AdMobBanner} from 'react-native-admob';

import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {Platform} from 'react-native';

const typesData = [
  {
    title: 'Boy Names',
    image: images.boy,
  },
  {
    title: 'Girl Names',
    image: images.girl,
  },
  {
    title: 'Name of Both',
    image: images.both,
  },
  // {
  //   title: 'Search Alphabetic',
  //   image: images.letters,
  // },
  {
    title: 'Top Posts',
    image: images.blogIcon,
  },
  {
    title: 'Search Religious',
    image: images.book,
  },
  {
    title: 'Trending Names',
    image: images.trend,
  },
  {
    title: 'My Favorite',
    image: images.heart,
  },
];
export default class Home extends Component {
  GetNames = () => {
    let data = {
      keyword: this.props?.namesData?.keyword,
      religion: '',
      gender: this.props?.namesData?.gender,
      alphabet: this.props?.namesData?.alphabet,
      origin: this.props?.namesData?.origin,
    };
    this.props.getNames(data);
  };

  getTrendingNames = () => {
    this.props.getTrendingNames();
  };

  resetStateRedux = () => {
    this.props.setOrigin('');
    this.props.setKeyword('');
    this.props.setReligion('');
    this.props.setAlphabet('');
  };

  UNSAFE_componentWillMount() {
    this.props.resetState();
    this.props.getWorldTrendingNames();
    this.props.getAllOrigin();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.setReligion('');
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  selectOption = option => {
    switch (option.title) {
      case 'Boy Names':
        this.props.setGender({
          value: 'Boy',
          id: 0,
        });
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);

        this.props.navigation.navigate('NameListing', {data: option.title});
        break;
      case 'Girl Names':
        this.props.setGender({
          value: 'Girl',
          id: 1,
        });
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('NameListing', {data: option.title});
        break;
      case 'Name of Both':
        this.props.setGender({
          value: '',
          id: 2,
        });
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('NameListing', {data: option.title});
        break;
      case 'Search Alphabetic':
        this.props.navigation.navigate('ByAlphabets');
        break;
      case 'Search Religious':
        this.props.navigation.navigate('ByReligion');
        break;
      case 'Trending Names':
        this.props.setLoading(true);
        setTimeout(() => {
          this.getTrendingNames();
        }, 500);
        this.props.navigation.navigate('Trending');
        break;
      case 'Top Posts':
        this.props.navigation.navigate('Blogs');
        break;
      case 'My Favorite':
        this.props.navigation.navigate('Favorite');
        break;
      default:
        break;
    }
  };

  ListEmptyComponent = () => {
    return (
      <View
        style={{
          height: GetOptimalHieght(400),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{'We are looking for World Trending Names'}</Text>
        <Text style={styles.textDesc}>{'We are sorry for inconvenience.'}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.getWorldTrendingNames();
          }}>
          <Text style={styles.textDesc}>{'Try Again'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  onFailToRecieveAd = error => console.log(error);

  render() {
    return (
      <ImageBackground
        source={images.home}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover">
        <HomeHeader
          gotoFav={() => {
            this.props.navigation.navigate('Favorite');
          }}
          openDrawer={() => this.props.navigation.openDrawer()}
          gotoHome={() => {
            this.props.navigation.navigate('Home');
          }}
          like={() => {
            Linking.openURL('https://www.babynamemeaningz.com/');
          }}
          share={() => {
            alert('Share');
          }}
        />
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                alignItems: 'center',
                marginBottom: GetOptimalHieght(30),
              }}>
              <GenderOptions {...this.props} />
              <View style={{flexDirection: 'row'}}>
                <OriginPicker {...this.props} />
                <AlphabetPickerModal {...this.props} />
              </View>
              <SearchBar onSelect={() => {}} {...this.props} />
            </View>
          }
          keyExtractor={item => item.title}
          data={typesData}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: GetOptimalHieght(100),
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <OptionsCard
                data={item}
                onPress={() => this.selectOption(item)}
              />
            );
          }}
          ListFooterComponent={
            <View
              style={{
                marginTop: 50,
                flex: 1,
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <AdMobBanner
                  adSize="largeBanner"
                  adUnitID={
                    Platform.OS == 'android'
                      ? 'ca-app-pub-8758033824132830/4208333667'
                      : 'ca-app-pub-8758033824132830/4276933653'
                  }
                  didFailToReceiveAdWithError={this.onFailToRecieveAd}
                  onAdFailedToLoad={this.onFailToRecieveAd}
                />
              </View>
              {this.props?.namesData?.WT_loading === true ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator size="large" color={COLORS.BLACK} />
                </View>
              ) : (
                <SectionList
                  scrollEnabled={false}
                  sections={this.props?.namesData?.worldTrendingNamesList}
                  keyExtractor={(item, index) => item + index}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={this.ListEmptyComponent}
                  renderItem={({item, index}) => {
                    const fav = this.props?.namesData?.favorites?.filter(
                      x => x.id == item?.id,
                    );
                    return (
                      <NameListCard
                        fav={fav?.length > 0 ? true : false}
                        item={item}
                        index={index}
                        addToFav={() => {
                          this.props.addToFav(item);
                        }}
                        gotoDetails={() => {
                          this.props.setDetailItem(item);
                          setTimeout(() => {
                            this.props.navigation.navigate('NameDetails');
                          }, 200);
                        }}
                      />
                    );
                  }}
                  renderSectionHeader={({section: {title}}) => (
                    <View style={styles.headerBox}>
                      <Text style={styles.header}>{title.toUpperCase()}</Text>
                    </View>
                  )}
                />
              )}
            </View>
          }
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textDesc: {
    fontSize: 14,
    color: COLORS.APP_BLUE,
    fontFamily: 'SEGOEUI',
  },
  headerBox: {
    fontSize: scaledFontSize(14),
    fontFamily: 'SEGOEUI',
    backgroundColor: COLORS.APP_BLUE,
    justifyContent: 'center',
    marginBottom: GetOptimalHieght(10),
    paddingVertical: GetOptimalHieght(20),
    paddingHorizontal: GetOptimalWidth(40),
    marginTop: GetOptimalHieght(50),
    borderRadius: GetOptimalWidth(10),
    width: '95%',
    alignSelf: 'center',
  },
  header: {
    fontSize: scaledFontSize(18),
    fontFamily: 'SEGOEUI',
    color: COLORS.WHITE,
  },
});
