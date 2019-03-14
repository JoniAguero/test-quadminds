import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '../utils/button';

const AddEditNoteForm = props => {

    const { handleSubmit } = props

    const renderTextField = ({
      input,
      label,
      meta: { touched, error },
      ...custom
    }) => (
      <TextField
        id = "outlined-full-width"
        label = {label}
        style={{ margin: 8 }}
        fullWidth
        placeholder = {label}
        multiline
        rowsMax = "5"
        margin = "normal"
        variant = "outlined"
        {...input}
        {...custom}
      />
    )
    
      return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div>
            <Field
              name="title"
              component={renderTextField}
              label="Title"
            />
          </div>
          <div>
            <Field
              name="content"
              component={renderTextField}
              label="Content"
              rows={5}
            />
          </div>
          <div>
            <Button type="submit" />
          </div>
        </form>
      )
    }
  
export default reduxForm({
  form: 'noteForm'
})(AddEditNoteForm)
