import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header title={'Quadmins Test'}/>
            <div className="page_container">
                {this.props.children}
            </div>
        <Footer title={'Created by Joni Aguero'}/>
      </div>
    )
  }
}

export default Layout
