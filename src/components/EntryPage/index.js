import React, { useCallback, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { GameContext, GAME_PAGE } from 'contexts/GameContext';

const cx = classNames.bind(styles);

const EntryPage = () => {
  const [values, setValues] = useState({
    round: '1',
  });
  const { setRound, setPage } = useContext(GameContext);

  const handleChange = useCallback(
    (name) => (e) => setValues({ ...values, [name]: e.target.value }),
    []
  );

  const handleStart = useCallback(() => {
    setRound(values.round);
    setPage(GAME_PAGE);
  }, []);

  return (
    <div class={cx('entry-page')}>
      <div>
        <h1>Rock Paper Scissors</h1>
        <div class={cx('round')}>
          <span>Round</span>
          <select value={values.round} onChange={handleChange('round')}>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="button" onClick={handleStart}>
          Game Start
        </button>
      </div>
    </div>
  );
};

export default EntryPage;
