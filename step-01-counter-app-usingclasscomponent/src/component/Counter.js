import React, { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter : this.props.start
        }
    }

    increment = () =>{
        this.setState({
            ...this.state ,
            counter : this.state.counter + 1
        })
    }
    
    decrement = () =>{
        this.setState({
            ...this.state ,
            counter : this.state.counter -1
        })
    }

    render(){
        return (
            <>
                <h1 className="heading">Counter App No. {this.props.appNo}</h1>
                <span>{this.state.counter}</span>
                <div>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </>
        )
    }
}

export default Counter;
