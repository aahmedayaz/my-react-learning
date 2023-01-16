import React , {Component} from 'react';
import Navbar from './component/master-components/Navbar';
import Counter from './component/Counter';


let bag = {
    border : "2px solid black" ,
    display : "flex" ,
    padding : "20px"
}


let button = {
    padding : "20px 50px" ,
    backgroundColor : "dodgerblue" ,
    border : "none" ,
    outline : "none" , 
    margin : "10px"
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter1 : true ,
            counter2 : false
        }
    }

    showAnotherCounter = () =>{
        this.setState({...this.state , counter1 : !this.state.counter1 , counter2 : !this.state.counter2})
    }

    render(){
        return(
            <>
                <Navbar />
                <button style={button} onClick={this.showAnotherCounter}>{
                    this.state.counter1 ? 'Show Counter 2' : 'Show Counter 1'
                }</button>
                <div className='bag' style={bag}>
                    {this.state.counter1 && <Counter appNo = {1}/>}
                    {this.state.counter2 && <Counter appNo = {2}/>}
                </div>
            </>
        )
    }
}

export default App;