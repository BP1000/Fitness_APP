import React from 'react'
import "./Result.css"
function Result({ difficulty, equipment, instructions, muscle, name}) {
  return (
    <div className='Result_container'>
        <h2>Name of the excersise: {name}</h2>
        <h2>The diffiulty of the excersise: {difficulty}</h2>
        { equipment === "other" ?
          <h2>No equipment needed</h2>
          :
          <h2>equipment needed: {equipment}</h2>
        }
        <h2>How to do the excersise: {instructions}</h2>
        <h2>Muscles being worked: {muscle}</h2>
    </div>
  )
}

export default Result