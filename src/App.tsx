import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span className='two'>目前是第二次修改</span>
      <span className='three'>目前是第三次修改</span>
      <span className='five'>目前是第五次修改（第四次被reset）</span>
      <span>第六次提交</span>
      <span>revert第七次修改</span>
    </div>
  )
}

export default App
