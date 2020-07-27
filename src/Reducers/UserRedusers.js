// Actions Type
const UPDATE_ID_TOKEN = "user/UPDATE_ID_TOKEN"
const RCV_LOGIN = "user/RCV_LOGIN"


// Pure Action creator
export const rcvLogin = (data) => ({
    type: RCV_LOGIN,
    payload: {
        status: data
    }
});

export const updateIdToken = (id_token) => ({
    type: UPDATE_ID_TOKEN,
    payload: {
        id_token: id_token
    }
});

// Action
export const setUserLogin = (username, password) => dispatch => {
    let status = "gagal"

    if(username === "admin" && password === "123456") {
        status = "berhasil"
        dispatch(updateIdToken(username+password))
    } 
    
    dispatch(rcvLogin(status))

}

//Init 
const initialState = {
    id_token: "",
    data_login: "",
};

// Reducers
export default function UserReducers(state = initialState, action) {
    switch (action.type) {
        case UPDATE_ID_TOKEN:
            return {
                ...state,
                id_token: action.payload,
            };
        case RCV_LOGIN:
            return {
                ...state,
                data_login: action.payload
            };
        default:
            return state;
    }
}

