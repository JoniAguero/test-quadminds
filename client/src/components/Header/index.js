import React from 'react'

const Header = (props) => {
  return (
    <header>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    </header>
  )
}

export default Header

