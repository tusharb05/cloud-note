const loginReducer = (state={loggedIn:false,details:{}}, action)=>{
    switch(action.type){
        case 'SET_LOGGED_IN_TRUE':
            return {...state, loggedIn:true}

        case 'SET_LOGGED_IN_FALSE':
            return {...state, loggedIn: false}

        case 'SET_LOGIN_DETAILS':
            return {...state, details:action.payload}

        default:
            return state
    }
}

export default loginReducer