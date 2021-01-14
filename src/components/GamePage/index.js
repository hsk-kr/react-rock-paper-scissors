import React, {
  useCallback,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
} from '@fortawesome/free-regular-svg-icons';
import { GameContext, RESULT_PAGE } from 'contexts/GameContext';

const NONE = -1;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const cx = classNames.bind(styles);

const GamePage = () => {
  const [score, setScore] = useState({
    round: 1,
    me: 0,
    com: 0,
  });
  const [myChoice, setMyChoice] = useState(NONE);
  const { round, setPage, setResult } = useContext(GameContext);
  const gameEnd = useMemo(() => score.round > round, [score, round]);

  const handleSelect = useCallback(
    (choice) => () => {
      if (myChoice !== NONE) return;

      setMyChoice(choice);
    },
    [myChoice]
  );

  useEffect(() => {
    if (gameEnd) {
      setResult({ ...score, round: score.round - 1 });
      setPage(RESULT_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myChoice]);

  // Computer select when user chose one
  useEffect(() => {
    if (myChoice === NONE) return;

    const icons = document.getElementsByClassName(cx('icon'));
    let numOfChange = parseInt(Math.random() * 10) + 5;
    let com = parseInt(Math.random() * 3);
    let changeDelay = parseInt(Math.random() * 500) + 100;

    const itvComputerChoosing = setInterval(() => {
      icons[numOfChange % 3].parentNode.style.border = '';
      numOfChange--;
      icons[numOfChange % 3].parentNode.style.border = '2px solid red';

      if (numOfChange === com) {
        // Result
        score.round++;

        if (myChoice === numOfChange) {
        } else if (
          (myChoice === ROCK && com === SCISSORS) ||
          (myChoice === PAPER && com === ROCK) ||
          (myChoice === SCISSORS && com === PAPER)
        ) {
          score.me++;
        } else {
          score.com++;
        }
        setScore({ ...score }); // Update the score

        clearInterval(itvComputerChoosing);

        setTimeout(() => {
          icons[numOfChange % 3].parentNode.style.border = '';
          setMyChoice(NONE);
        }, 1500);
      } else {
      }
    }, changeDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myChoice]);

  return (
    <div className={cx('game-page')}>
      <h2>Round {gameEnd ? 'END' : score.round}</h2>
      <div className={cx('score-section')}>
        <span>ME: {score.me}</span>
        <span>VS</span>
        <span>COM: {score.com}</span>
      </div>
      <div className={cx('game-section', { selected: myChoice !== NONE })}>
        <div>
          <FontAwesomeIcon
            className={cx('icon', { 'me-choice': myChoice === ROCK })}
            icon={faHandRock}
            onClick={handleSelect(ROCK)}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className={cx('icon', { 'me-choice': myChoice === PAPER })}
            icon={faHandPaper}
            onClick={handleSelect(PAPER)}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className={cx('icon', { 'me-choice': myChoice === SCISSORS })}
            icon={faHandScissors}
            onClick={handleSelect(SCISSORS)}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
