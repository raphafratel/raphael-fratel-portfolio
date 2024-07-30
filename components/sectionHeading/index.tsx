import React from "react";
import * as styles from "./styles";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading(
  { children }: SectionHeadingProps
){
  return (
    <h2 className={styles.heading}>
      {children}
    </h2>
  );
}