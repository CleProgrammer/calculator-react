import React from "react"

function Clean() {
    const a = (cl) => document.querySelector(cl)

    a('.number1').innerHTML = ''
    a('.number2').innerHTML = ''
    a('.res').innerHTML = ''
    a('.sinal').innerHTML = ''
    a('.sinalsoma').removeAttribute('id')
    a('.sinalsubt').removeAttribute('id')
    a('.sinaldivi').removeAttribute('id')
    a('.sinalmulti').removeAttribute('id')
}

export default Clean
