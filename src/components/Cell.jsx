import React, { useState } from 'react';
import styles from './Cell.module.css';

export default function Cell(props) {
  const { cell } = props;
  const [answer, setAnswer] = useState(() => {
    if (cell.getRevealed()) {
      return cell.getSolution();
    }
  });
  const [correct, setCorrect] = useState();

  const handleAnswerChange = event => {
    const newAnswer = event.target.value;
    const isCorrectFormat = /^[0-9]$|^$/g.test(newAnswer);
    if (isCorrectFormat) {
      setAnswer(newAnswer);
    }
    const isCorrect = cell.getSolution().toString() === newAnswer || newAnswer === '';
    setCorrect(isCorrect);
  };

  const cellInputWrongClass = (correct === false) ? styles.cell_input_wrong : '';
  return (
    <div className={styles.cell}>
      <input className={`${styles.cell_input} ${cellInputWrongClass}`} value={answer} onChange={handleAnswerChange} />
    </div>
  );
}
