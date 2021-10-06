import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../common/colors';
import {commonStyle} from '../../common/styles';
import {
  GetOptimalHieght,
  GetOptimalWidth,
  scaledFontSize,
} from '../../helpers/commonHelpers/helpers';

export default class OptionsCard extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Image source={this.props.data.image} style={styles.imageStyle} />
        <Text style={styles.title}> {this.props.data.title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(150),
    height:GetOptimalHieght(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginVertical: GetOptimalHieght(10),
    marginHorizontal: GetOptimalWidth(10),
    paddingVertical: GetOptimalHieght(20),
    borderRadius: GetOptimalHieght(10),
    ...commonStyle.elevatedShadow,
  },
  imageStyle: {
    width: GetOptimalWidth(130),
    height: GetOptimalHieght(50),
    resizeMode: 'contain',
    marginBottom: GetOptimalHieght(10),
  },
  title: {
    fontSize: scaledFontSize(14),
    color: COLORS.BLACK,
    width: GetOptimalWidth(120),
    textAlign:"center"
  },
});
