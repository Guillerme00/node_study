// Ex 01
const filterEven = (numbers: number[]):number[] => {
    return numbers.filter((e) => e%2 === 0)
}
console.log("Ex 01")
console.log(filterEven([2,3,4,5,6,7,8]))
console.log("")

const getSquare = (numbers: number[]):number[] => {
    return numbers.map((e) => e*e)
}
console.log("Ex 02")
console.log(getSquare([1,2,3,4]))
console.log("")

const reduceNumbers = (numbers: number[]):number => {
    return numbers.reduce((acc, value) => value + acc, 0)
}
console.log("Ex 03")
console.log(reduceNumbers([1,2,3,4]))
console.log("")

interface User {
    id: number;
    name: string;
    age: number;
}
const user1:User = {
    id: 1,
    age: 20,
    name: "Guilherme"
}
const user2:User = {
    id: 2,
    age: 16,
    name: "Gabriel"
}
const user3:User = {
    id: 3,
    age: 42,
    name: "Eduardo"
}
const user4:User = {
    id: 4,
    age: 45,
    name: "Jane"
}
const users = [user1, user2, user3, user4]
const filterUsers = (userList:User[]):User[] => {
    return userList.filter((e) => e.age >= 18)
}
console.log("Ex 04")
console.log(filterUsers(users))
console.log("")

type User2 = {
    id: number;
    name: string;
}

const userlist2: User2[] = [
    {
        id: 1,
        name: "guilherme"
    },
    {
        id: 2,
        name: "guilherme"
    },
    {
        id: 3,
        name: "guilherme"
    },
    {
        id: 4,
        name: "guilherme"
    },
    {
        id: 5,
        name: "guilherme"
    },
]

const findUserId = (userList: User2[], id: number):User2|string => {
    const userFound = userList.find((e) => e.id === id)
    if (userFound) {
        return userFound
    }
    return "User not found"
}
console.log("Ex 05")
console.log(findUserId(userlist2, 3))
console.log("")