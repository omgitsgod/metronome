import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [playing, setPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(100)
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)

  const handleBpmChange = (e) => {
    setBpm(e.target.value)
  }

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
      </div>
      <button>{playing ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
