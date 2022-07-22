class Employee {
  constructor(employeeFirst, employeeID, employeeEmail) {
    this.employeeFirst = employeeFirst
    this.employeeID = employeeID
    this.employeeEmail = employeeEmail
    let error = "ERR: No job Assigned"
  }
  getFirst() {
    return this.employeeFirst
  }
  getEmail() {
    return this.employeeEmail
  }
  getID() {
    return this.employeeID
  }
  getJob() {
    return 'Job: Employee'
  }
}

module.exports = Employee
