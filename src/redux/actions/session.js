import store from "../store";
import types from "../types";

const { dispatch } = store;

export function session (data) {
    dispatch(
        {
            type: types.SESSION_DETAILS,
            payload: data,
        }
    );
}