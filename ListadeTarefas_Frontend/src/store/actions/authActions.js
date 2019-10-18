import axios from 'axios';

export const signIn = (credentials) => {
    return (dispatch) => {
        axios.post('/auth', {
            Usuario: credentials.login,
            Senha: credentials.password
        }).then((resp) => {
            dispatch({ type: 'LOGIN_SUCCESS', payload: resp.data });
        }).catch((error) => {
            console.log("Erro");
            dispatch({ type: 'LOGIN_ERROR', payload: error });
        });
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT' })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {

            var user = {
                uid: resp.user.uid,
                name: newUser.name,
                email: newUser.email,
                displayName: newUser.name
            }

            saveUser(firebase, user);

        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', payload: err });
        });
    }
}

export const setLogin = (isSignIn) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOGIN', payload: isSignIn })
    }
}

function saveUser(firebase, currentUser) {
    var user = {
        name: currentUser.displayName,
        email: currentUser.email,
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL ? currentUser.photoURL : ''
    }
    firebase.database().ref(`users/${currentUser.uid}`).set(user)
        .then(resp => {
            console.log("salvo com sucesso")
        })
        .catch(err => {
            console.log("Erro: " + err);
        });
}