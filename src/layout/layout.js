import React from "react";
import styles from './layout.module.css'

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 min-h-[75%] grid md:grid-cols-1 lg:grid-cols-2 shadow-lg">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud1}></div>
          <div className={styles.cloud2}></div>
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center py-10"> {children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
