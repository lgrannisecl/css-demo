export type FontWeight = {
  bold: string | number;
  normal: string | number;
  light: string | number;
}

const weight: FontWeight = {
  bold: '700',
  normal: '500',
  light: '300'
};

export type FontFamily = {
  base: string;
  code: string;
}
const family: FontFamily = {
  base: 'Beatrice, Arial, Roboto, "Helvetica Neue", "Noto Sans", sans-serif',
  code: `source-code-pro, Menlo, Monaco, Consolas, "Courier New"`
};

export type ThemeFont = {
  family: FontFamily;
  weight: FontWeight;
}

export default {
  family,
  weight
}
