import React from 'react'
import Button from '../utils/button';
import Paper from '../utils/paper';

const Note = ({note}) => {
    console.log(note);
  return (
    <div className="container-note">
      <div className="container-note-paper">
        <Paper note={note}/>
      </div>
      <div className="container-note-buttons">
        <Button type="edit"/>
        <Button type="delete"/>
      </div>
    </div>
  )
}

export default Note
