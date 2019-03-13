import React from 'react'

const Note = ({note}) => {
    console.log(note);
  return (
    <div className="container-note">
      <h3>{note.title}</h3>
    </div>
  )
}

export default Note
