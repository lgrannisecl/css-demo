import { ThemeFont } from './font';

export type ThemeColors = {
  background: string; // main background color
  fontError: string; // base error font color
  fontBase: string; // base font color
}

type CSSObject = {
  [key: string]: string | number;
}

export type ThemeType = {
  color: ThemeColors & CSSObject;
  font: ThemeFont,
  utils: any;
} & CSSObject;
