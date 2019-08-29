// Using map with an array of objects

const people = [
  { id: 1, name: "Robison", age: 38, married: true, race: 'caucasian' },
  { id: 2, name: "Toshiba", age: 23, married: false, race: 'asian' },
  { id: 3, name: "Cintia", age: 53, married: true, race: 'black' },
  { id: 4, name: "Monica", age: 34, married: false, race: 'latin' },
  { id: 5, name: "Joana", age: 19, married: false, race: 'caucasian' }
]

// create an array of ages
const ageArray = people.map((person) => {
  return person.age
})
console.log(ageArray)
// [ 38, 23, 53, 34, 19 ]


// Removing race field e create a new field called mainLanguage
const morePeople = people.map((person)=> {
  const { race, ...otherFields } = person

  const result = {
    ...otherFields,
    mainLanguage: "English"
  }

  return result
})
// console.log(morePeople)

// filtering only married people
const marriedPeople = morePeople.filter(value => value.married === true)
// console.log(marriedPeople)


// Add field wage 
const morePeople2 = morePeople.map(person => {
  const { ...fieldList } = person

  const result = {
    ...fieldList,
    wage: 1000
  }
  return result
})
// console.log(morePeople2)


// Add more US$ 500 of wage to the maried ones
const marriedPeopleWage = morePeople2.map(person => {
  const { ...fieldList } = person

  fieldList.wage += 500
  return {
    ...fieldList,
  }
}).filter(person => person.married === true)
// console.log(marriedPeopleWage)

const morePeople3 = morePeople2.map(person => {
  return Object.assign(person, marriedPeopleWage.find(p => p.id == person.id))
})
// console.log(morePeople3)

// Sum of wages

const sumWage = morePeople3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.wage
}, 0)
console.log(sumWage)  // US$ 6000


// Add R$ 200 to the wage of people under 25 years old and single
// sum all 
const sumWageYoungSingle = morePeople3
.map(person => {
  const { ...fieldList } = person
  fieldList.wage += 200
  return { ...fieldList }
})
.filter(person => person.age < 25 && person.married === false)
.reduce((accumulator, currentValue) => accumulator + currentValue.wage, 0)

console.log(sumWageYoungSingle) // 2400



