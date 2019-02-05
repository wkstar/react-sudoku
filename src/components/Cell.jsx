import React, { useState } from 'react';
import styles from './Cell.module.css';

export default function Cell() {
  const [answer, setAnswer] = useState('');

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
