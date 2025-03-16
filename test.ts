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

// console.log(result)


function mul(x: number, y: number ): number {
    return x * y
}

function div(x: number, y: number) : number {
    return x / y
}

function applyFunc(
    funcs: ((n1: number, n2: number) => number)[], 
    values: [number,number][]
): number[] {
    const results = [] as number[];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i]
        const result = funcs[i](args[0],args[1])
        results.push(result)
    }

    return results;
}

console.log(applyFunc([mul,div], [[1,2], [4,5]]))