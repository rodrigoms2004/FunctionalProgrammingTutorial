const arrayOfNumbers = [20, 30, 200, 50, 500]

// Without functional programming
let sum1 = 0
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum1 = sum1 + arrayOfNumbers[i]
}
console.log(sum1) // 800

// With functional programming
const sum2 = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum2) // 800
