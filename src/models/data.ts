import { FullName, FullNameWithDetail } from "./common-model";

export let settings = {
    SAVE_DATE_FORMAT: 'yyyy-MM-dd',
    SHOW_DATE_FORMAT: 'dd/MM/yyyy',
    CURRENCY: '₹'
}

export const feeStatus = {
    PENDING: "Pending",

}

export const quartrlyMap: Map<number, FullNameWithDetail> = new Map([
    [1, { short: 'Q1', full: 'Quarter-1', value: '( April, May, June )' }],
    [2, { short: 'Q2', full: 'Quarter-2', value: '( July, Aug, Sept )' }],
    [3, { short: 'Q3', full: 'Quarter-3', value: '( Oct, Nov, Dec )' }],
    [4, { short: 'Q4', full: 'Quarter-4', value: '( Jan, Feb, March )' }]
]);


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