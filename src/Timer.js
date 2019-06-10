import React, { useState, useEffect} from 'react';
import gnome from './gnome.png'
import './App.css';

function Timer(props) {
  let [countdown, setCountdown] = useState(10)
  useEffect(()=> {
    props.startStop()
  }, [])
  setInterval(() => {
  setCountdown(--countdown <= 0 ? 10 : countdown);

}, 1000);
  return (
    <div id="countdown">
  <div id="countdown-number">{countdown}</div>
  <svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
  );
}

export default Timer;
