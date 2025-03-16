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
// console.log(result)
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function applyFunc(funcs, values) {
    const results = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
console.log(applyFunc([mul, div], [[1, 2], [4, 5]]));
