import React, { Component, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import COLORS from "../../common/colors";
import { commonStyle } from "../../common/styles";
import {
  GetOptimalHieght,
  GetOptimalWidth,
} from "../../helpers/commonHelpers/helpers";
import { Icon } from "react-native-elements";
import images from "../../common/images";
import Modal from "react-native-modal";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
const data = ["None", "Islam", "Hinduism", "Jewish", "Christianity", "Sikh"];

export default function ValuePickerModal(props) {
  const [visible, setVisible] = useState(false);

  const hideMenu = (text) => {
    console.log(text);
    if (text == "None") text = "";
    props.setReligion(text);
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
            style={styles.container}
          >
            {props?.namesData?.religion == "" ? (
              <Text>{"By Religion"}</Text>
            ) : (
              <Text>{props?.namesData?.religion}</Text>
            )}
            <Image source={images.down} style={styles.downArrow} />
          </TouchableOpacity>
        </View>
      }
      onRequestClose={() => setVisible(false)}
    >
      {data.map((item, index) => {
        return (
          <MenuItem
            key={index}
            style={styles.itemStyle}
            onPress={() => hideMenu(item)}
          >
            {item}
          </MenuItem>
        );
      })}
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    width: GetOptimalWidth(120),
    height: GetOptimalHieght(33),
    backgroundColor: COLORS.WHITE,
    borderRadius: GetOptimalWidth(5),
    ...commonStyle.elevatedShadow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  downArrow: {
    width: GetOptimalHieght(15),
    height: GetOptimalHieght(15),
    resizeMode: "contain",
  },
  itemStyle: {
    width: GetOptimalHieght(225),
  },
});
