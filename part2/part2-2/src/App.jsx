import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService';
import Notification from './components/Notification'; 

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null);
  
  useEffect(() => {
    personsService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
     
  }, []);


  const addPerson = (event) => {
    event.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
    personsService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName('');
      setNewNumber('');
      showNotification(`Added ${returnedPerson.name}`);
    })
};
const showNotification = (message) => {
  setNotification(message);
  setTimeout(() => {
    setNotification(null);
  }, 3000); 
};


const deletePerson = id => {
  const person = persons.find(person => person.id === id)

  if (window.confirm(`Delete ${person.name} ?`)) {
    personsService  
    .remove(id)
    .then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
    .catch(error => {
      console.log(error)
      setStyle('error')
      setMessage(`Information of ${person.name} has already been removed from server`)	
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })

  }
}

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
 

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons deletePerson={deletePerson} persons={persons} />
      <Notification message={notification} />
    </div>
  )
}

export default App