// First JS Practice Problem

"use strict"
let hoursWorked = prompt("Enter Hours Worked This Week");

let payRate = prompt("Enter Pay Rate");

if (hoursWorked > 40) {
    let overTimeHours = hoursWorked - 40;
    let overTimePay = overTimeHours * (payRate * 1.5);
    let weekPay = ((hoursWorked - overTimeHours) * payRate) + overTimePay;

    console.log("Your weekly pay is : " + weekPay);
}

else {
    let weekPay = hoursWorked * payRate;

    console.log("Your weekly pay is : " + weekPay);
}


