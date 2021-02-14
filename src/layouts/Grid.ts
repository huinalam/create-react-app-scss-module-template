import React from "react";
import styles from "./Grid.module.scss";

export enum VerticalAlignment {
  Top,
  Center,
  Bottom
}

export enum HorizontalAlignment {
  Left,
  Center,
  Right
}

// React.HTMLAttributes 참조
interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  /**
   * 수직 정렬
   */
  verticalAlignment?: VerticalAlignment,
  /**
   * 수평 정렬
   */
  horizontalAlignment?: HorizontalAlignment
}

function createCssModule(domName: string, cssName: string, props: LayoutProps) {
  const copiedProps = { ...props };

  // react props로 보낼 시, react에서 사용하지 않는 type은 전달하지 않도록 함
  delete copiedProps.horizontalAlignment;
  delete copiedProps.verticalAlignment;

  return React.createElement(domName, {
    ...copiedProps,
    className: `${cssName} ${props.className}`
  });
}

/**
 * 정렬 형태를 만들 수 있는 Grid
 * @param layoutProps 
 */
export const SingleComponentGrid = (layoutProps: LayoutProps) => {
  let className = `${styles.Flex} `;
  switch (layoutProps.horizontalAlignment) {
    case HorizontalAlignment.Left:
      className += `${styles.Left}`;
      break;
    case HorizontalAlignment.Right:
      className += `${styles.Right}`;
      break;
    case HorizontalAlignment.Center:
      className += `${styles.HorizontalCenter}`;
      break;
    default:
      className += `${styles.HorizontalCenter}`;
      break;
  }

  className += " ";
  switch (layoutProps.verticalAlignment) {
    case VerticalAlignment.Top:
      className += `${styles.Top}`;
      break;
    case VerticalAlignment.Bottom:
      className += `${styles.Bottom}`;
      break;
    case VerticalAlignment.Center:
      className += `${styles.VerticalCenter}`;
      break;
    default:
      className += `${styles.VerticalCenter}`;
      break;
  }

  return createCssModule("div", className, layoutProps);
};