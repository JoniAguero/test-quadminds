import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import AddEditNoteForm from '../utils/form';

export class AddEditNote extends Component {

  submit = values => {
    console.log(values)
  }

  render() {

    const id = this.props.match.params.id
    const type = id === undefined ? 'new' : 'edit';

    const renderTitle = () => {
      if(type === 'new') {
        return (
          <Typography component="h2" variant="display2" gutterBottom>
            New Note
          </Typography>
        )
      } else {
        return (
          <Typography component="h2" variant="display2" gutterBottom>
            Edit Note
          </Typography>
        )
      }
    }
    
    return (
      <div className="form-note">
        <div className="title-form-note">
        {renderTitle()}
        </div>
        <AddEditNoteForm onSubmit={this.submit} type={type} id={id}/>
      </div>
    )
  }
}

export default AddEditNote
