import types from "../types";

//  this is default state will change after dispatch 
let init_state = {}

export default function selectedStudentDetails (state = init_state, action) {
    switch (action.type) {
        case types.SELECTED_STUDENT_DETAILS:
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