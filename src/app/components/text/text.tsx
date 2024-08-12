import styles from "./text.module.css";
import React from "react";

export interface TextProps {
    children: React.JSX.Element;
}
export default function Text(props: TextProps) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}
