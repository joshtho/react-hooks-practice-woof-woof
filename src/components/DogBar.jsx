import React from 'react'

function DogBar({dogs, handleSummary}) {
  return (
    <div>
        {dogs.map(dog => (
            <span key={dog.id} id='dog-bar span' onClick={() => handleSummary(dog)} >{dog.name}</span>
        ))}
    </div>
  )
}

export default DogBar