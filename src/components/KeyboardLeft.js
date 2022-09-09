import React from 'react'

function KeyboardLeft() {
    const a = (cl) => document.querySelector(cl)

    const catchNumber = (n) => {
        if(n.target.id === 'left') {
            a('.number1').innerHTML += n.target.innerHTML
            let audioClick = document.createElement('audio')
            audioClick.src ='click.mp3'
            audioClick.play()
        }
    }

  return (
    <div className='keyboard-left'>
        <button id="left" className='num1' onClick={catchNumber}>1</button>
        <button id="left" className='num2' onClick={catchNumber}>2</button>
        <button id="left" className='num3' onClick={catchNumber}>3</button>
        <button id="left" className='num4' onClick={catchNumber}>4</button>
        <button id="left" className='num5' onClick={catchNumber}>5</button>
        <button id="left" className='num6' onClick={catchNumber}>6</button>
        <button id="left" className='num7' onClick={catchNumber}>7</button>
        <button id="left" className='num8' onClick={catchNumber}>8</button>
        <button id="left" className='num9' onClick={catchNumber}>9</button>
        <button id="left" className='num0' onClick={catchNumber}>0</button>
    </div>
  )
}

export default KeyboardLeft