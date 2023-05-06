import PropTypes from 'prop-types'
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    console.log(`${this.props.name} constructor is called`);
  }
  render() {
    return (
      <>
        <h1>{this.props.name} is {this.props.age} old</h1>
      </>
    )
  }
}

App.propTypes = {
  name : PropTypes.string ,
  age : PropTypes.number
}

export default App;
