import React, { useState, useEffect} from 'react';
import click1 from './click1.wav';
import click2 from './click2.wav';
import './App.css';

function App() {
  const [playing, setPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(localStorage.getItem('bpm') || 100)
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)
  const clicky1 = new Audio(click1);
  const clicky2 = new Audio(click2);
  const [timer, setTimer] = useState(0)
  useEffect(()=> {
    localStorage.setItem('bpm', bpm)
  }, [bpm])

  const handleBpmChange = (e) => {
    if (playing) {
      clearInterval(timer)
      setTimer(setInterval(playClick, (60 / bpm) * 1000))
      setCount(0);
      setBpm(e.target.value)
    } else {
      setBpm(e.target.value)
    }
  }
  const startStop = () => {

    if (playing) {
      clearInterval(timer)
      setPlaying(false)
      console.log(timer);
    } else {
      setTimer(setInterval(
        playClick, (60 / bpm) * 1000
      ))
      setCount(0)
      setPlaying(true)
      playClick()
      console.log(timer);
    }
  }
  const reset = () => {
    setBpm(100)
    setCount(0)
    setPlaying(false)
    clearInterval(timer)
  }
  const playClick = () => {
    if (count % beatsPerMeasure === 0) {
    clicky2.play();
  } else {
    clicky1.play();
  }
    setCount((count+1)/beatsPerMeasure)
  }
  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={startStop}>{playing ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
