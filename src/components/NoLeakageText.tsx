import React from 'react';
import {css, cx} from "@emotion/css";

import Text from "./Text";

type NoLeakageTextProps = {
  children: React.ReactNode;
  className?: string;
}

const styles = {
  el: css`
    color: red;
    font-size: 1rem;
  `,
  text: css`
    margin: .25rem;
  `,
  noText: css`
    color: purple;
    font-size: 1.25em;
  `,
  leakageText: css`
    color: orange;
    font-size: 1.5em;
  `
}

const NoLeakageText: React.FC<NoLeakageTextProps> = function(props: NoLeakageTextProps): JSX.Element {
  const { className, children } = props;
  const cls: string = cx(
    styles.el, {
      [className as string]: !!className
    }
  );
  return (
    <h2 className={cls}>
      <Text className={cx(styles.text, styles.noText )} >No CSS</Text>
      <Text className={cx(styles.text, styles.leakageText)} >Leakage</Text>
      { children ? ` ${children}` : null }
    </h2>
  );
}

export default NoLeakageText;
