
import store from "../store";
import types from "../types";

const { dispatch } = store;

export function userInformation (data) {
    dispatch(
        {
            type: types.USER_INFORMATION,
            payload: data,
        }
    );
}