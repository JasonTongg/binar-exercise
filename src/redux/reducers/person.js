import {ADD} from '../actions/index'

let initialState = [{
    id: 1,
    name: "Jason",
    address: "Jakarta",
    phoneNumber: "085363655590",
    photo: "https://images.unsplash.com/photo-1660312781383-160cd6297d70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
}]

let personReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case ADD:
            return {...state, payload}
        default:
            return state;
    }
}

export default personReducer;
