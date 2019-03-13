import React, { Component } from 'react'
import Notes from '../../containers/Notes';

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-home">
          home
          <Notes />
        </div>
      </div>
    )
  }
}

export default Home
