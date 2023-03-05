import React, { Component } from 'react'

export default class Ui extends Component {
    constructor(){
        super()
        this.state={
            name:'harsh'
        }
    }
  render() {
    return (
      <>
      <h1>{this.state.name}</h1>
        
        <button onClick={()=>this.setState({name:'sareen'})}>update name</button>
      </>
    )
  }
}
