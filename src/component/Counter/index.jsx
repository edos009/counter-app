import React, { useState } from "react";

import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlerMinus = () => {
    if (count <= 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const handlerPlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.heading}>счетчик:</h1>
          <p className={styles.text}>{count}</p>
          <div className={styles.box_btn}>
            <button className={styles.btn_minus} onClick={handlerMinus}>
              - Минус
            </button>
            <button className={styles.btn_plus} onClick={handlerPlus}>
              Плюс +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
