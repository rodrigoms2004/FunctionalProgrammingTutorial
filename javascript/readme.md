# Map, Reduce, Filter and something else using Javascript/NodeJS

Simple examples how to use functional programming

## Requirements

### NodeJS

[NodeJS](https://nodejs.org)

## Modify, add or remove elements of an array...

### Ordinary way...

Using looping FOR

```
const myArray = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i] ** 2
}
console.log(myArray)
```
**Result:** *[ 1, 4, 9, 16, 25, 36 ]*

### Using MAP

The method MAP returns an array

Using functional programing:
```
const myNewArray = [1, 2, 3, 4, 5, 6]

const powerArray1 = myNewArray.map((value) => {
  return value ** 2
})
console.log(powerArray1)
```
**Result:** *[ 1, 4, 9, 16, 25, 36 ]*

it could be written as...
```
const powerArray2 = myNewArray.map(value => value ** 2)
console.log(powerArray2)
```
**Result:** *[ 1, 4, 9, 16, 25, 36 ]*

or even as another function
```
function power(number, exponent) {
  return number ** exponent
}

const powerArray3 = myNewArray.map(value => power(value, 2))
console.log(powerArray3)
```
**Result:** *[ 1, 4, 9, 16, 25, 36 ]*



## Useful links

[Learn map, filter and reduce in Javascript](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)

