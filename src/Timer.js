import React, { useState, useEffect} from 'react';
import gnome from './gnome.png'
import './App.css';

function Timer(props) {
  let [countdown, setCountdown] = useState(props.num)
  useEffect(()=> {
  //  props.startStop()
}, )
  let x = setInterval(() => {
  setCountdown(--countdown <= 0 ? 0 : countdown);
}, 1000);
  if (countdown === 0) {
  //  props.reset()
    clearInterval(x)
  }
  return (
    <div id="countdown">
  <div id="countdown-number">{countdown}</div>
  <svg>
    <circle r="18" cx="20" cy="20" style={{animation: `countdown ${props.num}s linear 1 forwards`}}></circle>
  </svg>
</div>
  );
}

export default Timer;
