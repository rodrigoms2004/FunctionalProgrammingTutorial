

/**
 * Modify an array power each element by 2
 */


// Without functional programming 
const myArray = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i] ** 2
}
console.log(myArray)
// Result: [ 1, 4, 9, 16, 25, 36 ]


// Using functional programing
const myNewArray = [1, 2, 3, 4, 5, 6]

// map method returns an array
const powerArray1 = myNewArray.map((value) => {
  return value ** 2
})
console.log(powerArray1)
// Result: [ 1, 4, 9, 16, 25, 36 ]

// it could be written as...
const powerArray2 = myNewArray.map(value => value ** 2)
console.log(powerArray2)
// Result: [ 1, 4, 9, 16, 25, 36 ]

// or even with a separated function

function power(number, exponent) {
  return number ** exponent
}

const powerArray3 = myNewArray.map(value => power(value, 2))
console.log(powerArray3)
// Result: [ 1, 4, 9, 16, 25, 36 ]
