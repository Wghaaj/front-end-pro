let contactBook = {
  contacts: [
    {
      Name: 'Amily',
      Tel: '07465729635',
      Email: 'amily132@gmail.com'
    },
    {
      Name: 'Ema',
      Tel: '064279426465',
      Email: 'ema5894@gmail.com'
    },
    {
      Name: 'Walker',
      Tel: '03846203746',
      Email: 'walker3810@gmail.com'
    },
    {
      Name: 'Andrew',
      Tel: '07243728936',
      Email: 'andrew7391@gmail.com'
    }
  ]
}

function find(name){
  return contactBook.contacts.find((contact) => contact.Name === name)
}

let found = find('Amily')
console.log(found)

found = find('Andrew')
console.log(found)

function push(name, tel, email) {
  let contact = {
    Name:name,
    Tel:tel,
    Email:email,
  }

  contactBook.contacts.push(contact)
  return contact
}

let pushed = push('milley', '0926738654', 'milley7920@gmail.com')
console.log(pushed)
console.log(contactBook)