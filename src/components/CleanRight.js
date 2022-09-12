function CleanRight() {
    const a = (cl) => document.querySelector(cl)

    const cleanRight = () => {
        let innerHTMLNumber1 = a('.number2').innerHTML.split('')
        innerHTMLNumber1.pop()
        let pushNumber1 = ''
        for(let i in innerHTMLNumber1) {
            pushNumber1 += innerHTMLNumber1[i]
        }
        a('.number2').innerHTML = pushNumber1
    }
  return (
    <button className='clean-right' onClick={cleanRight}>x</button>
  )
}

export default CleanRight
