import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import COLORS from '../../common/colors';
import {commonStyle} from '../../common/styles';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';
import {Icon} from 'react-native-elements';
import images from '../../common/images';
import Modal from 'react-native-modal';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {ScrollView} from 'react-native';

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function AlphabetPickerModal(props) {
  const [visible, setVisible] = useState(false);

  const hideMenu = text => {
    if (text == 'None') {
      props.setSearchType('');
      text = '';
    }
    props.setAlphabet(text);
    setVisible(false);
  };

  const showMenu = () => setVisible(true);
  return (
    <Menu
      visible={visible}
      anchor={
        <View>
          <TouchableOpacity
            onPress={() => {
              showMenu();
            }}
            style={styles.container}>
            {props?.namesData?.alphabet == '' ? (
              <Text style={styles.title}>{'Alphabets'}</Text>
            ) : (
              <Text style={styles.title}>
                {props?.namesData?.alphabet?.toUpperCase()}
              </Text>
            )}
            <Image source={images.down} style={styles.downArrow} />
          </TouchableOpacity>
        </View>
      }
      onRequestClose={() => setVisible(false)}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          height: 400,
        }}>
        {alphabet.map((item, index) => {
          return (
            <MenuItem
              key={index}
              style={styles.itemStyle}
              onPress={() => hideMenu(item)}>
              {item.toUpperCase()}
            </MenuItem>
          );
        })}
      </ScrollView>
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(150),
    height: GetOptimalHieght(38),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: GetOptimalWidth(15),
    ...commonStyle.elevatedShadow,
  },
  downArrow: {
    width: GetOptimalHieght(15),
    height: GetOptimalHieght(15),
    resizeMode: 'contain',
  },
  itemStyle: {
    width: GetOptimalHieght(100),
    fontSize: scaledFontSize(18),
    fontFamily: 'SEGOEUI',
  },
  title: {
    fontSize: scaledFontSize(18),
    fontFamily: 'SEGOEUI',
  },
});
