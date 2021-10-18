import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Linking} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  SectionList,
  StatusBar,
  ImageBackground,
  FlatList,
} from 'react-native';
import COLORS from '../../common/colors';
import images from '../../common/images';
import {commonStyle} from '../../common/styles';
import BackHeader from '../../components/backHeader';
import NameListCard from '../../components/cards/nameListCard';
import GenderOptions from '../../components/genderOptions';
import ValuePickerModal from '../../components/models/valuePickerModal';
import SearchBar from '../../components/searchBar';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {nameConnect} from '../../redux/connectors/nameConnect';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }
  componentDidMount() {
    this.setState({
      title: 'Top Posts',
    });
    this.props.getBlog();
  }

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
        {this.props?.namesData?.loading ? (
          <ActivityIndicator
            style={{marginTop: 300}}
            size={'large'}></ActivityIndicator>
        ) : (
          <FlatList
            data={this.props?.namesData?.blogs}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            ListEmptyComponent={
              <View
                style={{
                  height: GetOptimalHieght(500),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>There is no post.</Text>
              </View>
            }
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(
                      'https://www.babynamemeaningz.com/' +
                        item?.blog_id +
                        '-' +
                        item?.post_link,
                    );
                  }}
                  style={{
                    margin: GetOptimalHieght(20),
                    padding: GetOptimalHieght(20),
                    minHeight: GetOptimalHieght(100),
                    flex: 1,
                    justifyContent: 'center',
                    borderColor: 'pink',
                    borderRadius: GetOptimalHieght(20),
                    backgroundColor: COLORS.SKY_BLUE,
                    ...commonStyle.elevatedShadow,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'SEGOEUI',
                      color: COLORS.BLACK,
                    }}>
                    {item?.post_title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ImageBackground>
    );
  }
}

export default nameConnect()(Blogs);

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
    fontFamily: 'SEGOEUI',
  },
  header: {
    fontSize: scaledFontSize(14),
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontFamily: 'SEGOEUI',
  },
  title: {
    fontSize: 24,
    fontFamily: 'SEGOEUI',
  },
});
