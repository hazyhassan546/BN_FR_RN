import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import BackHeader from '../../components/backHeader';
import NameListCard from '../../components/cards/nameListCard';
import GenderOptions from '../../components/genderOptions';
import AlphabetPickerModal from '../../components/models/alphabetPicker';
import OriginPicker from '../../components/models/originPicker';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import favourites from '../favourites';
export default class NameListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  componentDidMount() {
    this.setState({
      title: this.props.route.params.data,
    });
  }

  setTitle = title => {
    this.setState({
      title: title,
    });
  };

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

  ListEmptyComponent = () => {
    return (
      <View
        style={{
          height: GetOptimalHieght(400),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={images.missing} style={styles.imageStyle} />
        <Text>{'Sorry! your searched names does not exist'}</Text>
        <Text style={styles.textDesc}>{'Try with another name'}</Text>
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
        <BackHeader
          title={this.state.title}
          onBackPress={() => {
            this.props.navigation.goBack();
          }}
          gotoHome={() => {
            this.props.navigation.navigate('Favorite');
          }}
        />
        <View
          style={{
            alignItems: 'center',
            marginBottom: GetOptimalHieght(30),
          }}>
          <GenderOptions {...this.props} />
          <View style={{flexDirection: 'row'}}>
            <OriginPicker
              {...this.props}
              onSelect={() => {
                this.setTitle('By Origin');
                this.GetNames();
              }}
            />
            <AlphabetPickerModal
              {...this.props}
              onSelect={() => {
                this.setTitle('By Alphabet');
                this.GetNames();
              }}
            />
          </View>
          <SearchBar
            onSelect={() => {
              this.setTitle('By Keyword');
            }}
            {...this.props}
          />
        </View>
        {this.props?.namesData?.loading === true ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color={COLORS.BLACK} />
          </View>
        ) : (
          <SectionList
            sections={this.props?.namesData?.namesList}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={this.ListEmptyComponent}
            renderItem={({item, index}) => {
              const fav = this.props?.namesData?.favorites?.filter(
                x => x.id == item?.id,
              );
              return (
                <NameListCard
                  fav={fav.length > 0 ? true : false}
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
    fontFamily: 'SEGOEUI',
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
    fontFamily: 'SEGOEUI',
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontFamily: 'SEGOEUI',
  },
  textDesc: {
    fontSize: 14,
    fontFamily: 'SEGOEUI',
    color: COLORS.APP_BLUE,
  },
  imageStyle: {
    width: GetOptimalHieght(100),
    height: GetOptimalHieght(100),
    resizeMode: 'contain',
    marginBottom: GetOptimalHieght(30),
  },
});
