// import screenSize from "./screenSize";
// import  {combineReducers}   from "redux";
import { combineReducers }  from "redux";
import userInformation from "./userInformation";
// import empDataFromParentApp from "./empDataFromParentApp";
// import enablePopUp from "./enablePopup";

const appReducer = combineReducers({
    userInformation
    // screenSize,
    // empDataFromParentApp,
    // enablePopUp
})
export default appReducer;
