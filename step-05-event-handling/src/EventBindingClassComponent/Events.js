import React, { Component } from 'react'

let color = {
    color : "dodgerBlue"
}

export default class Events extends Component {

    render() {
        let {name} = this.props
        function DisplayName(){
            alert("My name is : " + name)
        }
        return (
            <>
                <h3 style={color}>My name is : {name}</h3>
                <button onClick={DisplayName}>Display Name</button>
            </>
        )
    }
}


export class Events2 extends Component {
    
    render() {
        function DisplayName(name){
            alert("My name is : " + name)
        }
        return (
            <button onClick={() => DisplayName("Prophet Muhammad")}>Display My Name</button>
        )
    }
}

