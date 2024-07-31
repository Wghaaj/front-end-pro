let company = {
  sales:[{name:'John', salary:1000}, {name:'Alice', salary:600}],
  development:{
    web:[{name:'Peter', salary:2000}, {name:'Alex', salary:1800}],
    interns: [{name:'Jack', salary:1300}]
  },
}

function calculateTotalSalary(department){
  if (Array.isArray(department)) {
    return department.reduce((sum, empl) => sum + empl.salary, 0)
  } else {
    let sum = 0;
    for(let subDep of Object.values(department)) {
      sum += calculateTotalSalary(subDep)
    }
    return sum
  }
}

let totalSalary = calculateTotalSalary(company)
console.log("Total salary is: " + totalSalary)