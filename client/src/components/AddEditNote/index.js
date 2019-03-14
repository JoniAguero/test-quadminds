import React, { Component } from 'react'

import AddEditNoteForm from '../utils/form';

export class AddEditNote extends Component {

  submit = values => {
    console.log(values)
  }

  render() {
    return (
      <div className="form-note">
        <AddEditNoteForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default AddEditNote
