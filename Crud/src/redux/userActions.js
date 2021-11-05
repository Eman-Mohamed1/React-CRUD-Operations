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
import HttpRequest from "../data/network/httpRequest";
import HttpService from "../data/network/httpService";

//get Action
export const userList = () => async (dispatch) => {
    dispatch({
      type:  USER_DATA_REQUEST
    });
    try {
      
        const request = new HttpRequest();
        request.url = "https://618448d3ac0b850017489db7.mockapi.io/CRUD";
        request.method = 'GET';
        await HttpService.send(request).then((data)=>{
        console.log('data get from actions',data)
      dispatch({ type: USER_DATA_SUCCESS, payload: data }); })

    } catch (error) {
      dispatch({ type:USER_DATA_FAIL, payload: error.message });
    }

};



//delete Action
  export const userDeletion = (ID) => async (dispatch) => {
    dispatch({
      type:  USER_DELETION_REQUEST
    });
    try {
      
        const request = new HttpRequest();
        request.url = `https://618448d3ac0b850017489db7.mockapi.io/CRUD/${ID}`;
        request.method = 'DELETE';
        await HttpService.send(request).then((data)=>{
        console.log('data of delete from actions',data) //his is an empty data comes from delete so there is a problem here
      dispatch({ type: USER_DELETION_SUCCESS, payload: ID }); })

    } catch (error) {
      dispatch({ type:   USER_DELETION_FAIL, payload: error.message });
    }
};


//add Action
  export const userAddition = (values) => async (dispatch) => {
    dispatch({
      type:   USER_ADDITION_REQUEST
    });
    try {
      
        const request = new HttpRequest();
        request.url = `https://618448d3ac0b850017489db7.mockapi.io/CRUD`;
        request.method = 'POST';
        request.body = values;
        await HttpService.send(request).then((data)=>{
        console.log('data add from action',data)
      dispatch({ type:USER_ADDITION_SUCCESS, payload: data }); })

    } catch (error) {
      dispatch({ type:USER_ADDITION_FAIL, payload: error.message });
    }
};

//update Action
  export const userUpdate = (values,id) => async (dispatch) => {
    dispatch({
    type:   USER_UPDATE_REQUEST
    });
    try {
        const request = new HttpRequest();
        request.url = `https://618448d3ac0b850017489db7.mockapi.io/CRUD/${id}`;
        request.method = 'PUT';
        request.body = values;
        await HttpService.send(request).then((data)=>{
        console.log('data',data)
        dispatch({ type:  USER_UPDATE_SUCCESS, payload: data }); })

    } catch (error) {
      dispatch({ type:    USER_UPDATE_FAIL, payload: error.message });
    }
};



