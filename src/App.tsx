import { useContext } from "react";
import logo from './logo.svg';
import { css, keyframes, cx } from '@emotion/css';
import themeBuilder from "./styles/themeBuilder";

import NoLeakageText from "./components/NoLeakageText";
import { ThemeContext } from "./components/ThemeProvider";

import { ThemeType } from "./styles/global/ThemeType";

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const centeredBlock = css`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App(): JSX.Element | null {

  const theme = useContext(ThemeContext) as ThemeType;

  /* eslint-disable-next-line */
  console.log('App theme', theme);

  if (!theme) return null;

  const styles = themeBuilder(theme,(theme) => ({
    app: css`
      background: ${ theme.color.background };
    `,
    logo: css`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${appLogoSpin} infinite 20s linear;
    }
  `,
    header: css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    p {
      font-size: 2rem;
    }
  `,
    headerText: css`
    font-size: 4em;
  `,
    link: css`
    color: #61dafb;
  `,
    centeredContent: css`
    ${centeredBlock};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 10vh;
    height: 10vh;
    background: ${theme.color.red};
    position: absolute;
    &:after {
      content: "Centered Content"
    }
  `
  }));

  if (!styles) return null;

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <NoLeakageText className={styles.headerText}>Yay!</NoLeakageText>
      </header>
      <div className={styles.centeredContent} />
    </div>
  );
}

export default App;
