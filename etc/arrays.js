const usersArray = [
    {name: "Step", age: 19},
    {name: "German", age: 23},
    {name: "Gosha", age: 12},
    {name: "Andrei", age: 55}
]

debugger
const isStepHere = usersArray.some((user) => {return user.name === "Step"})
const isStepAll = usersArray.every((user) => {return user.name === "Step"})
const usersFilter = usersArray.filter(({name, age}) => {return age > 18 && name !== "Andrei"})
const usersFormatted = usersArray.map((user, i) => {return `${i}-${user.name}-${user.age}`})
const usersAgeSum = usersArray.reduce((sum, user) => sum+user.age, 0)
const usersReverse = [...usersArray].reverse()

console.log(usersFilter, isStepHere, isStepAll, usersArray.includes("Step"), usersFormatted, usersAgeSum, usersReverse)






