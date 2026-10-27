// Immutably Update

let myObj = {
  a: 1,
  b: 2,
  c: 3
}

// myObj.c = 333;

let newObj = {
  ...myObj,
  c: 333
}

console.log('myObj', myObj)
console.log('newObj', newObj)

const arr = [2, 3, 4, 5];

// arr.unshift(1);

const newArr = [
  1,
  ...arr
]

console.log('original', arr)
console.log('new array', newArr)