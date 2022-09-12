function CleanLeft() {
    const a = (cl) => document.querySelector(cl)

    const cleanLeft = () => {
        let innerHTMLNumber1 = a('.number1').innerHTML.split('')
        innerHTMLNumber1.pop()
        let pushNumber1 = ''
        for(let i in innerHTMLNumber1) {
            pushNumber1 += innerHTMLNumber1[i]
        }
        a('.number1').innerHTML = pushNumber1
    }
  return (
    <button className='clean-left' onClick={cleanLeft}>x</button>
  )
}

export default CleanLeft

