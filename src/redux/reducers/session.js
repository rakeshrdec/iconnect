import types from "../types";

//  this is default state will change after dispatch 
let init_state = {}

export default function session (state = init_state, action) {
    switch (action.type) {
        case types.SESSION_DETAILS:
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