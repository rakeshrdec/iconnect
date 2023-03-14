// import screenSize from "./screenSize";
// import  {combineReducers}   from "redux";
import { combineReducers }  from "redux";
import userInformation from "./userInformation";
import studentList from "./studentList";
import selectedStudentDetails from "./selectedStdentDetails";
// import empDataFromParentApp from "./empDataFromParentApp";
// import enablePopUp from "./enablePopup";

const appReducer = combineReducers({
    userInformation,
    studentList,
    selectedStudentDetails
    // screenSize,
    // empDataFromParentApp,
    // enablePopUp
})
export default appReducer;
