import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  const handleResetClick = () => {
    setAll([])
    setLeft(0)
    setRight(0)
    setTotal(0)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left"></Button>
      <Button handleClick={handleRightClick} text="right"></Button>
      {right}
      <p><Button handleClick={handleResetClick} text="right"></Button></p>
      <p>total {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
