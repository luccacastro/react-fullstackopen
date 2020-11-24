
import React, { useState } from 'react';



function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note ...') 
  const [showAll, setShowAll] = useState(true)
  // const notesToShow = showAll    ? ''  : notes.filter(note => note.important)
  const notesToShow = notes.filter(x => x.important)
  // const check = notesToShow == "object"
  const addNote = (event) => {
    event.preventDefault()
    const noteObject ={
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length+1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log(event.target.id.value)
    console.log(event.target.name.value)
    // console.log(event.target)
    // setNotes(notes.concat())
  }

  const handleNoteChange = (event) => {
    
    setNewNote(event.target.value)
  }
  // console.log(notes.map(x=> x.date))
    return(
      <div>
        <h1>Note Viewer</h1>
         
        <form onSubmit={addNote}>
            <input
                name ="id"
                value={newNote}
                onChange = {handleNoteChange}
            />
            <input
                name ="name"
                // value={newNote}
                // onChange = {handleNoteChange}
            />
            <button type="submit">save</button>
        </form>
        <ul>
          {notes.map(note => 
            <li key={note.id}>
              {note.content} : {note.date.split('T')[0]}
             </li>
          )}
        </ul>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll? 'important' : 'all'}
          </button>
          <ul>
            { showAll?

            notesToShow.filter(x=> x.important).map(note => 
              <li >
                {note.content} : {note.date.split('T')[0]}
              </li>  
            ):''
            }
          </ul>
        </div>
        
      </div>
    )
}

export default App;
