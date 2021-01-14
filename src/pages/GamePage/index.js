import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const GamePage = () => {
  return (
    <div className={cx('game-page')}>
      <div className={cx('score-section')}></div>
      <div className={cx('game-section')}></div>
    </div>
  );
};

export default GamePage;
