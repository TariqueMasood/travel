import { ReactNode } from "react";
import styles from "./header-title.module.css";

type HeadingProps = {
  title: string;
  subTitle?: string;
  styles?: React.CSSProperties;
};

const HeaderTitle = (props: HeadingProps) => {
  return (
    <div className={styles.wrapper} style={props.styles}>
      <h1 style={props.styles}>{props.title}</h1>
      <p style={props.styles}>{props.subTitle}</p>
    </div>
  );
};

export default HeaderTitle;
