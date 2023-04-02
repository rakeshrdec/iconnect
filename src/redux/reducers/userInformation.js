import types from "../types";

//  this is default state will change after dispatch 
let init_state = {
    name: 'Rakesh',
    mob: 9891979411,
    email: 'rakesh@gmail.com',
    aadhar: 887798979798243,
}

export default function userInformation (state = init_state, action) {
    switch (action.type) {
        case types.USER_INFORMATION:
            {
                let data = action.payload
                return {
                    data
                };
            }
        default:
            return { ...state };
    }
}