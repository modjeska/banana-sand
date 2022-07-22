const Employee = require("./employee")

class Engineer extends Employee {
  constructor(employeeFirst, employeeID, employeeEmail, gitHub) {
    super(employeeFirst, employeeID, employeeEmail)
    this.gitHub = gitHub
    this.role = "Engineer"
  }
  getGitHubName() {
    return this.gitHub
  }
  getJob() {
    return "Engineer"
  }
}

module.exports = Engineer