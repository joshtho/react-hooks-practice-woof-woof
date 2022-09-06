import React from 'react'

function DogInfo({dog, onGoodBoy}) {
  return (
    <div>
        <img alt={dog.name} src={dog.image} />
        <h2>{dog.name}</h2>
        {dog.image ? <button onClick={() => onGoodBoy(dog)}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog :("}</button> : null}
    </div>
  )
}

export default DogInfo