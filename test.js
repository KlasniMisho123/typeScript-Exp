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
// const name5 = getItemLength("empty")
// const array5 = getItemLength(["sad" , "ness"])
// console.log("name5: ",name5)
// console.log("array5: ",array5)
// ------ Interfaces --------
// interface Person {
//     name: string;
//     age: number;
//     height?: number;
//     hello?: () => void;
// }
// const person1: Person = {
//     name: "Misho",
//     age: 23,
//     hello: function () {
//         console.log(this.name + " says hi")
//     }
// }
// person1.hello()
// interface Employee extends Person {
//     employeeId: number;
// }
// const worker: Employee = {
//     name: "Nino",
//     age: 23,
//     hello: function () {
//         console.log(this.employeeId + " Requests Access To Enter")
//     },
//     employeeId: 11320288191
// }
// worker.hello?.()
// function getPerson(p: Person): Person {
//     return {
//         name: "Misho",
//         age: 23
//     }
// }
// ------ Classess & Abstract Classess --------
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, my name is: " + this.name);
    }
    ;
    getName() {
        if (this.name.length < 2)
            return "";
        return this.name;
    }
    setName(name) {
        if (name.length < 5)
            return;
        this.name = name;
    }
}
class Employee extends Person {
    callMe() {
        console.log(this.name);
    }
}
const p1 = new Employee("Misho");
class Animal {
    move(duration) {
        console.log("Moveing Along...");
        this.makeSound(duration);
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log("Woof woof");
    }
}
class Trex extends Animal {
    makeSound(duration) {
        console.log("Raawwrrr");
    }
}
const dog = new Dog();
const trex = new Trex();
trex.move(5);
// dog.move(10)
