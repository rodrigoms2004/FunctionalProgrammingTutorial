# Map, Reduce, Filter and something else using Javascript/NodeJS

Simple examples how to use functional programming

## Requirements

#### NodeJS

[NodeJS](https://nodejs.org)

## Modify, add or remove elements of an array...

#### Ordinary way...

Using looping FOR

```
const myArray = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i] ** 2
}
console.log(myArray)
```
**Result:** *[ 1, 4, 9, 16, 25, 36 ]*


#### Using MAP

The method MAP returns an array

Using functional programing:
```
const myNewArray = [1, 2, 3, 4, 5, 6]

const powerArray1 = myNewArray.map((value) => {
  return value ** 2
})
console.log(powerArray1)  // [ 1, 4, 9, 16, 25, 36 ]
```
it could be written as...
```
const powerArray2 = myNewArray.map(value => value ** 2)
console.log(powerArray2)  // [ 1, 4, 9, 16, 25, 36 ]
```
or even as another function
```
function power(number, exponent) {
  return number ** exponent
}
const powerArray3 = myNewArray.map(value => power(value, 2))
console.log(powerArray3)  // [ 1, 4, 9, 16, 25, 36 ]
```
___

## Now lets get only the even numbers of an array

#### The painful way...

```
const myArray = [1, 2, 3, 4, 5, 6]

const evenArray1 = []
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    evenArray1.push(myArray[i])
  }
}
console.log(evenArray1) // [ 2, 4, 6 ]
```

#### Using FILTER

```
const evenArray2 = myArray.filter(value => value % 2 === 0)
console.log(evenArray2) // [ 2, 4, 6 ]
```
___

## Sum all 


Given this array

```
const arrayOfNumbers = [20, 30, 200, 50, 500]
```

#### Using FOR

```
let sum1 = 0
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum1 = sum1 + arrayOfNumbers[i]
}
console.log(sum1) // 800
```

#### Using REDUCE 

```
const sum2 = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum2) // 800
```
___

## Putting all together

Given an array of objects

```
const people = [
  { id: 1, name: "Robison", age: 38, married: true, race: 'caucasian' },
  { id: 2, name: "Toshiba", age: 23, married: false, race: 'asian' },
  { id: 3, name: "Cintia", age: 53, married: true, race: 'black' },
  { id: 4, name: "Monica", age: 34, married: false, race: 'latin' },
  { id: 5, name: "Joana", age: 19, married: false, race: 'caucasian' }
]
```

#### An array of ages

from this array create an array only with ages

```
const ageArray = people.map((person) => {
  return person.age
})
console.log(ageArray) // [ 38, 23, 53, 34, 19 ]
```

#### Removing a field, add other with a value

Remove *race* field and create a new field called *mainLanguage* with value *English*
```
const morePeople = people.map((person)=> {
  const { race, ...otherFields } = person
  const result = {
    ...otherFields,
    mainLanguage: "English"
  }
  return result
})
```

resulting in:

```
[ 
  { id: 1, name: 'Robison', age: 38, married: true, mainLanguage: 'English' },
  { id: 2, name: 'Toshiba', age: 23, married: false, mainLanguage: 'English' },
  { id: 3, name: 'Cintia', age: 53, married: true, mainLanguage: 'English' },
  { id: 4, name: 'Monica', age: 34, married: false, mainLanguage: 'English' },
  { id: 5, name: 'Joana', age: 19, married: false, mainLanguage: 'English' } 
]
```

#### Filtering only married people

If *maried* value is *true*

```
const marriedPeople = morePeople.filter(value => value.married === true)
console.log(marriedPeople)
```

resulting in array of objects:
```
[ 
  { id: 1, name: 'Robison', age: 38, married: true, mainLanguage: 'English' },
  { id: 3, name: 'Cintia', age: 53, married: true, mainLanguage: 'English' }
]
```

#### Add another field

Add the field wage with 1000 monetary units

```
const morePeople2 = morePeople.map(person => {
  const { ...fieldList } = person

  const result = {
    ...fieldList,
    wage: 1000
  }
  return result
})
```

Resulting:
```
[ 
  { id: 1, name: 'Robison', age: 38, married: true, mainLanguage: 'English', wage: 1000 },
  { id: 2, name: 'Toshiba', age: 23, married: false, mainLanguage: 'English', wage: 1000 },
  { id: 3, name: 'Cintia', age: 53, married: true, mainLanguage: 'English', wage: 1000 },
  { id: 4, name: 'Monica', age: 34, married: false, mainLanguage: 'English', wage: 1000 },
  { id: 5, name: 'Joana', age: 19, married: false, mainLanguage: 'English', wage: 1000 } 
]
```

Add more 500 monetary units to maried people
```
const marriedPeopleWage = morePeople2.map(person => {
  const { ...fieldList } = person

  fieldList.wage += 500
  return {
    ...fieldList,
  }
}).filter(person => person.married === true)
console.log(marriedPeopleWage)
```

Each maried person have 1500 monetary units of wage now
```
[ 
  { id: 1, name: 'Robison', age: 38, married: true, mainLanguage: 'English', wage: 1500 },
  { id: 3, name: 'Cintia', age: 53, married: true, mainLanguage: 'English', wage: 1500 }
]
```

#### Join arrays

Update values from *morePeople2* using the new values from *marriedPeopleWage*, store it in *morePeople3*

```
const morePeople3 = morePeople2.map(person => {
  return Object.assign(person, marriedPeopleWage.find(p => p.id == person.id))
})
console.log(morePeople3)
```

Resulting:
```
[ 
  { id: 1, name: 'Robison', age: 38, married: true, mainLanguage: 'English', wage: 1500 },
  { id: 2, name: 'Toshiba', age: 23, married: false, mainLanguage: 'English', wage: 1000 },
  { id: 3, name: 'Cintia', age: 53, married: true, mainLanguage: 'English', wage: 1500 },
  { id: 4, name: 'Monica', age: 34, married: false, mainLanguage: 'English', wage: 1000 },
  { id: 5, name: 'Joana', age: 19, married: false, mainLanguage: 'English', wage: 1000 } 
]
```

#### Sum wages

Sum the wage of all people

```
const sumWage = morePeople3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.wage
}, 0)
console.log(sumWage)  // 6000
```

Increase in 200 monetary units the wage of people under 25 years old and single, summing all wages

```
const sumWageYoungSingle = morePeople3
.map(person => {
  const { ...fieldList } = person
  fieldList.wage += 200
  return { ...fieldList }
})
.filter(person => person.age < 25 && person.married === false)
.reduce((accumulator, currentValue) => accumulator + currentValue.wage, 0)

console.log(sumWageYoungSingle) // 2400
```


## Useful links

[Learn map, filter and reduce in Javascript](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)

