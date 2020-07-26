// Actions Type
const REQ_LOGIN = "user/REQ_LOGIN";
const RCV_LOGIN = "user/RCV_LOGIN";


// Pure Action// PURE ACTIONS CREATOR
const reqLogin = data => ({
    type: REQ_LOGIN,
    payload: {
        data_login: data,
        status: "req_login",
    }
});

export const rcvLogin = data => ({
    type: RCV_LOGIN,
    payload: {
        data_user: data,
        status: "rcv_login"
    }
});


const initialState = {
    data_user: {},
};

// Reducers
export default function UserReducers(state = initialState, action) {
    switch (action.type) {
        case REQ_LOGIN:
            return {
                ...state,
                status: action.payload.status,
            };
        case RCV_LOGIN:
            return {
                ...state,
                status: action.payload.status,
                data_user: action.payload.data_user
            };
        default:
            return state;
    }
}

