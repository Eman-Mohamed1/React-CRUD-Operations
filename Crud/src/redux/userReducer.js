import {USER_DATA_REQUEST,
USER_DATA_SUCCESS,
USER_DATA_FAIL,
USER_DELETION_REQUEST,
USER_DELETION_SUCCESS,
USER_DELETION_FAIL,
USER_ADDITION_REQUEST,
USER_ADDITION_SUCCESS,
USER_ADDITION_FAIL,
USER_UPDATE_REQUEST,
USER_UPDATE_SUCCESS,
USER_UPDATE_FAIL} from "./userConstants"
import initialState from './store';

export const userReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {

        //get users
    case USER_DATA_REQUEST:
        return {...state,isPending : true };
    case USER_DATA_SUCCESS:
        console.log('state from reducer ',action.payload)
        return {...state,isPending : false, data: action.payload };
    case USER_DATA_FAIL:
        return {...state,isPending : false, error: action.payload };

        //delete user
    case USER_DELETION_REQUEST:
        return {...state,isPending : true };

    case USER_DELETION_SUCCESS:

        const filterdData= state.data.filter((user)=>user.id!==action.payload*1)
        console.log('data filtered from actions',filterdData)
        return {...state,isPending : false, data: filterdData };

    case USER_DELETION_FAIL:
        return {...state,isPending : false, error: action.payload };

        //add user 
    case USER_ADDITION_REQUEST:
        return {...state ,isPending : true};

    case USER_ADDITION_SUCCESS:
        console.log('state from reducer ',action.payload)
        console.log('state',state) ///000 ??
        return {...state,isPending : false,data:state.data.concat(action.payload) };

    case USER_ADDITION_FAIL:
        return {...state,isPending : false, error: action.payload };

        //update user
    case USER_UPDATE_REQUEST:
        return {...state ,isPending : true};
    case USER_UPDATE_SUCCESS:
        return {...state,isPending : false, data:[{...state.data},action.payload] };
    case USER_UPDATE_FAIL:
        return {...state,isPending : false, error: action.payload };
    default:
        return state;
    }
};