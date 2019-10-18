const initState = {
    authError: null,
    isSignIn: true,
    user: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                authError: null
            };
        case 'LOGOUT':
                return {
                    ...state,
                    user: null,
                    authError: null
                };

        case 'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
                isSignIn: true
            };
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.payload.message
            };

        case 'SET_LOGIN':
            return {
                ...state,
                isSignIn: action.payload
            };

        default:
            return state;
    }
}

export default authReducer;