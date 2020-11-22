
import React, { useState } from 'react';
import './App.css'
import Statistics from './Statistics'

function App() {
  const [score, setScore] = useState({
    good: 0,
    neutral: 0,
    negative: 0,
  })

  // const [good , setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [negative, setNegative] = useState(0)

  const goodCounter = () => {
    setScore({...score, good: score.good+1})
    // setGood(good+1)
  }

  const neutralCounter = () => {
    setScore({...score, neutral: score.neutral+1})
    // setNeutral(neutral+1)
  }

  const negativeCounter = () => {
    setScore({...score, negative: score.negative+1})
  }

  

  return (
    <div className="App">
      <h3>give feedback</h3>
      <button onClick={goodCounter}>good </button>
      <button onClick={neutralCounter}>bad</button>
      <button onClick={negativeCounter}>negative</button>
      
  {/* <p>{score.good}</p>
  <p>{score.neutral}</p>
  <p>{score.negative}</p> */}
      <Statistics {...score}/>
    </div>
  );
}

export default App;
