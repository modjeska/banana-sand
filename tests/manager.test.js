const Manager = require("../assets/js/manager")
const managerTest = new Manager('Brian', 80, 'brian@email.com', "1A")

describe("Manager Class Tests", () => {
  test('Manager Name', () => {
    expect(managerTest.getFirst()).toBe("Brian")
  })
  test('Manager ID', () => {
    expect(managerTest.getID()).toBe(80)
  })
  test('Manager Email', () => {
    expect(managerTest.getEmail()).toBe('brian@email.com')
  })
  test('Manager Office', () => {
    expect(managerTest.getOffice()).toBe('1A')
  })
  test('Manager Role', () => {
    expect(managerTest.getJob()).toBe("Manager")
  })
})