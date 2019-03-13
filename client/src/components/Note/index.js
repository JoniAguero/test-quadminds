import React, { Component } from 'react'
import Button from '../utils/button';
import Paper from '../utils/paper';
import DialogNote from '../utils/dialog';

class Note extends Component {

  noteModalRef = ({handleClickOpen}) => {
    this.showModal = handleClickOpen;
  }

  onNoteClick = () => {
    this.showModal();
  }

  render() {
    return (
    <div className="container-note">
      <DialogNote ref={this.noteModalRef} ></DialogNote>
      <div className="container-note-paper">
        <Paper note={this.props.note}/>
      </div>
      <div className="container-note-buttons">
        <Button type="edit"/> 
        <Button type="delete" 
          runAction = {() => this.onNoteClick()}
          />
      </div>
    </div>
    )
  }
}
export default Note
