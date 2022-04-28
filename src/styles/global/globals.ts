import { injectGlobal } from '@emotion/css'
import font from './font';
import { ThemeType } from "./ThemeType";

const fontName = 'Beatrice';

export default function setGlobalCss(theme: ThemeType): void {
  injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-bold-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-bold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-bolditalic-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-bolditalic-webfont.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-regular-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-regularitalic-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-regularitalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-semibold-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-semibold-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;

  }

  @font-face {
    font-family: ${fontName};
    src: url('/fonts/beatrice-semibolditalic-webfont.woff2') format('woff2'),
    url('/fonts/beatrice-semibolditalic-webfont.woff') format('woff');
    font-weight: 500;
    font-style: italic;

  }

  body {
    margin: 0;
    font-size: 100%;
    font-family: ${theme.font.family.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: ${theme.font.family.code},
    monospace;
  }
`;
};
