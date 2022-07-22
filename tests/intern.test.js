const Intern = require("../assets/js/intern")
const internTest = new Intern('Marie', 79, 'marie@email.com', "UCI")

describe("Intern Class Tests", () => {
  test('Intern Manager Name', () => {
    expect(internTest.getFirst()).toBe("Marie")
  })
  test('Intern ID', () => {
    expect(internTest.getID()).toBe(79)
  })
  test('Intern Email', () => {
    expect(internTest.getEmail()).toBe('marie@email.com')
  })
  test('Intern School', () => {
    expect(internTest.getUniversity()).toBe("UCI")
  })
  test('Intern Role', () => {
    expect(internTest.getJob()).toBe("Intern")
  })
})