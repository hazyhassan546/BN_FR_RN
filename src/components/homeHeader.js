import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  Share,
} from 'react-native';
import COLORS from '../common/colors';
import images from '../common/images';
import {Icon} from 'react-native-elements';
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from '../helpers/commonHelpers/helpers';
import {commonStyle} from '../common/styles';
import {nameConnect} from "../redux/connectors/nameConnect"

class HomeHeader extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          Platform.OS === 'ios'
            ? 'https://apps.apple.com'
            : 'https://play.google.com/store/apps/details?id=com.babynameapp_rn',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.openDrawer}
          style={[styles.touchableHide, {position: 'absolute', left: 10}]}>
          <Icon
            name="menu"
            type="MaterialIcons"
            color={COLORS.WHITE}
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.gotoHome}
          style={styles.buttonStyle}>
          <Image source={images.babyImage} style={styles.imageStyle} />
        </TouchableOpacity>
        <View style={[styles.buttonRow, {position: 'absolute', right: 10}]}>
          <TouchableOpacity onPress={this.props.like} style={styles.touchable}>
            <Icon
              size={20}
              name="like1"
              type="antdesign"
              color={COLORS.APP_BLUE}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onShare} style={styles.touchable}>
            <Icon
              size={20}
              name="share"
              type="SimpleLineIcons"
              color={COLORS.APP_BLUE}
            />
          </TouchableOpacity>
          {this.props.namesData.newName ? (
            <TouchableOpacity
              onPress={this.props.gotoFav}
              style={[styles.favButtonStyle, {backgroundColor:null}]}>
              <Image source={images.newName} style={styles.imageButtonStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={this.props.gotoFav}
              style={[styles.favButtonStyle, {backgroundColor:COLORS.WHITE}]}>
               <Image source={images.newNameNormal} style={styles.imageButtonStyle} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
export default nameConnect()(HomeHeader);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.APP_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: GetOptimalHieght(10),
    paddingHorizontal: GetOptimalWidth(20),
    paddingTop:
      Platform.OS === 'ios'
        ? GetOptimalHieght(40)
        : StatusBar.currentHeight + 10,
  },
  imageStyle: {
    width: GetOptimalHieght(66),
    height: GetOptimalHieght(66),
  },
  buttonStyle: {
    width: GetOptimalHieght(80),
    height: GetOptimalHieght(80),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GetOptimalHieght(15),
    marginHorizontal: GetOptimalWidth(5),
    ...commonStyle.elevatedShadow,
  },
  touchableHide: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GetOptimalHieght(15),
  },
  buttonRow: {
    flexDirection: 'row',
  },
  imageButtonStyle: {
    width: GetOptimalHieght(28),
    height: GetOptimalHieght(28),
    position: 'absolute',
    resizeMode:"contain"
  },
  favButtonStyle: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.REDISH,
    borderRadius: GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    ...commonStyle.elevatedShadow,
  },
});
