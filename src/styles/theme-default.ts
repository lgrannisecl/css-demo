import color from './global/color';
import font from './global/font';

export type ThemeDefault = {
  color: any;
  font: any;
}

const themeColors = {
  background: color.white,
  fontBase: color.black,
  error: color.red
}

const themeColor = Object.assign({}, themeColors, color);

export default {
  color: themeColor,
  font,
}
