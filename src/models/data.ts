export class FullName {
    short: string;
    full: string;
}

export class FullNameWithDetail extends FullName {
    value: string;
}


export let settings = {
    SAVE_DATE_FORMAT: 'yyyy-MM-dd',
    SHOW_DATE_FORMAT: 'dd/MM/yyyy',
    CURRENCY: '₹'
}

export const feeStatus = {
    PENDING: "Pending",

}

// export const apiUrl =  'http://13.127.128.192:8081';   // Iclass
// export const apiUrl =  'http://13.127.128.192:8082';   // KPS_Dariyaoganj
// export const apiUrl =  'http://13.127.128.192:8083';   // NSIC_Ganjdundwara
// export const apiUrl =  'http://13.127.128.192:8084';   // LKM_FZD
// export const apiUrl =  'http://13.127.128.192:8085';   // SSD_FZD
export const apiUrl =  'http://13.127.128.192:8086';   // IQRA_FZD
// export const apiUrl =  'http://13.127.128.192:8087';   // MSA_FZD

export const weekMap: Map<number, FullName> = new Map([
    [0, { short: 'Sun', full: 'Sunday' }],
    [1, { short: 'Mon', full: 'Monday' }],
    [2, { short: 'Tue', full: 'Tueday' }],
    [3, { short: 'Wed', full: 'Wednesday' }],
    [4, { short: 'Thu', full: 'Thursday' }],
    [5, { short: 'Fri', full: 'Friday' }],
    [6, { short: 'Sat', full: 'Saturday' }]
]);


export const monthMap: Map<number, FullName> = new Map([
    [4, { short: 'April', full: 'April' }],
    [5, { short: 'May', full: 'May' }],
    [6, { short: 'June', full: 'June' }],
    [7, { short: 'July', full: 'July' }],
    [8, { short: 'Aug', full: 'August' }],
    [9, { short: 'Sept', full: 'September' }],
    [10, { short: 'Oct', full: 'October' }],
    [11, { short: 'Nov', full: 'November' }],
    [12, { short: 'Dec', full: 'December' }],
    [1, { short: 'Jan', full: 'January' }],
    [2, { short: 'Feb', full: 'February' }],
    [3, { short: 'March', full: 'March' }],
]);