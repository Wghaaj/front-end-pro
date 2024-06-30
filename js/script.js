const array = ['hello', 35, 78, 'ok', 98, 1, 'pizza']
const filtered = array.filter((num) => typeof num === 'number')
// console.log(filtered)
const sum = filtered.reduce((a, b) => a + b, 0)
// console.log(sum)
const average  = sum / filtered.length
console.log(average)