import React, { Component } from 'react'
import Button from '../utils/button';
import Paper from '../utils/paper';
import DialogNote from '../utils/dialog';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { show } from 'redux-modal'

class Note extends Component {

  handleOpen = name => () => {
    this.props.show(name, { message: `This is a ${name} modal` })
  };

  render() {
    return (
    <div className="container-note">
      <DialogNote ref={this.noteModalRef} ></DialogNote>
      <div className="container-note-paper">
        <Paper note={this.props.note}/>
      </div>
      <div className="container-note-buttons">
        <Button type="edit" linkTo={`/notes/${this.props.note._id}`}/> 
        <Button type="delete" 
          runAction = {this.handleOpen('note-modal')}
          />
      </div>
    </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch)
)(Note)
