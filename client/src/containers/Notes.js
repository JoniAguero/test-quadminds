import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes_actions';

class Notes extends Component {

    constructor() {
        super();
        this.state = {
            notes: []
        };
    }

    componentDidMount = () => {
      this.props.dispatch(getNotes()).then(response => {
        console.log(response);
        this.setState({
          notes: response
        })
      })
    }
    

  render() {
    return (
      <div>
        notes
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
