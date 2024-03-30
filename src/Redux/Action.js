


import axios from "axios";
import { toast } from "react-toastify";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER ,LOGOUT,LOGIN_SUCCESS, LOGIN_FAILURE,LOGIN_REQUEST} from "./ActionType";

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    };
};

export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    };
};

export const geUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    };
};

export const deleteUser = () => {
    return {
        type: DELETE_USER
    };
};

export const addUser = () => {
    return {
        type: ADD_USER
    };
};

export const updateUser = () => {
    return {
        type: UPDATE_USER
    };
};

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    };
};

export const login = (username, password) => {
  return async (dispatch) => {
      try {
       
          if (username === 'example' && password === 'password') {
      
              dispatch({ type: LOGIN_SUCCESS, payload: { username } });
          } else {
             
              dispatch({ type: LOGIN_FAILURE, payload: 'Invalid username or password' });
          }
      } catch (error) {
          
          console.error("Login error:", error);
         
      }
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (username) => {
  return {
    type: LOGIN_SUCCESS,
    payload: username
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};
export const FetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.get('http://localhost:8000/user')
            .then(res => {
                const userlist = res.data;
                dispatch(geUserList(userlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};

export const Removeuser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.delete(`http://localhost:8000/user/${code}`)
            .then(res => {
                dispatch(deleteUser());
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FunctionAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.post('http://localhost:8000/user', data)
            .then(res => {
                dispatch(addUser());
                toast.success('User Added successfully.');
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FunctionUpdateUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.put(`http://localhost:8000/user/${code}`, data)
            .then(res => {
                dispatch(updateUser());
                toast.success('User Updated successfully.');
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());

        axios.get(`http://localhost:8000/user/${code}`)
            .then(res => {
                const userlist = res.data;
                dispatch(getUserObj(userlist));
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};
export const logout = () => {
  return {
      type: LOGOUT
  };
};