const myArray = [1, 2, 3, 4, 5, 6]

// Without funcional programming
const evenArray1 = []
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenArray1.push(myArray[i])
  }
}

console.log(evenArray1)  // [ 2, 4, 6 ]


// With functional programming
const evenArray2 = myArray.filter(value => value % 2 === 0)
console.log(evenArray2) // [ 2, 4, 6 ]