const Engineer = require("../assets/js/engineer")
const engineerTest = new Engineer('Eric', 78, 'eric@email.com', "ericbuilds")

describe("Engineer Class Tests", () => {
  test('Engineer Name', () => {
    expect(engineerTest.getFirst()).toBe("Eric")
  })
  test('Engineer ID', () => {
    expect(engineerTest.getID()).toBe(78)
  })
  test('Engineer Email', () => {
    expect(engineerTest.getEmail()).toBe('eric@email.com')
  })
  test('Engineer GitHub', () => {
    expect(engineerTest.getGitHubName()).toBe("ericbuilds")
  })
  test('Engineer Role', () => {
    expect(engineerTest.getJob()).toBe("Engineer")
  })
})
