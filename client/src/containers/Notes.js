import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes_actions';
import Note from '../components/Note';
import Button from '../components/utils/button';
import CircularProgress from '@material-ui/core/CircularProgress';

class Notes extends Component {

  componentDidMount = () => {
    this.props.dispatch(getNotes());
  }

  showNotes = notes => (
    notes.map((note) =>
      <Note
        note={note}
        key={note._id} />)
  )
    

  render() {
    const { notes } = this.props;
    const arrayNotes = notes.notes;
    
    return (
      <div>
        <div className="title-notes">
          <Typography component="h2" variant="display3" gutterBottom className="h3-notes">
            Listado de notas
          </Typography>
          <Button type="new" linkTo={`/notes/new`}></Button>
        </div>
        <div className="container-notes">
          {
            arrayNotes && arrayNotes.length > 0 ? this.showNotes(arrayNotes) : < div className = "main_loader" >
                        <CircularProgress style={{color:'#2196F3'}} thickness={7}/> 
                    </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    notes: state.notes
  }
}

export default connect(mapStateToProps)(Notes)
