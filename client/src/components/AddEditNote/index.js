import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import AddEditNoteForm from '../utils/form';
import { connect } from 'react-redux';
import { getNoteById, clearNoteDetail, newNote } from '../../actions/notes_actions';

export class AddEditNote extends Component {

  state = {
    note: {
      _id: undefined,
      title: '',
      content: ''
    },
    type: 'new'
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if(id !== undefined) {
      this.props.dispatch(getNoteById(id)).then(note => {
        this.setState({
          note: note.payload[0],
          type: 'edit'
        })
      })
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearNoteDetail())
    this.setState({
      note: {
        _id: undefined,
        title: '',
        content: ''
      },
      type: 'new'
    })
  }

  submit = values => {
    console.log(values);
    if(this.state.type === 'new') {
      this.props.dispatch(newNote(values))
      this.props.history.push("/");
    } else {
      console.log('edit');
    }
  }

  render() {

    const renderTitle = (name) => {
      return (
        <div className="title-form-note">
          <Typography component="h2" variant="display2" gutterBottom>
            {name}
          </Typography>
        </div>
      )
    }

    const renderForm = () => {
      if(this.state.type === 'new') {
        return (
          <div className="form-note">
            {renderTitle('New Note')}
            <AddEditNoteForm onSubmit={this.submit} />
          </div>
        )
      } else {
        return (
          <div className="form-note">
            {renderTitle('Edit Note')}
            <AddEditNoteForm onSubmit={this.submit} />
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
