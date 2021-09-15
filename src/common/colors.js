const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  APP_BLUE: "#2982BC",
  SIDE_MENU_TEXT: "#7E7E7E",
  REDISH: "#E46A6A",
  PINKISH: "#E49F9F",
  LIGHT_BLUE: "#2BAFF6",
  SKY_BLUE: "#DDEBF2",
};

const lighten = (value) => {
  const MAX_HEX_VALUE = 255;
  const hexValue = Math.floor(MAX_HEX_VALUE * Math.min(value, 1)).toString(16);
  return hexValue.length < 2 ? `0${hexValue}` : hexValue;
};

const alpha = (color, value) =>
  color.startsWith("#") ? `${color}${lighten(value)}` : color;

export { alpha, lighten };

export default COLORS;
