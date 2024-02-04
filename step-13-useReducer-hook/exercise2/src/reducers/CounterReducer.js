let CounterReducer = (state, action) => {
    switch(action.type){
        case "Increment":
            return state + action.payload
        
        case "Decrement":
            return state - action.payload
        
        case "Reset":
            return state = action.payload
    }
}

export default CounterReducer;