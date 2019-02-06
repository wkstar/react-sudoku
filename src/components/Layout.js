import React from 'react';
import Cell from './Cell';
import styles from './Layout.module.css';

export const Layout = function() {
  return (
    <div className={styles.layout}>
      <div className={styles['layout-row']}>
        <Cell solution={1} />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className={styles['layout-row']}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className={styles['layout-row']}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};
