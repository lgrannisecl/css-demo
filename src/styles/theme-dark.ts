import color from './global/color';
import font from './global/font';

export type ThemeDefault = {
  color: any;
  font: any;
}

const themeColors = {
  background: color.black,
  fontBase: color.white,
  error: color.red
}

const themeColor = Object.assign({}, themeColors, color);

export default {
  color: themeColor,
  font,
}
