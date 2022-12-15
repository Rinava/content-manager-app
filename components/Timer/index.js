import { MoreTime } from '@mui/icons-material';
import { useState, useEffect } from 'react';
const Timer = ({ time, setToDone}) => {
  const [timeLeft, setTimeLeft] = useState(timeToMiliseconds(time));

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 100);
      }, 1);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  function timeToMiliseconds(time) {
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

  return (
    <>
      {timeLeft ? (
        <div>
          <h3>{milisecondsToTime(timeLeft)} time left</h3>
          <button onClick={resetTimer}>Reset</button>
        </div>
      ) : (
        <div>
          <h3>Time is up!</h3>
          <button onClick={giveMoreTime}>5 more minutes</button>
          <button onClick={setToDone}>Done</button>
        </div>
      )}
    </>
  );
};
export default Timer;