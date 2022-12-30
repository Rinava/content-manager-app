import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
const Timer = ({ time, setToDone }) => {
  const [timeLeft, setTimeLeft] = useState(timeToMiliseconds(time));

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1000);
      }, 1);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  function timeToMiliseconds(time) {
    if (!time) return null;
    const hours = time.slice(0, 2);
    const minutes = time.slice(3, 5);
    const totalMiliseconds = hours * 3600000 + minutes * 60000;
    return totalMiliseconds;
  }
  function milisecondsToTime(miliseconds) {
    //TODO make it more readable and less repetitive
    const hours =
      Math.floor(miliseconds / 3600000) > 9
        ? Math.floor(miliseconds / 3600000)
        : `0${Math.floor(miliseconds / 3600000)}`;
    const minutes =
      Math.floor((miliseconds % 3600000) / 60000) > 9
        ? Math.floor((miliseconds % 3600000) / 60000)
        : `0${Math.floor((miliseconds % 3600000) / 60000)}`;
    const seconds =
      Math.floor((miliseconds % 60000) / 1000) > 9
        ? Math.floor((miliseconds % 60000) / 1000)
        : `0${Math.floor((miliseconds % 60000) / 1000)}`;

    return `${hours}:${minutes}:${seconds}`;
  }
  function resetTimer() {
    setTimeLeft(timeToMiliseconds(time));
  }
  function giveMoreTime() {
    setTimeLeft(timeLeft + 300000);
  }
  // TODO make it consistent if you change the page and come back

  return (
    <>
      {timeLeft ? (
        <div className={styles.timer}>
          <h3 className={styles.time_left}>
            {milisecondsToTime(timeLeft)} time left
          </h3>
          <button className={styles.reset_button} onClick={resetTimer}>
            Reset
          </button>
        </div>
      ) : (
        <div className={styles.background}>
        <div className={styles.timer_done}>
          <h3 className={styles.time}>Time is up!</h3>
          <div className={styles.options}>
            <button className={styles.more_time_button} onClick={giveMoreTime}>
              5 more minutes
            </button>
            <button className={styles.done_button} onClick={setToDone}>
              Done
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
export default Timer;
