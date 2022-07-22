const Employee = require("../assets/js/employee")
const employeeTest = new Employee('Sam', 77, 'samsmith@email.com')

describe("Employee Class Tests", () => {
  test('Employee Name', () => {
    expect(employeeTest.getFirst()).toBe("Sam")
  })
  test('Employee ID', () => {
    expect(employeeTest.getID()).toBe(77)
  })
  test('Employee Email', () => {
    expect(employeeTest.getEmail()).toBe('samsmith@email.com')
  })
})