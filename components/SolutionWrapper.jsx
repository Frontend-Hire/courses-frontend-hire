import React from 'react';
import styles from './SolutionWrapper.module.css';

export default function SolutionWrapper({ children }) {
  const [isSolutionShown, setIsSolutionShown] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${isSolutionShown ? styles.hide : styles.hiddenSolution}`}
      >
        <button onClick={() => setIsSolutionShown(true)}>Show Solution</button>
      </div>
      {children}
    </div>
  );
}
