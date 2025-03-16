// ------ Functions --------
// function makeName(firstName: string, lastName: string, middleName?: string) {
//     if (middleName) return firstName + " " + middleName + " " + lastName
//     else return firstName + " " + lastName
// }

// const fullName = makeName("Misho", "Silagava")

// console.log(fullName)

// function callFunc(
//     func: (f:string, l:string, m?:string) => string,
//     param1: string,
//     param2: string
// ) {
//     return func(param1, param2)
// }

// const result = callFunc(makeName, "Misho", "Silagava")

// console.log(result)


// function mul(x: number, y: number ): number {
//     return x * y
// }

// function div(x: number, y: number) : number {
//     return x / y
// }

// function applyFunc(
//     funcs: ((n1: number, n2: number) => number)[], 
//     values: [number,number][]
// ): number[] {
//     const results = [] as number[];
//     for (let i = 0; i < funcs.length; i++) {
//         const args = values[i]
//         const result = funcs[i](args[0],args[1])
//         results.push(result)
//     }

//     return results;
// }

// console.log(applyFunc([mul,div], [[1,2], [4,5]]))


// ------ Advanced Functions --------
// function getItemLength(name: string): number 
// function getItemLength(names: string[]): string
// function getItemLength(nameOrNames: unknown): unknown{
//     if (typeof nameOrNames === "string") {
//         return nameOrNames.length
//     } else if (Array.isArray(nameOrNames)) {
//         return "Hello World"
//     }
//     return 0
// }

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

// class Person {
//     protected name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     protected greet() {
//         console.log("Hello, my name is: " + this.name)
//     };
//     getName() {
//         if(this.name.length < 2) return ""
//         return this.name
//     }
//     setName(name: string) {
//         if(name.length < 5) return 
//         this.name = name
//     }
// }

// class Employee extends Person {
//     callMe() {
//         console.log(this.name)
//     }
// }

// const p1 = new Employee("Misho")

// abstract class Animal {
//     abstract makeSound(duration: number): void

//     move(duration: number) {
//         console.log("Moveing Along...")
//         this.makeSound(duration)
//     }
// }

// class Dog extends Animal {
//     makeSound(duration: number): void {
//         console.log("Woof woof")
//     }
// }

// class Trex extends Animal {
//     makeSound(duration: number): void {
//         console.log("Raawwrrr")
//     }
// }

// const dog = new Dog()

// const trex = new Trex()

// trex.move(5)
// dog.move(10)

// ------ Classess & Interfaces --------

// interface Bird {
//     speak(): void
// }

// class Pteradon implements Bird{
//     private name: string;
//     private color: string;

//     constructor(name: string, color:string) {
//         this.name = name;
//         this.color = color
//     }

//     speak() {
//         console.log(`I am ${this.name} and I'm ${this.color} Colored`)
//     }

//     test() {
//         return 1
//     }
// }




// class Albatross implements Bird {
//     speak() {
//         console.log("♪♪♪ ...(Albatrosses Sounds)")
//     }
// }

// const ptera1: Bird= new Pteradon("Lya", "Red")
// const alba1 = new Albatross()
// const birds: Bird[] = [alba1, ptera1]

// function makeSound(bird: Bird) {
//     bird.speak()
// }

// makeSound(alba1)

// ------ Satic Atributes & Methods --------

// class Dog {
//     static instanceCount: number = 0;
//     name: string;

//     constructor(name: string) {
//         Dog.instanceCount++;
//         this.name = name
//     }

//     static decreaseCount() {
//         this.instanceCount--;
//     }
// }

// const dog1 = new Dog("Jessy")
// console.log(Dog.instanceCount)

// const dog2 = new Dog("Spike")
// console.log(Dog.instanceCount)

// Dog.decreaseCount()
// console.log(Dog.instanceCount)

// ------ Generics --------

// class DataStore<T> {
//     private items: T[] = [];
//     addItem(item: T): void {
//         this.items.push(item)
//     }

//     getItem(index: number): T {
//         return this.items[index]
//     }
//     removeItem(index: number): void {
//         this.items.splice(index, 1)
//     }
//     getAllItems(): T[] {
//         return this.items
//     }
// }

// const data = new DataStore<string>()

// interface User {
//     name: string ;
//     id: number
// }

// const data = new DataStore<User>()

// const user1: User = {
//     name:"misho",
//     id: 62802011
// }

// data.addItem(user1)
// console.log(data.getAllItems())

// function getValue<K, V>(Key: K, Value: V, value2: V): V {
//     if(Key) {
//         return Value
//     }
//     return value2
// }

// const data = getValue<string, number>("",2,3)

// console.log(data)

// -------- Type Aliases --------

// type Coordinate = [number, number]

// function compareCoords(
//     p1: Coordinate, 
//     p2: Coordinate
// ): Coordinate {
//     return[p1[0], p2[1]]
// }

// const coords: Coordinate [] = [];

// -------- Union & intersection --------

// type stringOrNumber = string | number | boolean

// function acceptVal(val: stringOrNumber) {

// }

// interface BusinessParthner {
//     name: string
// }

// interface ContactDetails {
//     email: string;
//     phone: string;
// }

// type BusinessContact = ContactDetails & BusinessParthner

// const contact: BusinessContact = {
//     name: "Misho",
//     email: "whocares@gmail.com",
//     phone: ""
// }

// console.log(contact)

// interface Individial {
//     name: string;
//     birthday: Date;
// }

// interface Organization {
//     companyName: string;
//     workPhone: string;
// }

// type ContactType = Individial | Organization

// type CompContact = Individial & Organization

// function addContact(contact: ContactType) {
//     if ("birthday" in contact) {
//         console.log(contact.name, contact.birthday)
//     } else {
//         console.log(contact.companyName, contact.workPhone
//         )
//     }
// }

// -------- Type guards --------