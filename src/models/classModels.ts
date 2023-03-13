export class ClassModel {
    id: number;
    name: string;
    sessionYear: number;
}

export class ClassSubjectModel {
    id: number;
    classId: number;
    subjectId: number;
    isPractical: number;
}

export class ClassSectionModel {
    id: number;
    classId: number;
    name: string;
}

export class ClassFeeModel {
    id?: number;
    feesTypeId: number;
    classId?: number;
    amount: number;
}


export class ClassRequestModel {
    classDetails: ClassModel;
    subjects: ClassSubjectModel[];
    sections: ClassSectionModel[];
    fees: ClassFeeModel[];
}

export class ClassTimeTableModel {
    sectionId: number;
    subjectId: number;
    isPractical: number;
    weekDaysNumber: number;
    timetableId: number;
    staffId: number;
    sessionYear: number;
}

export class ViewTimeTable {
    summerStartTime: string;
    summerEndTime: string;

    winterStartTime: string;
    winterEndTime: string;
    theoryTitle: string;
    sectionId?: number;
    subjectId: number;
    staffId: number;
    practical: number;
}