import { createStore, applyMiddleware } from "redux";
import { userReducer } from './userReducer';
import thunk from 'redux-thunk';

const initialState = {isPending : false,  data: [], error : null}

const store = createStore(
    userReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;