"use strict";
function makeName(firstName, lastName, middleName) {
    if (middleName)
        return firstName + " " + middleName + " " + lastName;
    else
        return firstName + " " + lastName;
}
// const fullName = makeName("Misho", "Silagava")
// console.log(fullName)
function callFunc(func, param1, param2) {
    return func(param1, param2);
}
const result = callFunc(makeName, "Misho", "Silagava");
console.log(result);
