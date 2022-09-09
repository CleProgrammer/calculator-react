import React from 'react'

function Choose() {
  const a = (cl) => document.querySelector(cl)

  const sinalsoma = () => {
    a('.sinal').innerHTML = '+'
    a('.sinalsoma').setAttribute('id', 'idsoma')
    a('.sinalsubt').removeAttribute('id')
    a('.sinaldivi').removeAttribute('id')
    a('.sinalmulti').removeAttribute('id')
  }

  const sinalsubt = () => {
    a('.sinal').innerHTML = '-'
    a('.sinalsubt').setAttribute('id', 'idsoma')
    a('.sinalsoma').removeAttribute('id')
    a('.sinaldivi').removeAttribute('id')
    a('.sinalmulti').removeAttribute('id')
  }

  const sinaldivi = () => {
    a('.sinal').innerHTML = '/'
    a('.sinaldivi').setAttribute('id', 'idsoma')
    a('.sinalsoma').removeAttribute('id')
    a('.sinalsubt').removeAttribute('id')
    a('.sinalmulti').removeAttribute('id')
  }

  const sinalmulti = () => {
    a('.sinal').innerHTML = 'x'
    a('.sinalmulti').setAttribute('id', 'idsoma')
    a('.sinalsoma').removeAttribute('id')
    a('.sinalsubt').removeAttribute('id')
    a('.sinaldivi').removeAttribute('id')
  }

  return (
    <div className='choose-sinal'>
      <button className='sinalsoma' onClick={sinalsoma}>SOMA</button>
      <button className='sinalsubt' onClick={sinalsubt}>SUBTRAÇÃO</button>
      <button className='sinaldivi' onClick={sinaldivi}>DIVISÃO</button>
      <button className='sinalmulti' onClick={sinalmulti}>MULTIPLICAÇÃO</button>
    </div>
  )
}

export default Choose

