function makeName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) return firstName + " " + middleName + " " + lastName
    else return firstName + " " + lastName
}

const fullName = makeName("Misho", "Silagava")

console.log(fullName)