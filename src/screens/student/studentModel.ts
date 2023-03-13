export class Student {
    id: number;
    name: string;
    dob: string;
    gender: number;
    email: string;
    uploadImg: string;
    fatherName: string;
    motherName: string;
    emergencyMobile: string;
    address: string;
    enroll: string;
    regDate: string;
    srNo: string;
    joiningSession: number;
    active: boolean;
    category: number;

}
export class StudentRoll {
    studentId: number;
    rollNo: string;
}
export class StudentActivityModel extends StudentRoll {
    id: number;
    sessionYear: number;
    classId: number;
    sectionId: number;
    isPromote: number;
}

export class StudentLoginModel {
    id: number;
    mobile: string;
    password: string;
}
export class StudentModel {
    student: Student;
    studentActivityModel: StudentActivityModel;
    studentLoginModel: StudentLoginModel;
}