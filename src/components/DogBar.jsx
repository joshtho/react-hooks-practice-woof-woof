import React from 'react'

function DogBar({dogs, handleSummary}) {
  return (
    <div id='dog-bar'>
        {dogs.map(dog => (
            <span key={dog.id} onClick={() => handleSummary(dog)} >{dog.name}</span>
        ))}
    </div>
  )
}

export default DogBar