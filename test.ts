function makeName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) return firstName + " " + middleName + " " + lastName
    else return firstName + " " + lastName
}

// const fullName = makeName("Misho", "Silagava")

// console.log(fullName)

function callFunc(
    func: (f:string, l:string, m?:string) => string,
    param1: string,
    param2: string
) {
    return func(param1, param2)
}

const result = callFunc(makeName, "Misho", "Silagava")

console.log(result)