import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState({})
  const [goodBoys, setGoodBoys] = useState([])

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
     setDogs(newDogs)
     setSelectedDog(update)
    })
  }


  
  function showGoodBoys() {
    const allGoodDogs = [...dogs].filter(dog => dog.isGoodDog === true)
    setGoodBoys(allGoodDogs)
    
  }

  return (
    <div className="App">
      <Filter showGoodBoys={showGoodBoys} />
      <DogBar dogs={dogs} handleSummary={handleSummary} />
      <DogInfo dog={selectedDog} onGoodBoy={handleGoodBoy} />
    </div>
  );
}

export default App;