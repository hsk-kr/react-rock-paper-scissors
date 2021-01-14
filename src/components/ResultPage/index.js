import React, { useContext, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { GameContext, ENTRY_PAGE } from 'contexts/GameContext';

const cx = classNames.bind(styles);

const ResultPage = () => {
  const { result, setPage } = useContext(GameContext);
  const resultText = useMemo(() => {
    if (result.me > result.com) {
      return 'WIN';
    } else if (result.me < result.com) {
      return 'LOSE';
    } else {
      return 'DRAW';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('result-page')}>
      <div className={cx('result-card')}>
        <h1>{resultText}</h1>
        <hr />
        <span>ROUND: {result.round}</span>
        <span>ME: {result.me}</span>
        <span>COM: {result.com}</span>
        <hr />
        <button onClick={() => setPage(ENTRY_PAGE)}>HOME</button>
      </div>
    </div>
  );
};

export default ResultPage;
