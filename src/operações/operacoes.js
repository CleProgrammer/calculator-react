import React from 'react'

function operações() {
        const a = (cl) => document.querySelector(cl)

        if(a('.sinal').innerHTML === '+') {
                let n1 = parseInt(a('.number1').innerHTML)
                let n2 = parseInt(a('.number2').innerHTML)
                let soma = n1 + n2
                document.querySelector('.res').innerHTML = soma
        } else if(a('.sinal').innerHTML === '-') {
                let n1 = parseInt(a('.number1').innerHTML)
                let n2 = parseInt(a('.number2').innerHTML)
                let soma = n1 - n2
                document.querySelector('.res').innerHTML = soma
        } else if(a('.sinal').innerHTML === '/') {
                let n1 = parseInt(a('.number1').innerHTML)
                let n2 = parseInt(a('.number2').innerHTML)
                let soma = n1 / n2
                document.querySelector('.res').innerHTML = soma
        } else if(a('.sinal').innerHTML === 'x') {
                let n1 = parseInt(a('.number1').innerHTML)
                let n2 = parseInt(a('.number2').innerHTML)
                let soma = n1 * n2
                document.querySelector('.res').innerHTML = soma
        }
}

export default operações
