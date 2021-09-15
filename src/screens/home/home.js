import React, {Component} from 'react';
import {View, FlatList, ImageBackground, Alert} from 'react-native';
import images from '../../common/images';
import OptionsCard from '../../components/cards/optionsCard';
import GenderOptions from '../../components/genderOptions';
import HomeHeader from '../../components/homeHeader';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {GetOptimalHieght} from '../../helpers/commonHelpers/helpers';

const typesData = [
  {
    title: 'Name of boys',
    image: images.boy,
  },
  {
    title: 'Name of girls',
    image: images.girl,
  },
  {
    title: 'Name of both',
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
    title: 'Trending names',
    image: images.trend,
  },
];
export default class Home extends Component {
  GetNames = () => {
    let data = {
      keyword: this.props?.namesData?.keyword,
      religion: this.props?.namesData?.religion,
      gender: this.props?.namesData?.gender,
      alphabet: this.props?.namesData?.alphabet,
    };
    this.props.getNames(data);
  };

  getTrendingNames = () => {
    this.props.getTrendingNames();
  };

  selectOption = option => {
    switch (option.title) {
      case 'Name of boys':
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
      case 'Name of girls':
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
      case 'Name of both':
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
        this.props.setLoading(true);
        setTimeout(() => {
          this.GetNames();
        }, 500);
        this.props.navigation.navigate('ByReligion');
        break;
      case 'Trending names':
        this.props.setKeyword('');
        this.props.setAlphabet('');
        this.props.setLoading(true);
        setTimeout(() => {
          this.getTrendingNames();
        }, 500);
        this.props.navigation.navigate('Trending');
        break;
      default:
        break;
    }
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
                <SearchBar {...this.props} />
              </View>
            </View>
          }
          keyExtractor={item => item.title}
          data={typesData}
          contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
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
        />
      </ImageBackground>
    );
  }
}
