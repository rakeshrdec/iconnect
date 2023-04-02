import store from "../store";
import types from "../types";

const { dispatch } = store;

export function selectedStudentDetails (data) {
    dispatch(
        {
            type: types.SELECTED_STUDENT_DETAILS,
            payload: data,
        }
    );
}