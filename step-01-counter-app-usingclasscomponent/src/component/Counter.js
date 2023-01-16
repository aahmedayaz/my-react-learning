import React, { Component } from "react";


let container = {
    width : "500px",
    border : "2px solid black" ,
    backgroundColor : "rgb(245, 255, 151)" ,
    display : "flex",
    flexDirection : "column" ,
    gap : "30px" , 
    height : "200px" ,
    margin : "0px auto" ,
    textAlign : "center"
}

class Counter extends Component{
   constructor(props){
        super(props);
        this.state = {
            counter : 1
        }
   }

    increment = () => {
    this.setState({
        ...this.state ,
        counter : this.state.counter + 1
    })}

    decrement = () => {
        this.setState({
            ...this.state ,
            counter : this.state.counter - 1
        })}

    render(){
        return (
            <div className="container" style={container}>
                <h1 className="heading">Counter App No - {this.props.appNo}</h1>
                <span>{this.state.counter}</span>
                <div>
                    <button className = {`button${this.props.appNo}`} onClick={this.increment}>+</button>
                    <button className = {`button${this.props.appNo}`} onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;


