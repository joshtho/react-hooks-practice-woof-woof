import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [])

  function handleSummary(dog) {
    setSelectedDog(dog)
  }
  
  function handleGoodBoy(dog) {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({isGoodDog: !dog.isGoodDog})
    })
    .then(r => r.json())
    .then(update => {
     const newDogs = dogs.map(dog => dog.id === update.id ? update : dog)
     console.log(newDogs)
     setDogs(newDogs)
    })
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar dogs={dogs} handleSummary={handleSummary} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo dog={selectedDog} onGoodBoy={handleGoodBoy} />
        </div>
      </div>
    </div>
  );
}

export default App;
