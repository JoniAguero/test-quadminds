import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import AddEditNoteForm from '../utils/form';
import { connect } from 'react-redux';
import { withSnackbar } from 'material-ui-snackbar-redux'
import { getNoteById, clearNoteDetail, newNote, updateNoteById } from '../../actions/notes_actions';

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

    if(this.state.type === 'new') {
      this.props.dispatch(newNote(values)).then(() => {
        this.handleSnack();
        this.props.history.push("/");
      })
    } else {
      const id = this.props.match.params.id;
      this.props.dispatch(updateNoteById(id, values)).then(res => {
        console.log(res);
        if(res.payload.err) {
          this.setState({
            type: 'err'
          })
        }
        this.handleSnack();
        this.props.history.push("/");
      })
    }
  }

  handleSnack() {
    const { snackbar } = this.props;
    if (this.state.type === 'new') {
      return snackbar.show('Created note', 'Success', () => {/* do something... */})
    } else if (this.state.type === 'edit') return snackbar.show('Modified note', 'Success', () => {/* do something... */ })
    return snackbar.show('Error', 'OPS!', () => {/* do something... */})
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

AddEditNote = withSnackbar()(AddEditNote)
export default connect(mapStateToProps)(AddEditNote);
