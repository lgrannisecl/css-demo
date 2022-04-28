import logo from './logo.svg';
// import './App.css';
import { css, keyframes, cx } from '@emotion/css';

import NoLeakageText from "./components/NoLeakageText";

import './styles/global/globals';

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

const styles = {
  app: css`
      background: red;
    `,
  logo: css`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${appLogoSpin} infinite 20s linear;
    }
  `,
  header: css`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    
    /*&.blue {
      background-color: blue;
    }*/
    
    p {
      font-size: 2rem;
    }
  `,
  blue: css`
    background-color: blue;
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
    background: red;
    position: absolute;
    &:after {
      content: "Centered Content"
    }
  `
}

type AppProps = {
  isBlueTheme: boolean;
};

function App(props: AppProps): JSX.Element {
  return (
    <div className={styles.app}>
      <header className={cx([styles.header, { [styles.blue]: props.isBlueTheme }])}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NoLeakageText>Yay!</NoLeakageText>
      </header>
      <div className={styles.centeredContent} />
    </div>
  );
}

export default App;
