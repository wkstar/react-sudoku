import React, { useState } from 'react';
import Cell from './Cell';
import styles from './Layout.module.css';
import SudukoGrid from '../logic/SudukoGrid';

export const Layout = function() {
  const [sudukoGrid] = useState(() => {
    return new SudukoGrid();
  });

  const { cells } = sudukoGrid;
  return (
    <div className={styles.layout}>
      <div className={styles['layout-row']}>
        {cells.map((cell, i) => (
          <Cell key={i} cell={cell} />
        ))}
      </div>
    </div>
  );
};
