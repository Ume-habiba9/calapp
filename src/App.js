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
    // console.log(set)
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
  // function clicked(e) {
  //   const set = setdisplay(display.concat(e.target.name));
  //   console.log(set)
  // }
  return (
    <div className="App">

      <div className='buttons'>
        <input className='result' value={display} placeholder='0' />
        <div className='row1'>
          <button name='C' onClick={() => clear()}>C</button>
          <button name='Del' onClick={() => del()}>Del</button>
          <button name='.' onClick={clicked}>.</button>
          <button name='/' onClick={clicked}>/</button>
        </div>
        <div className='row2'>
          <button name='1' onClick={clicked}>1</button>
          <button name='2' onClick={clicked}>2</button>
          <button name='3' onClick={clicked}>3</button>
          <button name='*' onClick={clicked}>*</button>
        </div>
        <div className='row3'>
          <button name='4' onClick={clicked}>4</button>
          <button name='5' onClick={clicked}>5</button>
          <button name='6' onClick={clicked}>6</button>
          <button name='+' onClick={clicked}>+</button>
        </div>
        <div className='row4'>
          <button name='7' onClick={clicked}>7</button>
          <button name='8' onClick={clicked}>8</button>
          <button name='9' onClick={clicked}>9</button>
          <button name='-' onClick={clicked}>-</button>
        </div>
        <div className='row5'>
          <button name='0' onClick={clicked}>0</button>
          <button name='=' onClick={() => cal()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
