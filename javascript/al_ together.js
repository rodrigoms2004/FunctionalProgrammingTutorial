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


// filtering only married people
const marriedPeople = morePeople.filter(value => value.married === true)
// console.log(marriedPeople)


// Add field salary 
const morePeople2 = morePeople.map(person => {
  const { ...fieldList } = person

  const result = {
    ...fieldList,
    salary: 1000
  }
  return result
})

// Add more US$ 500 of salary to the maried ones
const marriedPeopleSalary = morePeople2.map(person => {
  const { ...fieldList } = person

  fieldList.salary += 500
  return {
    ...fieldList,
  }
}).filter(person => person.married === true)
// console.log(marriedPeopleSalary)

const morePeople3 = morePeople2.map(person => {
  return Object.assign(person, marriedPeopleSalary.find(p => p.id == person.id))
})
// console.log(morePeople3)

// Sum of salaries

const sumSalary = morePeople3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.salary
}, 0)
// console.log(sumSalary)  // US$ 6000


// Add R$ 200 to the salary of people under 25 years old and single
// sum all 
const sumSalaryYoungSingle = morePeople3
.map(person => {
  const { ...fieldList } = person
  fieldList.salary += 200
  return { ...fieldList }
})
.filter(person => person.age < 25 && person.married === false)
.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0)

console.log(sumSalaryYoungSingle) // 2400



