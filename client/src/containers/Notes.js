import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes_actions';
import Note from '../components/Note';

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
      <div className="container-notes">
        {this.state.notes.length > 0 ? this.showNotes(this.state.notes) : <p>cargando</p>}
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
