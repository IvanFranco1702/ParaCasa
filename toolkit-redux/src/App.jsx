// import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByNumber } from './store/slice/counter'

function App() {
  // const [count, setCount] = useState(0)
const {counter} = useSelector(state=>state.counter)
const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>estamos en {counter}</p>
        <p>
          <button type="button" onClick={() => {dispatch(increment())}}>
            increment
          </button>
          <button type="button" onClick={() => {dispatch(decrement())}}>
            decrement 
          </button>
          
          <button type="button" onClick={() => {dispatch(incrementByNumber(3))}}>
             x ? 
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
