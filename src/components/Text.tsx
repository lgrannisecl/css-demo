import React from 'react';
import {css, cx} from "@emotion/css";

type Props = {
  children: string;
  className?: string;
}

const styles = {
  text: css`
    color: red;
    font-size: 1rem;
  `
}

const Text: React.FC<Props> = function(props: Props): JSX.Element {
  const { className, children } = props;
  return (
    <span className={cx(
      styles.text, {
        [className as string]: !!className
      }
    )}>{ children }</span>
  );
}

export default Text;
