// collecting the information from the user
let userName = prompt('Enter your first name')
while(userName === null || userName === undefined || userName === '') {
  userName = prompt('Enter your first name again')
}
let surname = prompt('Enter your surname')
while(surname === null || surname === undefined || surname === '') {
  surname = prompt('Enter your surname again')
}
let age = prompt('Enter your age ')
while(age === null || age === undefined || age === '') {
   age = prompt('Enter your age again')
}
let country = prompt('Enter the country you live in')
while(country === null || country === undefined || country === '') {
  country = prompt('Enter the country you live in again')
}
let occupation = prompt('Enter your occupation')
while(occupation === null || occupation  === undefined || occupation === '') {
  occupation = prompt('Enter your occupation again') }

let info = {
  firstname: userName,
  surname:surname,
  age:age,
  country:country,
  occupation:occupation
}

let userInfo = `<div class='userInfo'>
<p>First name: ${info.firstname}</p>
<p>Surname: ${info.surname}</p>
<p>Age: ${info.age}</p>
<p>Country: ${info.country}</p>
<p>Occupation: ${info.occupation}</p>
</div>`

document.getElementById('usersInfo').innerHTML = userInfo

console.log('Users info: ', Object.entries(info))