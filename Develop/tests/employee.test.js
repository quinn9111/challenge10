const employee = require("../lib/employee");

test("Validate employee name.", () => {
    const testName = "Harley";
    const employeeInstance = new employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Validate employee ID.", () => {
    const testID = 121918;
    const employeeInstance = new employee(testID, "Harley");
    expect(employeeInstance.getId()).toBe(testID);
})

test("Validate the email address.", () => {
    const testEmail = "HarleyQuinn@gmail.com";
    const employeeInstance = new employee(121918, "Harley", testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})
