import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Share} from 'react-native';
import COLORS from '../../common/colors';
import {commonStyle} from '../../common/styles';
import Toast from 'react-native-toast-message';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {Icon} from 'react-native-elements';
import Clipboard from '@react-native-community/clipboard';
export default class DetailsCard extends Component {
  onShare = async message => {
    try {
      const result = await Share.share({
        message: message,
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

  getReligion = () => {
    const item = this.props.data;
    if (item.cat_numaric == 3) {
      return 'Muslim';
    } else if (item.cat_numaric == 2 && item.urdu_name == 'Hindi') {
      return 'Hindu';
    } else if (item.urdu_name == 'Sikh') {
      return 'Sikh';
    } else if (item.origen_id == 20) {
      return 'Christian';
    } else if (item.urdu_name == 'hebrew') {
      return 'Jewish';
    } else {
      return "-";
    }
  };

  render() {
    const data = this.props.data;
    console.log('Rashi', this.props.data);
    const {fav} = this?.props;
    const religion = this.getReligion();
    const name = data?.name ? data?.name : '';
    const aribic = data?.aribic ? data?.aribic : '-';
    const meaning = data?.meaning ? data?.meaning : '-';
    const gender = data?.gender ? data?.gender : '-';
    const Pronunciation = data?.Pronunciation ? data?.Pronunciation : '-';
    const numbers = data?.numbers ? data?.numbers : '-';
    const orign = data?.orign ? data?.orign : '-';
    const Rashi = data?.Rashi ? data?.Rashi : '-';

    return (
      <View>
        <View style={styles.container}>
          <View
            style={[
              styles.leftContainer,
              {
                paddingTop: GetOptimalHieght(20),
                paddingBottom: GetOptimalHieght(20),
              },
            ]}>
            <Text style={styles.title}>{'Name'}</Text>
            <Text style={styles.desc}>{name}</Text>

            {meaning && (
              <View style={styles.bottomArea}>
                <Text style={styles.title}>{'Meaning'}</Text>
                <Text style={styles.desc2}>{meaning.replace(/[^a-zA-Z]/g, ' ').replace(/\s+/g, ' ').trim()}</Text>
              </View>
            )}

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Arabic'}</Text>
              <Text style={styles.desc2}>{aribic}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Gender'}</Text>
              <Text style={styles.desc2}>{gender}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Religion'}</Text>
              <Text style={styles.desc2}>{religion}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Pronunciation'}</Text>
              <Text style={styles.desc2}>{Pronunciation}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Lucky Numbers'}</Text>
              <Text style={styles.desc2}>{numbers}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Origin'}</Text>
              <Text style={styles.desc2}>{orign}</Text>
            </View>

            <View style={styles.bottomArea}>
              <Text style={styles.title}>{'Rashi'}</Text>
              <Text style={styles.desc2}>{Rashi}</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconArea}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: fav ? COLORS.PINKISH : COLORS.WHITE},
            ]}
            onPress={this.props.addToFav}>
            <Icon
              name="hearto"
              type="antdesign"
              size={17}
              color={fav ? COLORS.WHITE : COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onShare(
                'Name: ' + data?.name + '   Meaning: ' + data?.meaning.replace(/[^a-zA-Z]/g, '').replace(/\s+/g, ' ').trim(),
              )
            }>
            <Icon
              name="share"
              type="SimpleLineIcons"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Clipboard.setString(
                'Name: ' + data?.name.replace(/[^a-zA-Z]/g, '').replace(/\s+/g, ' ').trim() + '   Meaning: ' + data?.meaning.replace(/[^a-zA-Z]/g, '').replace(/\s+/g, ' ').trim(),
              );
              Toast.show({
                type: 'success',
                text1: 'Name is copied to clipboard',
                text2: 'Name: ' + data?.name.replace(/[^a-zA-Z]/g, '').replace(/\s+/g, ' ').trim() + '   Meaning: ' + data?.meaning.replace(/[^a-zA-Z]/g, '').replace(/\s+/g, ' ').trim(),
              });
            }}>
            <Icon
              name="copy"
              type="feather"
              size={17}
              color={COLORS.SIDE_MENU_TEXT}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.seeMore} onPress={this.props.seeRelatedNames}>
          <Text style={styles.link}>Similar Names</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: GetOptimalWidth(30),
    //flexDirection: 'row',
  },
  title: {
    marginBottom: GetOptimalHieght(0),
    width: GetOptimalWidth(120),
    fontSize: scaledFontSize(16),
    // color:"#454748",
    color: '#5AC5CB',
    fontWeight: '500',
  },
  desc: {
    marginBottom: GetOptimalHieght(30),
    fontSize: scaledFontSize(30),
    //color: '#5AC5CB',
    color: '#454748',
    fontWeight: 'bold',
    borderColor: 'black',
  },
  desc2: {
    marginBottom: GetOptimalHieght(10),
    fontSize: scaledFontSize(16),
    color: '#454748',
    fontWeight: 'normal',
    borderColor: 'black',
    width: GetOptimalWidth(170),
  },
  iconArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: GetOptimalHieght(20),
  },
  leftContainer: {
    minHeight: GetOptimalHieght(38),
    margin: 0,
    // backgroundColor: '#DDEBF2',
    backgroundColor: '#F4F4F5',
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
    borderRadius: GetOptimalHieght(10),
  },
  rightContainer: {
    width: GetOptimalWidth(200),
    margin: 0,
    minHeight: GetOptimalHieght(38),
    backgroundColor: '#F4F4F5',
    justifyContent: 'center',
    paddingLeft: GetOptimalWidth(20),
    paddingRight: GetOptimalWidth(20),
  },
  button: {
    width: GetOptimalHieght(30),
    height: GetOptimalHieght(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    ...commonStyle.elevatedShadow,
    borderRadius: GetOptimalHieght(20),
    marginHorizontal: GetOptimalWidth(5),
  },
  seeMore: {
    paddingHorizontal: GetOptimalWidth(40),
  },
  link: {
    color: COLORS.BLACK,
    fontSize: scaledFontSize(16),
  },
  bottomArea: {
    flex: 1,
    flexDirection: 'row',
  },
});
