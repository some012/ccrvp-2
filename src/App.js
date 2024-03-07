import { useState } from 'react'
import imitLogo from './assets/imit.png'
import asuLogo from './assets/asu.png'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.math.asu.ru/" target="_blank">
          <img src={imitLogo} className="logo" alt="Immit logo" />
        </a>
        <a href="https://www.asu.ru/" target="_blank">
          <img src={asuLogo} className="logo react" alt="Asu logo" />
        </a>
      </div>
      <h1>ASU с Vite + React</h1>
      <div className="card">
        <Button color="white" text ="+" onClick={()=>{setCount((count)=>count+1);}}/>
        <Button color="white" text ="-" onClick={()=>{setCount((count)=>count-1);}}/>
        <Button color="white" text ="0" onClick={()=>{setCount(0);}}/>
        <p> 
          Счетчик примерно {count}
        </p>
      </div>
      <Container> 
      <p className="read-the-docs">
        Кликните на логотип сайта, на который вы желаете перейти
      </p>
      </Container> 
    </>
  )
}

export default App
