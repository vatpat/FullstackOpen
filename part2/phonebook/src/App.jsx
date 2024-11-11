import { useState } from 'react'

const NameForm = ({newName, handleNameChange, newNumber, handleNumberChange, addName}) => {
  return (
    <>
      <h2>Phonebook</h2>
      <form>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
    </>
  )
}

const SearchFilter = ({filter, handleFilterChange, handleClear}) => {
  return (
    <div>
        filter names: <input value={filter} onChange={handleFilterChange}/>
        <button onClick={handleClear}>clear filter</button>
    </div>
  ) 
}

const Persons = ({persons, filter}) => {
  return (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => 
          <div key={person.name}>{person.name} {person.number}</div>
      )}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleClear = () => {
    setFilter('')
  }

  const addName = (event) => {
    event.preventDefault()
    const uniqueName = persons.every(person => person.name !== newName)
    const uniqueNumber = persons.every(person => person.number !== newNumber)

    if(newName === '' || newNumber === '') {
      alert('Please enter a name and number')
      return
    }

    if (!uniqueName) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    if(!uniqueNumber) {
      alert(`${newNumber} is already in the phonebook`)
      return
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }    
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <NameForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
      <h2>Numbers</h2>
      <SearchFilter filter={filter} handleFilterChange={handleFilterChange} handleClear={handleClear} /> <br />  
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App