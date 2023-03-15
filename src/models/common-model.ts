export class UploadFileModel {
    fileName: string;
    fileDownloadUri: string;
    fileType: string;
    size: number;
  }
  
  
  export class FeesTypeModel {
    id: number;
    name: string;
    isMonthly: boolean;
    isExamFee: boolean;
    isQuarterly: boolean;
    isYearly: boolean;
    isAdmission: boolean;
  }
  
  export class PaymentTypeModel {
    id: number;
    name: string;
    isCheque: boolean;
  }
  
  export class GenderModel {
    id: number;
    name: string;
  }
  
  export class CategoryModel {
    id: number;
    name: string;
  }
  
  export class UserTypeModel {
    id: number;
    name: string;
  }
  
  export class WeeklyOffModel {
    id: number;
    name: string;
    weekDaysNumber: number;
    active: boolean;
  }
  
  export class MarksGradesModel {
    id: number;
    gradeName: string;
    minPercentage: number;
    maxPercentage: number;
  }
  
  export class IdProofModel {
    id: number;
    name: string;
  }
  
  export class FullName {
    short: string;
    full: string;
  }
  
  export class FullNameWithDetail extends FullName {
    value: string;
  }
  
  export class CountModel {
    count: number;
    value: number;
  }
  
  export class AttendanceDataModel {
    absent: number;
    present: number;
    totalWeekend: number;
    totalHolidays: number;
    month: number;
    year: number;
  }
  
  export class AttendanceDtoModel {
    startDate: string;
    endDate: string;
    attendanceDates: AttendanceRequestModel[];
  }
  
  export class AttendanceRequestModel {
    ids: number[];
    attendanceDate: string;
  }
  