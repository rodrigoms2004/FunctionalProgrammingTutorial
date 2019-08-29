const getSomeArray = array => {
  const results = []

  const timeout = 2000

  return new Promise((resolve, reject) => {
    array.forEach((value, index) => {

      setTimeout(async ()=> {
        try {
          console.log(`Waiting for ${timeout} ms...`)
          const data = await doSomeCalc(value)
          await results.push(data)
        } catch (error) {
          reject(error)
        }

        if (results.length === array.length) {
          resolve(results)
        }

      }, index * timeout)
    })  // forEach
  })  // new Promise
}

const doSomeCalc = value => {
  return value ** 5
}

const test = async() => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [...array1, 6, 7, 8, 9, 10]
  
  // array2.forEach((value, index, array) => {
  //   console.log(`${index} - ${value} => ${array}`)
  // })
  
  const powerArray = array2.map((value, index, array) => {
    return value ** 2
  })
  // console.log(powerArray)
  
  const multipleOfTwo= powerArray.filter((value, index, number) => {
    if (value % 2 === 0) return value
  })
  // console.log(multipleOfTwo)
  
  const sumAll = multipleOfTwo.reduce((accumulator, value, index, array) => {
    return accumulator += value
  }, 180)
  console.log(sumAll)

  const result = await getSomeArray(multipleOfTwo)
  console.log(result)


  const obj = {
    name: 'jose',
    age: 30,
    gender: 'm'
  }

  const { name, age, gender } = obj
  console.log(name, age, gender)

  const objArray = [
    { name: 'sophia', age: 10, gender: 'f'},
    { name: 'robert', age: 20, gender: 'm'},
    { name: 'sonia', age: 44, gender: 'f'}
  ]

  const [sophia, robert, sonia] = objArray
  console.log(sophia)
  console.log(robert)
  console.log(sonia)
}

test()