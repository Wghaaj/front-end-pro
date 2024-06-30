function removeCharacters(str, remove) {
    //пройти по всем символам массива и оставить только те, которые которых нету в remove
    // return str.split('').filter(function(char) {
    //     return !remove.includes(char)
    // }).join('')
    
    return str.split('').filter(char => !remove.includes(char)).join('')
}

let string = prompt("Enter your text:")
let characters = prompt("Enter characters to remove WITHOUT space")
let remove = characters.split('')

let result = removeCharacters(string, remove)
alert(result)
