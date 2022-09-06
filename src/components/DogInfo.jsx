import React from 'react'

function DogInfo({dog, onGoodBoy}) {
  
  function handleClick() {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({isGoodDog: !dog.isGoodDog})
    })
    .then(r => r.json())
    .then(
  }
    return (
    <div>
        <img alt={dog.name} src={dog.image} />
        <h2>{dog.name}</h2>
        {dog.image ? <button onClick={handleClick}>{dog.isGoodDog ? "Good Dog!" : "Bad Dog :("}</button> : null}
    </div>
  )
}

export default DogInfo