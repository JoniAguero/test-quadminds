import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '../utils/button';
import { connect } from 'react-redux';

import { getNoteById as getNote } from '../../actions/notes_actions';

class AddEditNoteForm extends Component {

  render() {
    const { handleSubmit } = this.props
    const renderTextField = ({
      input,
      label,
      ...custom
    }) => (
      <TextField
        id="outlined-full-width"
        label={label}
        fullWidth
        multiline
        rowsMax="5"
        margin="normal"
        variant="outlined"
        {...custom}
        {...input}
      />
    )
  return(
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div>
          <Field
            name="title"
            component={renderTextField}
            value
            label="Title"
            type="text"
          />
        </div>
        <div>
          <Field
            name="content"
            component={renderTextField}
            value
            label="Content"
            type="textarea"
            rows={5}
          />
        </div>
        <div>
          <Button type="submit" />
        </div>
      </form>
    )
  }
}

AddEditNoteForm = connect(
  state => ({
    initialValues: state.notes.notes
  }),
  { getNoteById: getNote }  
)(AddEditNoteForm)

AddEditNoteForm = reduxForm({
  form: 'noteForm'
})(AddEditNoteForm)



export default AddEditNoteForm;

