export const setLoginTrue = ()=>{
    return {
        type: 'SET_LOGGED_IN_TRUE'
    }
}
export const setLoginFalse = ()=>{
    return {
        type: 'SET_LOGGED_IN_FALSE'
    }
}

export const setLoginDetails = details=>{
    return{
        type: 'SET_LOGIN_DETAILS',
        payload: details
    }
}