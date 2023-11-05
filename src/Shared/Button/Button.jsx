import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.css";
export const Button = (props) => {
  const { link } = props;
  return (
    <Link to={link}>
      <button className={styles.btn} >
        CLICK ME
      </button>
    </Link>
  );
};