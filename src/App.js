import { useState } from 'react';
import './App.css';
import Questions from './Questions';
import Results from './Results'; 

function App() {
  const [results, setResults] = useState([])
  return (
    <div className="App">
      <Questions setResults={setResults}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
