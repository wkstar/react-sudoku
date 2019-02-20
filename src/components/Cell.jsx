import React, { useState } from 'react';
import styles from './Cell.module.css';

export default function Cell(props) {
  const { cell } = props;
  const [answer, setAnswer] = useState(null);


  const handleAnswerChange = event => {
    const newAnswer = event.target.value;
    const isCorrectFormat = /^[0-9]$|^$/g.test(newAnswer);
    if (isCorrectFormat) {
      setAnswer(newAnswer);
    }
  };

  return (
    <div className={styles.cell}>
      <input className={styles.cell_input} value={cell.getSolution()} onChange={handleAnswerChange} />
    </div>
  );
}
