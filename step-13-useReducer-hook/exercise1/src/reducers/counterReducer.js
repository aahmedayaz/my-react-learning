const counterReducer = (state, action) => {
    switch(action.type){
        case 'Increase':
            return state + action.payload
        case 'Decrease':
            return state - action.payload
        case 'Reset':
            return state = action.payload
    }
}

export default counterReducer;