import React, { useState, useEffect} from 'react';
import Timer from './Timer'
import click1 from './click1.wav';
import click2 from './click2.wav';
import './App.css';
import gnome from './gnome.png'

function App() {
  const [playing, setPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(localStorage.getItem('bpm') || 100)
  const clicky1 = new Audio(click1);
  const clicky2 = new Audio(click2);
  const [intTimer, setIntTimer] = useState(0)
  const [timer, setTimer] = useState(false)
  const [num, setNum] = useState(0)
  const [startTimer, setStartTimer] = useState(false)
  useEffect(()=> {
    localStorage.setItem('bpm', bpm)
  }, [bpm])

  const handleBpmChange = (e) => {
    if (playing) {
      clearInterval(intTimer)
      setIntTimer(setInterval(playClick, (60 / bpm) * 1000))
      setCount(0);
      setBpm(e.target.value)
    } else {
      setBpm(e.target.value)
    }
  }
  const startStop = () => {

    if (playing) {
      if (num <= 0) {
        setStartTimer(false)
        setTimer(false)
      }
      setStartTimer(false)
      clearInterval(intTimer)
      setPlaying(false)
      console.log(intTimer);
    }
     else {
      if (num > 0) {
        setStartTimer(true)
      }
      setIntTimer(setInterval(
        playClick, (60 / bpm) * 1000
      ))
      setCount(0)
      setPlaying(true)
      playClick()
      console.log(intTimer);
    }
    }
  const reset = () => {
    setBpm(100)
    setCount(0)
    setPlaying(false)
    clearInterval(intTimer)
    setNum(0)
    setTimer(false)
    setStartTimer(false)
  }
  const playClick = () => {
    if (count % 4 === 0) {
    clicky2.play();
  } else {
    clicky1.play();
  }
    setCount((count+1) % 4)
  }

  console.log(num);
  return (
    <div className="metronome">
      <h1>Metrognome</h1>
      <img src={gnome} alt="gnome"/>
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        {startTimer ? <Timer num={num} startStop={startStop} reset={reset}/> : null}
        {timer ? <div><p>{num} seconds({Math.floor((num/60)*10)/10} minutes)</p><button onClick={reset}>Reset</button><button onClick={startStop}>{playing ? "Stop" : "Start"}</button>  <br/><input type="range" min="0" max="600" value={num} onChange={(e)=>setNum(e.target.value)} /> </div>: null}
        <br />
        <input className="bpm" name="bpm" type="range" min="60" max="240" value={bpm} onChange={handleBpmChange} />
      </div>
      <button  onClick={()=>{setTimer(!timer)}}>Timer</button>
      {!timer ? <button onClick={reset}>Reset</button> : null}
      {!timer ? <button onClick={startStop}>{playing ? "Stop" : "Start"}</button> : null}
    </div>
  );
}

export default App;
