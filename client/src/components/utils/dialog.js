import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {
  connect
} from 'react-redux';
import { connectModal } from 'redux-modal'
import { removeNoteById } from '../../actions/notes_actions';


import { withSnackbar } from 'material-ui-snackbar-redux'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class NoteDialog extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };

  handleDelete = () => {
    this.props.removeNoteById(this.props.id).then((res) => {
      if(res.payload.success) {
        this.handleSnack();
        this.props.handleHide();
      };
      return;
    })
  };

  handleSnack = () => {
    const {snackbar} = this.props;
    snackbar.show('Deleted note', 'Success', () => {/* do something... */ })
  }

  render() {
    
    const { show, handleHide, message } = this.props;
    
    return (
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleHide}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"¿Desea eliminar el item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHide} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.handleDelete} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeNoteById: value => dispatch(removeNoteById(value))
})

NoteDialog = withSnackbar()(NoteDialog)
NoteDialog = connect(null, mapDispatchToProps)(NoteDialog)

export default connectModal({
  name: 'note-modal'
})(NoteDialog)