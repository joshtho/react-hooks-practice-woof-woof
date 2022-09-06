import React from 'react'

function Filter({showGoodBoys}) {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={showGoodBoys}>Filter good dogs: {}</button>
    </div>
  )
}

export default Filter