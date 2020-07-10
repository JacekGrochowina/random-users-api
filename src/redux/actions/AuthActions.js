import { authRef, GoogleProvider } from 'config/firebaseConfig';
import { FETCH_USER } from 'redux/actions/types';

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
            } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            });
        }
    });
};

export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(GoogleProvider)
        .then(result => {})
        .catch(error => {
        console.log(error);
    });
};