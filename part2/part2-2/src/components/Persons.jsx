
const Persons = ({ persons, deletePerson }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}{' '}
            <button onClick={() => deletePerson(person.id)}>Delete</button>
          </p>
        </div>
      ))}
    </>
  );
};

export default Persons;
