import React , {Component} from 'react';
import Navbar from './component/master-components/Navbar';
import Counter from './component/Counter';

class App extends Component{
    render(){
        return(
            <>
                <Navbar />
                <Counter appNo = "1" start = {15}/>
                <Counter appNo = "2" start = {35}/>
            </>
        )
    }
}

export default App;