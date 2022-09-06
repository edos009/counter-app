import React from "react";

import styles from "./Counter.module.scss";

const Counter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>счетчик:</h1>
          <p className={styles.text}>0</p>
          <div className={styles.box_btn}>
            <button className={styles.btn_minus}>- Минус</button>
            <button className={styles.btn_plus}>Плюс +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
