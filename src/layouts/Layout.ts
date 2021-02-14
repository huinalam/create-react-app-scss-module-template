import * as React from 'react';
import styles from './Layout.module.scss';

// React.HTMLAttributes 참조
interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

function createCssModule(domName: string, cssName: string, props: LayoutProps) {
  return React.createElement(domName, {
    ...props,
    className: `${cssName} ${props.className}`
  });
}

export const Test = (props: LayoutProps) => createCssModule("div", styles.test, props);