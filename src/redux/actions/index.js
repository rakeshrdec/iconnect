import * as studentList from './studentList';
import * as userInformation from './userInformation';
import * as selectedStudentDetails from './selectedStudentDetails'

// import * as screenSizeCondition from './screenSizeCondition';
// import * as empDataFromParentApp from './empDataFromParentApp';
// import * as enablePopUp  from './enablePopUp';

export default{
    ...userInformation,
    ...studentList,
    ...selectedStudentDetails,
    // ...screenSizeCondition,
    // ...empDataFromParentApp,
    // ...enablePopUp,

}