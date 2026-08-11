const myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

const anotherObject = {
  ...myObj,
  a: 11
}

console.log(anotherObject)