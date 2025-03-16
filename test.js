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
        return "Hello World";
    }
    return 0;
}
const person1 = {
    name: "Misho",
    age: 23,
    hello: function () {
        console.log(this.name + " says hi");
    }
};
const worker = {
    name: "Nino",
    age: 23,
    hello: function () {
        console.log(this.employeeId + " Requests Enter Access");
    },
    employeeId: 11320288191
};
worker.hello();
