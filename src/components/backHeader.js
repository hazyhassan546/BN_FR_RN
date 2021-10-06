import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import COLORS from '../common/colors';
import images from '../common/images';
import {Icon} from 'react-native-elements';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../helpers/commonHelpers/helpers';
import {commonStyle} from '../common/styles';
import {nameConnect} from '../redux/connectors/nameConnect';

class BackHeader extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: COLORS.APP_BLUE,
            height:
              Platform.OS === 'ios'
                ? GetOptimalHieght(30)
                : GetOptimalHieght(10),
          }}></View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={this.props.onBackPress}
            style={[styles.touchableHide, {position: 'absolute', left: 20}]}>
            <Icon name="arrow-back" type="MaterialIcons" color={COLORS.WHITE} />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>

          {this.props.namesData.newName ? (
            <TouchableOpacity
              onPress={this.props.gotoHome}
              style={[styles.buttonStyle, {position: 'absolute', right: 25,backgroundColor:null}]}>
              <Image source={images.newName} style={styles.imageStyle} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={this.props.gotoHome}
              style={[styles.buttonStyle, {position: 'absolute', right: 25,backgroundColor:COLORS.WHITE}]}>
               <Image source={images.newNameNormal} style={styles.imageStyle} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
export default nameConnect()(BackHeader);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.APP_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: GetOptimalHieght(10),
    paddingHorizontal: GetOptimalWidth(20),
    height: GetOptimalHieght(70),
  },
  imageStyle: {
    width: GetOptimalHieght(28),
    height: GetOptimalHieght(28),
    position: 'absolute',
    resizeMode:"contain"
  },
  buttonStyle: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.REDISH,
    borderRadius: GetOptimalHieght(40),
    justifyContent: 'center',
    alignItems: 'center',
    ...commonStyle.elevatedShadow,
  },
  touchable: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GetOptimalHieght(15),
    marginHorizontal: GetOptimalWidth(5),
  },
  touchableHide: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: GetOptimalHieght(15),
  },
  title: {
    color: COLORS.WHITE,
    fontSize: scaledFontSize(22),
    fontWeight: '500',
    fontFamily:"SEGOEUI",
  },
});
