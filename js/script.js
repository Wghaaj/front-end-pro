let input = prompt('Enter your values seperated by commas')
// разделить данные на массив и изменить на числа где потребуется 
let array = input.split(',').map(item => {
    item = item.trim()
    return isNaN(item) ? item : Number(item)
})
// console.log(array)

function findAverage(array) {
    let filtered = array.filter((num) => typeof num === 'number')
    // console.log(filtered)
    let sum = filtered.reduce((a, b) => a + b, 0)
    // console.log(sum)
    let average  = sum / filtered.length
    console.log(average)
}
findAverage(array)

