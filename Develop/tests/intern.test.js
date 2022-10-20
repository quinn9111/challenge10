const intern = require("../lib/intern");

test("Validate intern's school.", () => {
    const testSchool = "BootCamp";
    const employeeInstance = new intern("Harley", 121918, "HarleyQuinn@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});