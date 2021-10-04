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

export default class NameListCard extends Component {
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
    const {item, index} = this.props;
    if (item.cat_numaric == 3) {
      return <Text style={styles.desc}>{'Muslim'}</Text>;
    } else if (item.cat_numaric == 2 && item.urdu_name == 'Hindi') {
      return <Text style={styles.desc}>{'Hindu'}</Text>;
    } else if (item.urdu_name == 'Sikh') {
      return <Text style={styles.desc}>{'Sikh'}</Text>;
    } else if (item.origen_id == 20) {
      return <Text style={styles.desc}>{'Christian'}</Text>;
    } else if (item.urdu_name == 'hebrew') {
      return <Text style={styles.desc}>{'Jewish'}</Text>;
    } else {
      return <Text style={styles.desc}>{''}</Text>;
    }
  };

  render() {
    const {item, index} = this.props;
    let fav = this.props.fav;
    return (
      <View
        style={[
          styles.item,
          {
            backgroundColor: index % 2 === 0 ? COLORS.SKY_BLUE : COLORS.WHITE,
          },
        ]}>
        <View style={styles.nameArea}>
          <Text style={styles.title}>{item.name}</Text>
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
                'Name: ' + item?.name + '   Meaning: ' + item?.meaning,
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
                'Name: ' + item.name + '   Meaning: ' + item.meaning,
              );
              Toast.show({
                type: 'success',
                text1: 'Name is copied to clipboard',
                text2: 'Name: ' + item.name + '   Meaning: ' + item.meaning,
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

        <Text numberOfLines={2} style={styles.desc}>
          {item.meaning}
        </Text>
        {this.getReligion()}
        <TouchableOpacity onPress={this.props.gotoDetails}>
          <Text style={styles.link}>{'(See More...)'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.SKY_BLUE,
    padding: GetOptimalHieght(20),
    ...commonStyle.elevatedShadow,
  },
  title: {
    fontSize: scaledFontSize(22),
    width: GetOptimalWidth(220),
    color: COLORS.BLACK,
  },
  desc: {
    fontSize: scaledFontSize(15),
    width: GetOptimalWidth(260),
    color: COLORS.BLACK,
    marginBottom: 5,
  },
  link: {
    color: '#1592E6',
    fontSize: scaledFontSize(13),
  },
  nameArea: {
    flexDirection: 'row',
    marginBottom: GetOptimalHieght(20),
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
});
