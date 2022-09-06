import React from 'react'

function Filter({showGoodBoys, goodBoys}) {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={showGoodBoys}>Filter good dogs: {goodBoys ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Filter