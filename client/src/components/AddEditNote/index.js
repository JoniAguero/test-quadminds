import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import AddEditNoteForm from '../utils/form';
import { connect } from 'react-redux';
import { getNoteById, clearNoteDetail } from '../../actions/notes_actions';

export class AddEditNote extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(getNoteById(id)).then(() => {
      if (!this.props.notes.notes) {
        this.props.history.push('/');
      }
    })
  }

  componentWillUnmount() {
    this.props.dispatch(clearNoteDetail())
  }

  submit = values => {
    console.log(values)
  }

  render() {

    const id = this.props.match.params.id
    const type = id === undefined ? 'new' : 'edit';

    const renderForm = () => {
      if(type === 'new') {
        return (
          <div className="form-note">
            <div className="title-form-note">
              <Typography component="h2" variant="display2" gutterBottom>
                New Note
              </Typography>
            </div>
            <AddEditNoteForm onSubmit={this.submit}/>
          </div>
        )
      } else {
        const note = this.props.notes;
        return (
          <div className="form-note">
            <div className="title-form-note">
              <Typography component="h2" variant="display2" gutterBottom>
                Edit Note
              </Typography>
            </div>
            <AddEditNoteForm onSubmit={this.submit} note={note}/>
          </div>
        )
      }
    }
    
    return (
      <div>
        {renderForm()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(AddEditNote);
