const Employee = require("./employee")

class Intern extends Employee {
  constructor(employeeFirst, employeeID, employeeEmail, employeeSchool) {
    super(employeeFirst, employeeID, employeeEmail)
    this.employeeSchool = employeeSchool
    this.role = "Intern"
  }
  getUniversity() {
    return this.employeeSchool
  }
  getJob() {
    return "Intern"
  }
}

module.exports = Intern