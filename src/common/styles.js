import { Dimensions, Platform, StyleSheet } from "react-native";
import COLORS, { alpha } from "../common/colors";

const SHADOW_SIZE = Platform.select({ ios: 2, android: 10 });

export const commonStyle = StyleSheet.create({
  elevatedShadow: {
    shadowColor: alpha(COLORS.BLACK, 0.4),
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: SHADOW_SIZE,
  },
});
