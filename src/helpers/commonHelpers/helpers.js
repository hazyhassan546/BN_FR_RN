import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const { width: fullWidth, height: fullHeight } =
  Dimensions.get("window");
const DESIGN_DIMENSIONS = { width: 375, height: 812 };

/// to get optimal height  for responsiveness
export const GetOptimalHieght = (height) => {
  return fullHeight * (height / DESIGN_DIMENSIONS.height);
};

/// to get optimal width  for responsiveness
export const GetOptimalWidth = (width) => {
  return fullWidth * (width / DESIGN_DIMENSIONS.width);
};

/// to get optimal fontsize  for responsiveness
export const scaledFontSize = (fontSize) => {
  return RFValue(fontSize);
};
