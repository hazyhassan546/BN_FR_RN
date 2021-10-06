import React, {Component} from 'react';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {SectionList} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {View, FlatList, ImageBackground, Alert} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import NameListCard from '../../components/cards/nameListCard';
import OptionsCard from '../../components/cards/optionsCard';
import GenderOptions from '../../components/genderOptions';
import HomeHeader from '../../components/homeHeader';
import OriginPicker from '../../components/models/originPicker';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';

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
  {
    title: 'Search Alphabetic',
    image: images.letters,
  },
  {
    title: 'Search Religious',
    image: images.book,
  },
  {
    title: 'Trending Names',
    image: images.trend,
  }
];
export default class Home extends Component {
  GetNames = () => {
    let data = {
      keyword: this.props?.namesData?.keyword,
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      alphabet: this.props?.namesData?.alphabet,
      origin: this.props?.namesData?.origin,
    };
    this.props.getNames(data);
  };

  getTrendingNames = () => {
    this.props.getTrendingNames();
  };

  UNSAFE_componentWillMount() {
    this.props.getWorldTrendingNames();
  }

  selectOption = option => {
    switch (option.title) {
      case 'Boy Names':
        this.props.setGender({
          value: 'Boy',
          id: 0,
        });
        this.props.setKeyword('');
        this.props.setAlphabet('');
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
        this.props.setKeyword('');
        this.props.setAlphabet('');
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
        this.props.setKeyword('');
        this.props.setAlphabet('');
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('NameListing', {data: option.title});
        break;
      case 'Search Alphabetic':
        this.props.setKeyword('');
        this.props.setAlphabet('');
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('ByAlphabets');
        break;
      case 'Search Religious':
        this.props.setKeyword('');
        this.props.setAlphabet('');
        this.props.setOrigin('');
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('ByReligion');
        break;
      case 'Trending Names':
        this.props.setKeyword('');
        this.props.setAlphabet('');
        this.props.setOrigin('');
        this.props.setLoading(true);
        setTimeout(() => {
          this.getTrendingNames();
        }, 500);
        this.props.navigation.navigate('Trending');
        break;
      case 'My Favorites':
        this.props.navigation.navigate('Favorite');
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
      </View>
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
        <HomeHeader
          openDrawer={() => this.props.navigation.openDrawer()}
          gotoHome={() => {
            this.props.navigation.navigate('Home');
          }}
          like={() => {
            Alert.alert(
              'Baby Name Mobile Application',
              'Thanks a lot to like Baby Name app successfully',
            );
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
                <ValuePickerModal
                  {...this.props}
                  onPress={() => {
                    this.props.navigation.navigate('ByReligion');
                  }}
                />
                <OriginPicker
                  {...this.props}
                  onPress={() => {
                    // this.props.navigation.navigate('ByReligion');
                  }}
                />
              </View>
              <SearchBar {...this.props} />
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
                flex:1,
              }}>
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
  },
  headerBox: {
    fontSize: scaledFontSize(14),
    backgroundColor: COLORS.APP_BLUE,
    justifyContent: 'center',
    marginBottom: GetOptimalHieght(10),
    paddingVertical: GetOptimalHieght(20),
    paddingHorizontal: GetOptimalWidth(40),
    marginTop:GetOptimalHieght(50),
    borderRadius:GetOptimalWidth(10),
    width:"95%",
    alignSelf:"center"
  },
  header: {
    fontSize: scaledFontSize(18),
    color: COLORS.WHITE,
  },
});
