import { ReactNode } from "react";
import styles from "./header-title.module.css";

type HeadingProps = {
  heading?: string;
  title: string;
  colorTitle?: string;
  subTitle?: string;
  styles?: React.CSSProperties;
};

const HeaderTitle = (props: HeadingProps) => {
  return (
    <div className={styles.wrapper} style={props.styles}>
      <p style={props.styles}>{props.heading}</p>
      <h1 style={props.styles}>
        {props.title} <span>{props.colorTitle}</span>
      </h1>
      <div style={props.styles} className={styles.border}></div>
      <p style={props.styles}>{props.subTitle}</p>
    </div>
  );
};

export default HeaderTitle;
