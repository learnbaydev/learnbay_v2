// components/Navigation.js
import React, { useEffect, useState } from 'react';
import styles from './navigation.module.css';

const Navigation = ({ progress, setProgress }) => {
  const buttons = ['Home', 'Service', 'About', 'Contact', 'blog'];

  const handleClick = (button) => {
    setProgress(button);
  };

  useEffect(() => {
    const currentIndex = buttons.indexOf(progress);
    const progressBar = (currentIndex / (buttons.length - 1)) * 100;
    setProgress(progressBar);
  }, [progress]);

  return (
    <div className={styles.navigation}>
      {buttons.map((button) => (
        <button key={button} onClick={() => handleClick(button)} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
