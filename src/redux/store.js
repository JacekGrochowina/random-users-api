import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";
import allReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware(reduxThunk)
    )
)

export default store;