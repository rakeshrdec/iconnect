// import screenSize from "./screenSize";
// import  {combineReducers}   from "redux";
import { combineReducers }  from "redux";
import userInformation from "./userInformation";
import studentList from "./studentList";
import selectedStudentDetails from "./selectedStdentDetails";
import session from "./session";

// import empDataFromParentApp from "./empDataFromParentApp";
// import enablePopUp from "./enablePopup";

const appReducer = combineReducers({
    userInformation,
    studentList,
    selectedStudentDetails,
    session
    // screenSize,
    // empDataFromParentApp,
    // enablePopUp
})
export default appReducer;
