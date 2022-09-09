import '../components/Calculadora.css'
import operações from '../operações/operacoes'
import Choose from './Choose'
import Clean from './Clean'
import KeyboardLeft from './KeyboardLeft'
import KeyboardRight from './KeyboardRight'

function Calculadora() {
  return (
    <div className="container">
      <h1>CALCULADORA</h1>
      <Choose />
      <div className='section1'>
        <div className='number1'></div>
        <p className='sinal'></p>
        <div className='number2'></div>
      </div>

      <div className='section2'>
        <KeyboardLeft />
        <div className='section2-1'>
          <button onClick={operações}>CALCULAR</button>
          <button onClick={Clean}>LIMPAR</button>
        </div>
        <KeyboardRight />
      </div>
    
      <h1 className='res'></h1>
    </div>
  )
}

export default Calculadora

