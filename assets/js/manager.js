const Employee = require("./employee")

class Manager extends Employee {
  constructor(employeeFirst, employeeID, employeeEmail, officeNumber) {
    super(employeeFirst, employeeID, employeeEmail)
    this.officeNumber = officeNumber
    this.role = "Manager"
  }
  getOffice() {
    return this.officeNumber
  }
  getJob() {
    return "Manager"
  }
}

module.exports = Manager