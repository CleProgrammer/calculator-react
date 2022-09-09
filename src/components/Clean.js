import React from "react"

function Clean() {
    const a = (cl) => document.querySelector(cl)

    a('.number1').innerHTML = ''
    a('.number2').innerHTML = ''
    a('.res').innerHTML = ''
}

export default Clean

