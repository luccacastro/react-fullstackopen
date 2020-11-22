
import React, { useState } from 'react';
import './App.css'
import Statistics from './Statistics'

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const quoteKey = Array.from({length: anecdotes.length}, (v,i) => i)
  const quoteScore = Array.from({length: anecdotes.length},(v,i=0) => 0)
  const res = {}
  quoteKey.forEach((key,i) => res[key] = quoteScore[i])

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(res)

  // setPoints(res)

  const setRandomNumber = () => {
    let number = Math.floor(Math.random()* (anecdotes.length))
    setSelected(number)
  }

  const addVote = () => {
    var name = "aa"
    setPoints({...points, [selected] : points[selected] + 1})
  }

  const maxVal = Object.keys(points).reduce(function(a, b){ return points[a] > points[b] ? a : b })

  return(
    <div>
      <div className="text-space">
        <p>{anecdotes[selected]}</p>
      </div>
      <p>Points : {points[selected]}</p>
      <button onClick={addVote}>vote</button>
      <button onClick={setRandomNumber}>next quote</button>
      <h2>Anectode with most votes</h2>
      <p>{anecdotes[maxVal]}</p>
    </div>
  )
}

export default App;
