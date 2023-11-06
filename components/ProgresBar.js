// components/ProgressBar.js
import React from 'react';
import styles from './progress.module.css';
import { ImLocation } from 'react-icons/im';

const ProgressBar = ({ progress }) => {
  const iconPosition = `${progress}%`;

  const iconStyle = {
    left: `calc(${iconPosition}%)`,
  };

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.filler} style={{ width: `${progress}%` }}>
        <div className={styles.iconContainer} style={iconStyle}>
          <div className={styles.icon}>
            <ImLocation className={styles.iconLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
