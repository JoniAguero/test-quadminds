import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes_actions';
import Note from '../components/Note';
import Button from '../components/utils/button';

class Notes extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    componentDidMount = () => {
      this.props.dispatch(getNotes()).then(notes => {
        this.setState({
          notes: notes.payload
        })
      })
    }

    showNotes = notes => (
      notes.map((note) =>
        <Note
          note={note}
          key={note._id} />)
    )
    

  render() {
    return (
      <div>
        <div className="title-notes">
          <Typography component="h2" variant="display3" gutterBottom className="h3-notes">
            Listado de notas
          </Typography>
          <Button type="new"/> 
        </div>
        <div className="container-notes">
          {this.state.notes.length > 0 ? this.showNotes(this.state.notes) : <p>cargando</p>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps)(Notes)
