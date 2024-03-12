const PersonForm = ({addPerson, newNumber, newName, handleNameChange, handleNumberChange}) => {

return (

<>
<form onSubmit={addPerson} >
        <div>
          NAME: <input id="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>NUMBER: <input id='number' value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
</>
)                                                                      
}
export default PersonForm