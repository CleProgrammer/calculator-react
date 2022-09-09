import React from 'react'

function KeyboardRight() {
    const a = (cl) => document.querySelector(cl)

    const catchNumber = (n) => {
        if(n.target.id === 'right') {
            a('.number2').innerHTML += n.target.innerHTML
            let audioClick = document.createElement('audio')
            audioClick.src ='click.mp3'
            audioClick.play()
        }
    }

  return (
    <div className='keyboard-right'>
        <button id="right" className='num1' onClick={catchNumber}>1</button>
        <button id="right" className='num2' onClick={catchNumber}>2</button>
        <button id="right" className='num3' onClick={catchNumber}>3</button>
        <button id="right" className='num4' onClick={catchNumber}>4</button>
        <button id="right" className='num5' onClick={catchNumber}>5</button>
        <button id="right" className='num6' onClick={catchNumber}>6</button>
        <button id="right" className='num7' onClick={catchNumber}>7</button>
        <button id="right" className='num8' onClick={catchNumber}>8</button>
        <button id="right" className='num9' onClick={catchNumber}>9</button>
        <button id="right" className='num0' onClick={catchNumber}>0</button>
    </div>
  )
}

export default KeyboardRight