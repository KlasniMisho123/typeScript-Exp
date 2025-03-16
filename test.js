"use strict";
// ------ Functions --------
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
// const result = callFunc(makeName, "Misho", "Silagava")
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
function getItemLength(nameOrNames) {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)) {
        return nameOrNames.length;
    }
    return 0;
}
const name5 = getItemLength("empty");
const array5 = getItemLength(["sad", "ness"]);
console.log("name5: ", name5);
console.log("array5: ", array5);
