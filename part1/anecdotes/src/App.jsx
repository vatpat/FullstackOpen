import { useState } from 'react'

const Label = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({label, handleClick}) => {
  return (
    <button onClick={handleClick}>{label}</button>
  )
}

const VoteCounter = ({votes, selected}) => {
  return (
    <div>Has {votes[selected]} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})
  const [mostVotes, setMostVotes] = useState(0)

  const onClickNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const onClickVote = () => {
    const votesCopy = {...votes}
    votesCopy[selected]++;
    setVotes(votesCopy)

    if(votesCopy[selected] > votesCopy[mostVotes]) {
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <Label text="Anecdote Of The Day"></Label>
      <p>{anecdotes[selected]}</p>
      <VoteCounter votes={votes} selected={selected}></VoteCounter>
      <Button label="Vote" handleClick={onClickVote}></Button>
      <Button label="Next Andecdote" handleClick={onClickNext}></Button>
      <Label text="Anecdote With Most Votes"></Label>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  )
}

export default App