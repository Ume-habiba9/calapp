import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  let finalresult;
  const [display, setdisplay] = useState('');
  useEffect(() => {
    finalresult = localStorage.getItem("calculation");
    if (finalresult) {
      setdisplay(finalresult);
    }
  }, [])

  const clicked = (e) => {
    const set = display.concat(e.target.name);
    setdisplay(set);

  }
  function clear() {
    setdisplay('');
  }
  function del() {
    const del = display.slice(0, -1);
    setdisplay(del);
  }
  function cal() {
    const result = (eval(display));
    console.log(result);
    localStorage.setItem("calculation", result);
    setdisplay(result);
  }

  return (
    <div className="App">

      <div className='buttons'>
        <input className='result' value={display} placeholder='0' />
        <div className='row1'>
          <button name='C' className='btn' onClick={() => clear()}>C</button>
          <button name='Del' className='btn' onClick={() => del()}>Del</button>
          <button name='.' className='btn' onClick={clicked}>.</button>
          <button name='/' className='right' onClick={clicked}>/</button>
        </div>
        <div className='row2'>
          <button name='1' className='btn' onClick={clicked}>1</button>
          <button name='2' className='btn' onClick={clicked}>2</button>
          <button name='3' className='btn' onClick={clicked}>3</button>
          <button name='*' className='right' onClick={clicked}>*</button>
        </div>
        <div className='row3'>
          <button name='4' className='btn' onClick={clicked}>4</button>
          <button name='5' className='btn' onClick={clicked}>5</button>
          <button name='6' className='btn' onClick={clicked}>6</button>
          <button name='+' className='right' onClick={clicked}>+</button>
        </div>
        <div className='row4'>
          <button name='7' className='btn' onClick={clicked}>7</button>
          <button name='8' className='btn' onClick={clicked}>8</button>
          <button name='9' className='btn' onClick={clicked}>9</button>
          <button className='right' name='-' onClick={clicked}>-</button>
        </div>
        <div className='row5'>
          <button name='0' id='zero' className='btn' onClick={clicked}>0</button>
          <button name='=' id='equal' className='btn' onClick={() => cal()}>=</button>
          <button name='%' className='right' onClick={clicked}>%</button>
        </div>
      </div>
    </div>
  );
}

export default App;
