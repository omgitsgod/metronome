import React, { useState, useEffect} from 'react';
import gnome from './gnome.png'
import './App.css';

function Timer() {

  return (
    <div id="countdown">
  <div id="countdown-number">10</div>
  <svg>
    <circle r="18" cx="20" cy="20"></circle>
  </svg>
</div>
  );
}

export default Timer;
