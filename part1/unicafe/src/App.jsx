import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({label, handleClick}) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if(total == 0){
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}></StatisticLine>
          <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          <StatisticLine text="Bad" value={bad}></StatisticLine>
          <StatisticLine text="Total" value={total}></StatisticLine>
          <StatisticLine text="Average" value={average}></StatisticLine>
          <StatisticLine text="Positive" value={positive + "%"}></StatisticLine>
        </tbody>
      </table>
    )
  }
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}:</td><td>{value}</td></tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const onClickGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    setTotal(newGood + bad + neutral);
    setAverage((newGood - bad) / (newGood + bad + neutral))
    setPositive(100 * newGood / (newGood + bad + neutral))
  }
  const onClickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setTotal(newNeutral + good + bad);
    setAverage((good - bad) / (newNeutral + good + bad))
    setPositive(100 * good / (newNeutral + good + bad))
  }

  const onClickBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setTotal(newBad + good + neutral);
    setAverage((good - newBad) / (newBad + good + neutral))
    setPositive(100 * good / (newBad + good + neutral))
  }


  return (
    <div>
      <Header text="Give Feedback"></Header>
      <Button label="Good" handleClick={onClickGood}></Button>
      <Button label="Neutral" handleClick={onClickNeutral}></Button>
      <Button label="Bad" handleClick={onClickBad}></Button>
      <Header text="Statistics"></Header>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}></Statistics> 
    </div>
  )
}

export default App