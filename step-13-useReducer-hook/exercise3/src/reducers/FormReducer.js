
const FormReducer = (state, action) => {
  switch(action.type){
    case 'Submit_Form':
        return {
            name: action.payload.name,
            email: action.payload.email,
            age: action.payload.age
        }
  }
}

export default FormReducer