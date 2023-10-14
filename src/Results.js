import React from 'react'
import Result from './Result'
function Results({ results }) {
  console.log(results)
  return (
    <div>
    { results.length === 0 ?
      <h1>NO RESULTS</h1>
      :
      <ol>
        {results.map((result) => {
          return <Result key ={result.name} {...result} />
        })}
      </ol>
    }
    </div>
  )

}
export default Results