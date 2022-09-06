import React from 'react'

function DogInfo({dog, onGoodBoy}) {
    return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id='dog-info'>
            <img alt={dog.name} src={dog.image} />
            <h2>{dog.name}</h2>
            {dog.image ? 
            <button 
            onClick={() => onGoodBoy(dog)}
            >
            {dog.isGoodDog ? "Good Dog!" : "Bad Dog :("}
            </button> : null
            }
        </div>
    </div>
  )
}

export default DogInfo