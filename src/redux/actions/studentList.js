import store from "../store";
import types from "../types";

const { dispatch } = store;

export function studentList (data) {
    dispatch(
        {
            type: types.STUDENT_LIST,
            payload: data,
        }
    );
}