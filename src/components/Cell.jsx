import React, { useState } from 'react';
import styles from './Cell.module.css';
import SudukoGrid from '../logic/SudukoGrid';

export default function Cell(props) {
  const { solution } = props;
  const [answer, setAnswer] = useState(solution);

  const [solutions, setSolutions] = useState(() => {
    window.sGrid = new SudukoGrid();
    return window.sGrid.rows;
  });

  console.log({solutions});

  const handleAnswerChange = event => {
    const newAnswer = event.target.value;
    const isCorrectFormat = /^[0-9]$|^$/g.test(newAnswer);
    if (isCorrectFormat) {
      setAnswer(newAnswer);
    }
  };

  return (
    <div className={styles.cell}>
      <input className={styles.cell_input} value={answer} onChange={handleAnswerChange} />
    </div>
  );
}
